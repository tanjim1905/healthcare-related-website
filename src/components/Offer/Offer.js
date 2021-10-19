import React from 'react';
import './Offer.css';

const Offer = () => {
    return (
        <div className="offer-main">
            <div className="container">
                <div className="offer-container ms-auto">
                    <span className="offer-price text-info">30%</span> <span className="text-secondary discount">Discount</span>
                    <h1>Only in October</h1>
                    <p>Nulla facilisi. Nulla egestas vel lacus sed interdum. Sed mollis, orci elementum eleifend tempor, nunc libero porttitor tellus.</p>
                    <div className="btn btn-warning fw-bold">Read more...</div>
                </div>
            </div>
        </div>
    );
};

export default Offer;