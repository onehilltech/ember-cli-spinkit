import SkComponent from "./-sk-component";

export default class SkPartsComponent extends SkComponent {
  defaultPartsCount = 5;

  get parts () {
    return new Array (this.args.parts || this.defaultPartsCount);
  }
}