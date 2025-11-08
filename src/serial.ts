import { Transform } from 'stream';
import { ChunkReceivedCallback, SerialDataPacket, SerialDataPacketCallback, SerialDataStartFlags, SerialMetaData } from './interfaces';

const cobs = require('cobs');

function findStartFlagsIndex(chunk: Buffer, startFlags: Buffer) {
  return chunk.findIndex((_, i) => startFlags.every((value, j) => chunk[i + j] === value));
}

export class SerialDataParser extends Transform {
  private startFlags: SerialDataStartFlags;
  private numDescriptorBytes: number;
  private onDataPacket: SerialDataPacketCallback;
  private onChunkReceived: ChunkReceivedCallback | undefined;
  private bufferStartFlags: Buffer;

  constructor(startFlags: SerialDataStartFlags, numDescriptorBytes: number, onDataPacket: SerialDataPacketCallback, onChunkReceived?: ChunkReceivedCallback) {
    super();

    this.startFlags = startFlags;
    this.numDescriptorBytes = numDescriptorBytes;
    this.onDataPacket = onDataPacket;
    this.onChunkReceived = onChunkReceived;
    this.bufferStartFlags = Buffer.from(startFlags);
  }

  _transform(chunk: Buffer, encoding: string, callback: Function) {
    this.onChunkReceived && this.onChunkReceived(chunk);

    let decodedChunk = cobs.decode(chunk);
    
    while (findStartFlagsIndex(decodedChunk, this.bufferStartFlags) !== -1) {
      const packetStart = findStartFlagsIndex(decodedChunk, this.bufferStartFlags);
      
      if (decodedChunk.length > packetStart + this.numDescriptorBytes) {
        const command = decodedChunk[packetStart + this.bufferStartFlags.length];
        const dataLength = decodedChunk[packetStart + this.bufferStartFlags.length + 1];
        const packetEnd = packetStart + this.numDescriptorBytes + dataLength;
        const packet = decodedChunk.slice(packetStart, packetEnd);
        const packetData: SerialDataPacket = [...packet.slice(this.numDescriptorBytes)];
        const metaData: SerialMetaData = {
          startFlags: this.startFlags,
          command,
          dataLength,
        };

        decodedChunk = decodedChunk.slice(packetEnd);

        this.onDataPacket(metaData, packetData);
      }
    }

    callback();
  }
}
