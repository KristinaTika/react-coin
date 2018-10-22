import React, { Component } from 'react';
import './Detail.css';
import { currencies } from '../../services/currencies';
import Loader from '../partials/Loader';
import { renderChangePercent } from '../helpers/Helpers';

class Detail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currency: {},
            loading: false,
            error: null
        };
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.setState({ loading: true });
        currencies.fetchSingleCoin(id)
            .then(res => this.setState({ currency: res, loading: false }))
            .catch(err => this.setState({ error: err.message, loading: false }))
    }

    render() {
        const { loading, error, currency } = this.state;

        if (loading) {
            return <div className="loading-continer"><Loader /></div>
        }

        if (error) {
            return <div className="error"> {error}</div>
        }

        return (
            <div className="Detail">
                <h1 className="Detail-heading">
                    {currency.name} ({currency.symbol})
                </h1>
                <div className="Detail-container">
                    <div className="Detail-item">
                        Price <span className="Detail-value">$ {currency.price}</span>
                    </div>
                    <div className="Detail-item">
                        Rank <span className="Detail-value"> {currency.rank}</span>
                    </div>
                    <div className="Detail-item">
                        24h Change <span className="Detail-value"> {renderChangePercent(currency.percentChange24h)}</span>
                    </div>
                    <div className="Detail-item">
                        <span className="Detail-title">
                            Market cap
                       </span>
                        <span className="Detail-dollar">
                            $
                       </span>
                        {currency.marketCap}
                    </div>
                    <div className="Detail-item">
                        <span className="Detail-title">
                            24h Volume
                       </span>
                        <span className="Detail-dollar">
                            $
                       </span>
                        {currency.volume24h}
                    </div>
                    <div className="Detail-item">
                        <span className="Detail-title">
                            Total supply
                       </span>
                        {currency.totalSupply}
                    </div>
                </div>
            </div>
        );
    }
}

export default Detail;