import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: "Холодильник"},
            {id: 2, name: "Смартфон"},
            {id: 3, name: "Ноутбуки"},
            {id: 4, name: "Телевизоры"},
        ];
        this._brands = [
            {id: 1, name: "Samsung"},
            {id: 2, name: "Apple"},
            {id: 3, name: "Lenovo"},
            {id: 4, name: "Asus"},
        ];
        this._devices = [
            {id: 1, name: "Iphone 12 pro", price: 25000, rating: 5, img: "https://media.bite.lt/@bite-lv/sites/default/files/products/2020-10/iphone-12-pro-gold_3.png"},
            {id: 2, name: "Iphone 12 pro", price: 25000, rating: 5, img: "https://media.bite.lt/@bite-lv/sites/default/files/products/2020-10/iphone-12-pro-gold_3.png"},
            {id: 3, name: "Iphone 12 pro", price: 25000, rating: 5, img: "https://media.bite.lt/@bite-lv/sites/default/files/products/2020-10/iphone-12-pro-gold_3.png"},
            {id: 4, name: "Iphone 12 pro", price: 25000, rating: 5, img: "https://media.bite.lt/@bite-lv/sites/default/files/products/2020-10/iphone-12-pro-gold_3.png"},
            {id: 5, name: "Iphone 12 pro", price: 25000, rating: 5, img: "https://media.bite.lt/@bite-lv/sites/default/files/products/2020-10/iphone-12-pro-gold_3.png"},
        ];
        this._selectedType = {};
        this._selectedBrand = {};
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

    setSelectedType(type) {
        this._selectedType = type;
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand;
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

    get selectedType() {
        return this._selectedType;
    }

    get selectedBrand() {
        return this._selectedBrand;
    }
}