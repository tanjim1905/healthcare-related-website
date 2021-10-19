import React from 'react';
import './Offer.css';

const Offer = () => {
    return (
        <div className="offer-main">
            <div className="container">
                <div className="offer-container ms-auto">
                    <span className="offer-price text-info">30%</span> <span className="text-secondary discount">Discount</span>
                    <h1>Only in October</h1>
                    <p>Good Health Sale is live exclusively for Care Plan members. Book lab tests from home and off for 30%.</p>
                    <div className="btn btn-warning fw-bold">Read more...</div>
                </div>
            </div>
        </div>
    );
};

export default Offer;