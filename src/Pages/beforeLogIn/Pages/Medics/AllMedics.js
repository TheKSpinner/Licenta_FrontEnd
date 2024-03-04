import classes from './AllMedics.module.css'
import MedicsList from './MedicsList';
import React, { useState } from 'react';
import Lovin from '../../../../Misc/Lovin.png'
import Bianca from '../../../../Misc/Bianca.png'
import Cristina from '../../../../Misc/Cristina.png'

const medics_data = [
    {
        name: 'Lovin Andrei',
        description: 'Urolog',
        image: Lovin,
        location: 'Bucuresti',
        rating: '5'
    },
    {
        name: 'Cernat Bianca',
        description: 'Oncolog',
        image: Bianca,
        location: 'Bucuresti',
        rating: '5'
    },
    {
        name: 'Aionitoaie Cristina',
        description: 'Psihiatru',
        image: Cristina,
        location: 'Bucuresti',
        rating: '5'
    },
    {
        name: 'Sarah Lee',
        description: 'Dermatologist',
        image: 'https://example.com/sarah.jpg',
        location: 'Iasi',
        rating: '5'
    },
    {
        name: 'Michael Chang',
        description: 'Orthopedic Surgeon',
        image: 'https://example.com/michael.jpg',
        location: 'Iasi',
        rating: '5'
    },
    {
        name: 'Emily Davis',
        description: 'Neurologist',
        image: 'https://example.com/emily.jpg',
        location: 'Iasi',
        rating: '5'
    },

];


function AllMedics() {
    const [searchTerm, setSearchTerm] = useState('');


    const groupMedicsByLocation = () => {
        const groupedMedics = {};

        medics_data.forEach((medic) => {
            const location = medic.location || 'Other'; // Default to 'Other' if no location is specified
            if (!groupedMedics[location]) {
                groupedMedics[location] = [];
            }
            groupedMedics[location].push(medic);
        });

        return groupedMedics;
    };

    const groupedMedics = groupMedicsByLocation();

    return (
        <section>
            <h1 className={classes.header}>All Medics</h1>
            <input
                className={classes.search}
                type="text"
                placeholder="Search medics"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />


            {Object.keys(groupedMedics).map((location) => (
                <div key={location}>
                    <h2 className={classes.title}>{location}</h2>
                    <MedicsList medics={groupedMedics[location]} searchTerm={searchTerm} />
                </div>
            ))}

        </section>
    );
}

export default AllMedics;