import React, { Component } from 'react';
import { currencies } from '../../services/currencies';
import './List.css';
import Loader from '../partials/Loader';
import ListItem from '../components/list/ListItem';
import Pagination from '../components/pagination/Pagination';

class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            currencies: [],
            error: null,
            totalPages: 0,
            page: 1,
        }
        this.handlePaginationClick = this.handlePaginationClick.bind(this);
        this.loadCurrencies = this.loadCurrencies.bind(this);
    }

    componentDidMount() {
        this.loadCurrencies();
    }

    loadCurrencies() {
        this.setState({ loading: true });
        const { page } = this.state;
        currencies.fetchCoins(page)
            .then(res => this.setState({ currencies: res.currencies, totalPages: res.totalPages, loading: false }))
            .catch(err => this.setState({ error: err.message, loading: false }));
    }

    handlePaginationClick(direction) {
        const { page } = this.state;
        let nextPage = page;
        nextPage = direction === 'next' ? nextPage + 1 : nextPage - 1
            ;
        this.setState({ page: nextPage }, () => this.loadCurrencies());

    }

    render() {
        const { loading, currencies, error, page, totalPages } = this.state;
        if (loading) {
            return <div className="loading-container"><Loader /> </div>
        }
        if (error) {
            return <div className="error">{error}</div>
        }

        return (
            <div>
                <div className="Table-container">
                    <table className="Table">
                        <thead className="Table-head">
                            <tr>
                                <th>Cryptocurrency</th>
                                <th>Price</th>
                                <th>Market Cap</th>
                                <th>24h Change</th>
                            </tr>
                        </thead>
                        <tbody className="Table-body">
                            {currencies.map(currency => <ListItem key={currency.id} currency={currency} />)}
                        </tbody>
                    </table>
                </div>
                <Pagination
                    page={page}
                    totalPages={totalPages}
                    handlePaginationClick={this.handlePaginationClick}
                />
            </div>
        );
    }
}

export default List;