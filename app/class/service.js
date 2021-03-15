import { tracked } from '@glimmer/tracking';
export default class Service {
  services;
  promos;
  @tracked codePromo;
  constructor(datas, promos) {
    this.services = datas;
    this.promos = promos;
  }
  get activeServices() {
    return this.services.filterBy('active', true);
  }
  get countActive() {
    return this.activeServices.length;
  }
  get sumActive() {
    let result = 0;
    this.activeServices.forEach((s) => {
      if (s.active) {
        result += s.price;
      }
    });
    return result;
    // let prices = mapBy('activeServices', 'price');
    // return sum(prices);
  }
  // @mapBy('activeService', 'price') prices;
  // @sum('prices') sumActive;
  get promo() {
    if (this.codePromo && this.promos[this.codePromo]) {
      return this.promos[this.codePromo] * this.sumActive;
    }
    return 'pas de promotions';
  }
}
