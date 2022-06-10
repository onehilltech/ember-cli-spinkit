import SkComponent from "./-sk-component";

export default class SkPartsComponent extends SkComponent {
  defaultPartsCount = 5;

  get parts () {
    let parts = this.args.parts || this.defaultPartsCount;
    return Array.isArray (parts) ? parts : new Array (parts);
  }
}
