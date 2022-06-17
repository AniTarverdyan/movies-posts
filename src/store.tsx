import {observable} from 'mobx';

class PageStore {
  @observable page = 1;

  increment() { this.page++ }

}

export default new PageStore();