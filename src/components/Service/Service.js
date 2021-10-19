import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    // console.log(props);
    const {id, title, description, img} = props.service;
    return (
        <div className="col-12 col-md-6 col-lg-4">
          <div class="card h-100">
            <img src={img} style={{height: '200px'}} class="card-img-top p-3" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">{title}</h5>
              <p class="card-text py-2" style={{height: '150px'}}>{description}</p>
              <Link className="text-decoration-none" to={`/details/${id}`}>
                <div className="btn-info w-50 mx-auto py-2 fw-bold text-center">Details</div>
              </Link>
            </div>
          </div>
        </div>
    );
};

export default Service;