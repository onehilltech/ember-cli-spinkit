import SkComponent from "./-sk-component";
import { isArray } from 'lodash-es';

export default class SkPartsComponent extends SkComponent {
  defaultPartsCount = 5;

  get parts () {
    let parts = this.args.parts || this.defaultPartsCount;
    return isArray (parts) ? parts : new Array (parts);
  }
}
