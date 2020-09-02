import Component from '@glimmer/component';

export default class SkComponent extends Component {
  defaultPartsCount = 5;

  get parts () {
    return new Array (this.args.parts || this.defaultPartsCount);
  }
}
