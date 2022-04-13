import React from 'react';
import PropTypes from 'prop-types'

function Movie({ id, title, genre, prdtYear }) {
    return (
        <div>
            <h2>{title}</h2>
            <h4>{genre}, {prdtYear}<br></br><br></br></h4>
        </div>
    );
}

Movie.propTypes = {
    title: PropTypes.string.isRequired
};

export default Movie;