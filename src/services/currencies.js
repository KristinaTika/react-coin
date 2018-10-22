import axios from 'axios';
import { coinsEndpoint, singleCoinEndpoint, searchEndpoint } from '../shared/constants';


class Currencies {

    fetchCoins(page) {
        return axios.get(`${coinsEndpoint}&page=${page}`)
            .then(res => res.data);
    }

    fetchSingleCoin(id) {
        return axios.get(`${singleCoinEndpoint}${id}`)
        .then(res => res.data);
    }

    fetchSearchedCoins(input) {
        return axios.get(`${searchEndpoint}${input}`)
            .then(res => res.data);
    }
}

export const currencies = new Currencies();