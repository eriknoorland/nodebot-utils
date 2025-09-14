import { Transform } from 'stream';
import { SerialDataPacket, SerialDataPacketCallback, SerialDataStartFlags, SerialMetaData } from './interfaces';

const cobs = require('cobs');

export { SerialDataPacket, SerialDataPacketCallback, SerialDataStartFlags, SerialMetaData };

export class SerialDataParser extends Transform {
  private startFlags: SerialDataStartFlags;
  private numDescriptorBytes: number;
  private onDataPacket: SerialDataPacketCallback;
  private bufferStartFlags: Buffer;
  private buffer: Buffer;

  constructor(startFlags: SerialDataStartFlags, numDescriptorBytes: number, onDataPacket: SerialDataPacketCallback) {
    super();

    this.startFlags = startFlags;
    this.numDescriptorBytes = numDescriptorBytes;
    this.onDataPacket = onDataPacket;
    this.bufferStartFlags = Buffer.from(startFlags)
    this.buffer = Buffer.alloc(0);
  }

  _transform(chunk: Buffer, encoding: string, callback: Function) {
    this.buffer = Buffer.concat([this.buffer, chunk]);

    for (let j = 0; j < this.buffer.length; j++) {
      if (this.buffer.indexOf(this.bufferStartFlags, 0, 'hex') !== -1) {
        const packetStart = this.buffer.indexOf(this.bufferStartFlags, 0, 'hex') - 1;

        if (this.buffer.length > packetStart + this.numDescriptorBytes) {
          const command = this.buffer[packetStart + 3];
          const dataLength = this.buffer[packetStart + 4];

          if (this.buffer.length > packetStart + this.numDescriptorBytes + dataLength + 1) {
            const packetEnd = packetStart + this.numDescriptorBytes + dataLength + 1;
            const packet = this.buffer.slice(packetStart, packetEnd);
            const decodedPacket: Buffer = cobs.decode(packet);
            const packetData: SerialDataPacket = [...decodedPacket.slice(this.numDescriptorBytes)];
            const metaData: SerialMetaData = {
              startFlags: [...this.startFlags],
              command,
              dataLength,
            }

            this.buffer = this.buffer.slice(packetEnd);
            j = 0;

            this.onDataPacket(metaData, packetData);
          }
        }
      }
    }

    callback();
  }
}
