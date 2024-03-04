import ServicesList from "./ServicesListLogged";
import React, { useState } from 'react';
import classes from './AllServicesLogged.module.css'

const services_data = [
    {
        title: 'Laboratory Services',
        list: [
            'Iron content: $5\n',
            'Blood cell count: $10\n',
            'Chemistry panel: $15\n',
            'Pathology tests: $20\n',
            'Urine analysis: $8\n',
            'DNA testing: $30\n'
        ]
    },
    {
        title: 'Radiology Services',
        list: [
            'X-ray: $20\n',
            'MRI scan: $50\n',
            'Ultrasound: $30\n',
            'CT scan: $35\n',
            'Mammography: $25\n',
            'PET-CT scan: $60\n'
        ]
    },
    {
        title: 'Medical Consultations',
        list: [
            'General check-up: $25\n',
            'Specialized consultation: $40\n',
            'Mental health assessment: $35\n',
            'Dermatology consultation: $30\n',
            'Pediatric check-up: $20\n',
            'Cardiology evaluation: $45\n'
        ]
    },
    {
        title: 'Dental Services',
        list: [
            'Dental cleaning: $50\n',
            'Tooth extraction: $75\n',
            'Braces consultation: $30\n',
            'Root canal: $90\n',
            'Teeth whitening: $40\n',
            'Oral surgery: $100\n'
        ]
    },
    {
        title: 'Surgical Procedures',
        list: [
            'Appendectomy: $500\n',
            'Laparoscopic surgery: $350\n',
            'Cataract surgery: $300\n',
            'Hip replacement: $800\n',
            'Cosmetic surgery: $200\n',
            'Neurosurgery: $700\n'
        ]
    },
    {
        title: 'Therapy and Counseling',
        list: [
            'Psychological counseling: $40\n',
            'Physical therapy: $35\n',
            'Marriage counseling: $50\n',
            'Substance abuse counseling: $45\n',
            'Speech therapy: $30\n',
            'Occupational therapy: $35\n'
        ]
    },
    {
        title: 'Home Health Care',
        list: [
            'Home nursing: $25 per hour\n',
            'Senior care: $30 per hour\n',
            'Hospice care: $35 per hour\n',
            'Physical assistance: $20 per hour\n',
            'Meal preparation: $15 per hour\n',
            'Medication management: $20 per hour\n'
        ]
    },
    {
        title: 'Women\'s Health Services',
        list: [
            'Prenatal care: $40\n',
            'Obstetrics: $50\n',
            'Gynecological exams: $30\n',
            'Breast health screening: $25\n',
            'Family planning: $20\n',
            'Menopause management: $35\n'
        ]
    },
    {
        title: 'Allergy and Immunology',
        list: [
            'Allergy testing: $35\n',
            'Immunotherapy: $40\n',
            'Asthma management: $30\n',
            'Immunization: $20\n',
            'Food allergy assessment: $25\n',
            'Autoimmune disease management: $45\n'
        ]
    },
    {
        title: 'Chiropractic Care',
        list: [
            'Spinal adjustment: $30\n',
            'Back pain relief: $25\n',
            'Wellness consultation: $20\n',
            'Massage therapy: $35\n',
            'Injury rehabilitation: $40\n',
            'Posture correction: $25\n'
        ]
    },
    {
        title: 'Orthopedic Services',
        list: [
            'Orthopedic consultation: $40\n',
            'Joint replacement: $80\n',
            'Fracture care: $35\n',
            'Sports injury treatment: $30\n',
            'Arthritis management: $45\n',
            'Spinal surgery: $70\n'
        ]
    },
    {
        title: 'Urology and Nephrology',
        list: [
            'Urological consultation: $40\n',
            'Kidney disease management: $45\n',
            'Bladder issues treatment: $30\n',
            'Prostate health screening: $25\n',
            'Incontinence management: $35\n',
            'Kidney stone treatment: $30\n'
        ]
    },
    {
        title: 'Ophthalmology Services',
        list: [
            'Eye exam: $30\n',
            'Cataract evaluation: $40\n',
            'Glaucoma testing: $25\n',
            'Laser vision correction: $60\n',
            'Retina evaluation: $45\n',
            'Corneal disorders treatment: $35\n'
        ]
    },
    {
        title: 'Pediatric Care',
        list: [
            'Pediatric check-up: $20\n',
            'Vaccinations: $25\n',
            'Childhood illness treatment: $30\n',
            'Growth and development assessment: $35\n',
            'Teen health services: $40\n',
            'Child behavioral health: $30\n'
        ]
    },
    {
        title: 'Emergency Medical Services',
        list: [
            'Emergency room visit: $100\n',
            'Ambulance service: $75\n',
            'Critical care: $150\n',
            'Trauma care: $120\n',
            'Life support: $200\n',
            'Air medical transport: $250\n'
        ]
    },
    {
        title: 'Neurology Services',
        list: [
            'Neurological consultation: $40\n',
            'Stroke evaluation: $45\n',
            'Epilepsy management: $30\n',
            'Alzheimer\'s disease assessment: $35\n',
            'Multiple sclerosis care: $50\n',
            'Headache and migraine treatment: $25\n'
        ]
    },
    {
        title: 'Gastroenterology Services',
        list: [
            'Gastrointestinal consultation: $40\n',
            'Endoscopy: $45\n',
            'Liver disease management: $30\n',
            'Colonoscopy: $35\n',
            'Digestive disorders treatment: $25\n',
            'Inflammatory bowel disease care: $50\n'
        ]
    },
    {
        title: 'Pulmonology Services',
        list: [
            'Respiratory consultation: $40\n',
            'Lung function testing: $45\n',
            'Asthma and COPD care: $30\n',
            'Bronchoscopy: $35\n',
            'Sleep apnea evaluation: $25\n',
            'Pulmonary rehabilitation: $50\n'
        ]
    },
    {
        title: 'Ear, Nose, and Throat (ENT) Care',
        list: [
            'ENT consultation: $40\n',
            'Hearing evaluation: $45\n',
            'Sinusitis treatment: $30\n',
            'Tonsillectomy: $35\n',
            'Voice and speech disorders: $25\n',
            'Allergy testing and treatment: $50\n'
        ]
    }

];


function AllServicesLogged() {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <section>
            <h1 className={classes.header}>All Services</h1>
            <div className={classes.searchContainer}> {/* Use a container for centering */}
                <input
                    type="text"
                    placeholder="Search services"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={classes.search}
                />
                {/* Add close button here */}
                <button className={classes.closeButton} onClick={() => window.history.back()}>
                    Close
                </button>
            </div>
            <ServicesList services={services_data} searchTerm={searchTerm} />
        </section>
    );

}

export default AllServicesLogged;