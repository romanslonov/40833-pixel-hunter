import AbstractModel from './abstractModel';

export default new class extends AbstractModel {
  constructor() {
    super();
    this.name = `UserName`;
  }

  get urlRead() {
    return `https://intensive-ecmascript-server-btfgudlkpi.now.sh/pixel-hunter/stats/${this.name}`;
  }

  get urlWrite() {
    return `https://intensive-ecmascript-server-btfgudlkpi.now.sh/pixel-hunter/stats/${this.name}`;
  }
}();
