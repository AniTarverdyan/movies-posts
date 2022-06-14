import { action, observable, runInAction, makeObservable } from "mobx";

export class Store {
    @observable.ref data: [];

    constructor() {
        makeObservable(this)
    }

    @action
    getData() {
        fetch(`https://www.omdbapi.com/?apikey=2d49a8ef&s=America&page=${page}`)
        .then(res => res.json())
            .then(result => runInAction(result?.Search))
    }
}

