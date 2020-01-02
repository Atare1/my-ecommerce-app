import axios from 'axios'

let url = 'http://localhost:4000';

export function getProducts(){
    return axios.get(`${url}/products`)
    .then(response => response.data)
}

export function getFashions(){
    return axios.get(`${url}/fashions`)
    .then(response => response.data)
};

export function getHouseholds(){
    return axios.get(`${url}/households`)
    .then(response => response.data)
};

export function getPhones(){
    return axios.get(`${url}/phones`)
    .then(response => response.data)
};

export function getComputers(){
    return axios.get(`${url}/computers`)
    .then(response => response.data)
};

export function getElectronics(){
    return axios.get(`${url}/electronics`)
    .then(response => response.data)
};