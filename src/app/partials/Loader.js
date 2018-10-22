import React from 'react';
import './Loader.css';
import PropTypes from 'prop-types';

const Loader = ({ width = '28px', height = '28px' }) => {

    return (
        <div className="Loading" style={{ width, height }}></div>
    );
};
Loader.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string
};

export default Loader;