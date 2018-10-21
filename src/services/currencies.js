import axios from 'axios';
import { coinsEndpoint } from '../shared/constants';


class Currencies {

    fetchCoins() {
        return axios.get(coinsEndpoint)
            .then(res => {
                const data = res.data.currencies;
                return data.map(c => c);
            });
            
    }
}

export const currencies = new Currencies();