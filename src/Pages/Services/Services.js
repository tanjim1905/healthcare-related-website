import React from 'react';
import Service from '../../components/Service/Service';
import useServices from '../../Hooks/useServices';

const Services = () => {
    const [services] = useServices();
    console.log(services);
    return (
        <div className="container my-5 text-center">
            <h2 className="my-4 fw-bold">Our Services</h2>

            <div className="row g-4">
                {
                    services.map((service) => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;