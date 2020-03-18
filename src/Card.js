import React from 'react'
import PropTypes from 'prop-types'

import './Card.css'

const HIDDEN_SYMBOL = '❓';


const Card = ({card, feedback, onClick, index}) => <div className={`card ${feedback}`}>
    <span className="symbol" onClick={() => onClick(index)}>
        {feedback === 'hidden' ? HIDDEN_SYMBOL : card}
    </span>
</div>;

Card.propTypes = {
    card: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    feedback: PropTypes.oneOf([
        'visible',
        'justMatched',
        'hidden',
        'justMismatched'
    ]),
    index: PropTypes.number.isRequired
};


export default Card