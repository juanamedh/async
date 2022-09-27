import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

async function fetchData(urlAPI) {
    const response = await fetch(urlAPI);
    const data = await response.json();
    return data;
}