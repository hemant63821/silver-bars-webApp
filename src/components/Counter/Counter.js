import React from 'react';
import './Counter.scss'


export default function Counter({ decrementCount, incrementCount, value, count }) {
    return (
        <div className="qty mt-2">
            <span className="minus bg-dark" onClick={decrementCount} >-</span>
            <input className="count" name="qty" value={count} readOnly />
            <span className="plus bg-dark" onClick={incrementCount}>+</span>
        </div>
    )
}
