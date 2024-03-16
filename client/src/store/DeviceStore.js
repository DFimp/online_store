import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: "Холодильник"},
            {id: 2, name: "Смартфон"}
        ];
        this._brands = [
            {id: 1, name: "Samsung"},
            {id: 2, name: "Apple"}
        ];
        this._devices = [
            {id: 1, name: "Iphone 12 pro", price: 25000, rating: 5, img: "C:/Users/iliaf/Desktop/Новая папка/программирование/projects/git_project/learn_project_shop/learn_project_shop/server/static/83dbc51f-25eb-4e13-a4a3-9ad480244dc5.jpg"}
        ];
        makeAutoObservable(this);
    }

    setTypes(types) {
        this._types = types;
    }

    setBrands(brand) {
        this._brands = brand;
    }

    setDevices(devices) {
        this._devices = devices;
    }

    get types() {
        return this._types;
    }

    get brands() {
        return this._brands;
    }

    get devices() {
        return this._devices;
    }
}