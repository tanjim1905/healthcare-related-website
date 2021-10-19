import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    // console.log(props);
    const {id, title, description, img} = props.service;
    return (
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card h-100">
            <img src={img} style={{height: '200px'}} className="card-img-top p-3" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text py-2" style={{height: '150px'}}>{description}</p>
              <Link className="text-decoration-none" to={`/details/${id}`}>
                <div className="btn-info w-50 mx-auto py-2 fw-bold text-center">Details</div>
              </Link>
            </div>
          </div>
        </div>
    );
};

export default Service;