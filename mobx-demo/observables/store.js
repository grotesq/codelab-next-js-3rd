import { observable } from 'mobx';

class Store {
    @observable count = 0;
}

const store = new Store();

export default store;