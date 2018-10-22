import axios from 'axios';
import { coinsEndpoint, singleCoinEndpoint } from '../shared/constants';


class Currencies {

    fetchCoins(page) {
        return axios.get(`${coinsEndpoint}&page=${page}`)
            .then(res => res.data);
    }

    fetchSingleCoin(id) {
        return axios.get(`${singleCoinEndpoint}${id}`)
        .then(res => res.data);
    }
}

export const currencies = new Currencies();