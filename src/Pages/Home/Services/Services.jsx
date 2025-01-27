import { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, []);
    console.log(services);
    return (
    <div className="mt-4 mb-20 text-black">
        <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-orange-600">Our Services</h3>
            <h2 className="text-3xl font-bold">Our Service Area</h2>
            <p className='text-zinc-500 '>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
        </div>
        <div className="grid grid-cols-1 mt-8 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                services.map(service => <ServiceCard
                    key={service._id}
                    service={service}
                ></ServiceCard>)
            }
        </div>
    </div>
    );
};

export default Services;