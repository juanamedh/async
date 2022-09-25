import fetch, { Response } from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi) {
    return fetch(urlApi);
};

fetchData(`${API}/products`)
    .then(response => response.json())
    .then(products => {
        console.log(products);
    })
    .then(() => {
        console.log("Hello");
    })
    .catch(error => console.log(error));