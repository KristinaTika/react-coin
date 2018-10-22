import React from 'react';
import PropTypes from 'prop-types';

const ListItem = (props) => {

    const { rank, name, price, marketCap, percentChange24h } = props.currency;

    const renderChangePercent = (percent) => {
        if(percent > 0) {
            return <span className="percent-raised">{percent}% &uarr;</span>
        } else if (percent < 0) {
            return <span className="percent-fallen">{percent}% &darr;</span>
        } else {
            return <span> {percent} </span>
        }
    }

    return (
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
    );
};
ListItem.propTypes = {
    currency: PropTypes.object.isRequired,
}

export default ListItem;