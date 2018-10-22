import axios from 'axios';
import { coinsEndpoint } from '../shared/constants';


class Currencies {

    fetchCoins(page) {
        return axios.get(`${coinsEndpoint}&page=${page}`)
            .then(res => res.data);
            
    }
}

export const currencies = new Currencies();