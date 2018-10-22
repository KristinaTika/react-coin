import React, { Component } from 'react';
import { currencies } from '../../services/currencies';
import './Search.css';
import Loader from '../partials/Loader';
import { withRouter } from 'react-router-dom';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchQuery: '',
            loading: false,
            searchResults: [],
        };

        this.handleChange = this.handleChange.bind(this);
        this.renderSearchResults = this.renderSearchResults.bind(this);
        this.handleRedirect = this.handleRedirect.bind(this);
    }

    handleChange(e) {
        this.setState({ searchQuery: e.target.value });
        const { searchQuery } = this.state;
        if (!e.target.value) {
            return '';
        }
        this.setState({ loading: true });
        currencies.fetchSearchedCoins(searchQuery)
            .then(res => this.setState({ searchResults: res, loading: false }))
            .catch(err => this.setState({ error: err.message }));
    }

    handleRedirect(currencyId) {
        this.setState({
            searchQuery: '',
            searchResults: [],
        });

        this.props.history.push(`/currency/${currencyId}`)
    }

    renderSearchResults() {
        const { searchResults, searchQuery, loading } = this.state;

        if (!searchQuery) {
            return '';
        }

        if (searchResults.length > 0) {
            return (
                <div className="Search-result-container">
                    {searchResults.map(result => <div
                        className="Search-result"
                        key={result.id}
                        onClick={() => this.handleRedirect(result.id)}
                    >
                        {result.name} ({result.symbol})
                    </div>
                    )}
                </div>
            );
        }
        if (!loading) {
            return (
                <div className="Search-result-container">
                    <div className="Searh-no-result">
                        No results found.
                    </div>
                </div>
            );
        }
    }

    render() {
        const { loading, searchQuery } = this.state;
        return (
            <div className="Search">
                <span className="Search-icon" />
                <input
                    type="text"
                    onChange={this.handleChange} className="Search-input"
                    placeholder="Currency name"
                    value={searchQuery}
                />
                <div className="Search-loading">
                    {loading && <Loader width="12px" height="12px" />}
                </div>
                {this.renderSearchResults()}
            </div>
        );
    }
}

export default withRouter(Search);