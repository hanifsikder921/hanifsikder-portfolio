import React, { useEffect, useState } from 'react';

const MyServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/myServices.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <div className="py-10 bg-gray-100 md:my-20 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-5 text-emerald-600">My Services</h2>
            <p className="text-center text-gray-600 max-w-4xl mx-auto mb-8">
                I offer a wide range of web development services, from responsive frontend design to full-stack MERN applications. With hands-on experience and a focus on performance and scalability, I build solutions tailored to your needs.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:max-w-11/12 mx-auto">
                {services.map(service => (
                    <div
                        key={service.id}
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
                    >
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-40 object-contain mb-4"
                        />
                        <h3 className="text-xl font-semibold text-emerald-600">{service.title}</h3>
                        <p className="text-gray-600 mt-2">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyServices;
