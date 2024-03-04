import React from 'react';
import ServiceItem from './ServicesItemLogged';

function ServicesListLogged(props) {
    const filteredServices = props.services.filter(
        (service) =>
            service.title.toLowerCase().includes(props.searchTerm.toLowerCase()) ||
            service.list.join(' ').toLowerCase().includes(props.searchTerm.toLowerCase())
    );

    return (
        <ul>
            {filteredServices.map((service, index) => (
                <ServiceItem
                    key={index}
                    title={service.title}
                    list={service.list}
                />
            ))}
        </ul>
    );
}

export default ServicesListLogged;
