import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { renderChangePercent } from '../../helpers/Helpers';

const ListItem = (props) => {

    const { id, rank, name, price, marketCap, percentChange24h } = props.currency;

    return (
        <Link to={`/currency/${id}`}>
            <tr>
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
        </Link>
    );
};
ListItem.propTypes = {
    currency: PropTypes.object.isRequired,
}

export default ListItem;