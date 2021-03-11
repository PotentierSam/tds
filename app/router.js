import EmberRouter from '@ember/routing/router';
import config from 'tds/config/environment';

export default class Ex2Route extends Route {
  model() {
    return new Services(datas);
  }
}

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('service');
});
