import { tracked } from '@glimmer/tracking';

export default class contacts {
  @tracked datas;
  constructor(datas) {
    this.datas = datas;
  }

  get contacts() {
    return this.datas.filterBy('isDeleted', false);
  }
}
