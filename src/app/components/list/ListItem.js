import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { renderChangePercent } from '../../helpers/Helpers';

const ListItem = (props) => {

    const { id, rank, name, price, marketCap, percentChange24h } = props.currency;

    return (
        <tr onClick={() => props.history.push(`/currency/${id}`)}>
            <td>
                <span className="Table-rank">{rank}
                </span>
                {name}
            </td>
            <td>
                <span className="Table-dollar">$</span>
                {price}
            </td>
            <td>
                <span className="Table-dollar">$</span>{marketCap}
            </td>
            <td>
                {renderChangePercent(percentChange24h)}
            </td>
        </tr>
    );
};
ListItem.propTypes = {
    currency: PropTypes.object.isRequired,
}

export default withRouter(ListItem);