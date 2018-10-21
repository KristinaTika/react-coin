import React, { Component } from 'react';
import { currencies } from '../../services/currencies';

class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            currencies: [],
            error: null
        }
    }

    componentDidMount() {
        currencies.fetchCoins()
            .then(res => this.setState({ currencies: res }))
            .catch(err => this.setState({ error: err.mesage }));
    }
    
    render() {
        return (
            <div>

            </div>
        );
    }
}

export default List;