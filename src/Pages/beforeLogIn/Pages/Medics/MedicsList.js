// MedicsList Component
import React from 'react';
import MedicItem from './MedicItem';

function MedicsList(props) {
    const filteredMedics = props.medics ? props.medics.filter((medic) => {
        const medicName = medic.name ? medic.name.toLowerCase() : '';
        const medicDescription = medic.description ? medic.description.toLowerCase() : '';
        return (
            medicName.includes(props.searchTerm.toLowerCase()) ||
            medicDescription.includes(props.searchTerm.toLowerCase())
        );
    }) : [];

    return (
        <ul>
            {filteredMedics.map((medic, index) => (
                <MedicItem
                    key={index}
                    name={medic.name || ''}
                    rating={medic.rating || ''}
                    description={medic.description || ''}
                    image={medic.image || ''}
                />
            ))}
        </ul>
    );
}

export default MedicsList;
