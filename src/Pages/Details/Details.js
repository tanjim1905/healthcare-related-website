import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useServices from '../../Hooks/useServices';

const Details = () => {
    const [services] = useServices();
    const {serviceId} = useParams();

    const newSelected = services?.find((service) => service.id === Number(serviceId));
    return (
        <>
            <div className="container text-center my-5">
            <div class="card p-3">
            <img src={newSelected?.img} style={{height: '200px'}} class="card-img-top img-fluid w-100 mx-auto" alt="..."/>
            <div class="card-body py-4">
              <h2 class="card-title">{newSelected?.title}</h2>
              <p class="card-text px-3">{newSelected?.details}</p>

              <Link to="/home"><button className="btn-primary text-bold py-2 px-3">Go to home...</button></Link>
            </div>
          </div>
            </div>
        </>
    );
};

export default Details;