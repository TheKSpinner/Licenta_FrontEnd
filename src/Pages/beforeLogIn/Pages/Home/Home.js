import classes from './Home.module.css'
import Card from "../../../../UI/Card/Card";

const tutorial  ='1. The first step you should do when you\'re looking to make an appointment is creating' +
    'an account with us\n\n ' +
    '2. Take a look at the services our medics offer to decide what you want (keep in mind that during the conversation with ' +
    'the medic, he might offer another service that might better suit you \n\n' +
    '3. Select the medic you would like to consult you and select the day and hour interval that suits you\n\n' +
    '4. Send the request and you\'re done. Keep in mind that you should wait to see the confirmation ' +
    'of the medic, just in case there is any problem'

const AboutUs = 'Welcome to Trauma Team, your trusted partner in online medical care! Our mission is to provide you with the highest quality healthcare services, right from the comfort of your home. We understand that when it comes to health, there\'s no compromise. That\'s why we\'ve assembled a dedicated team of experienced medical professionals who are passionate about delivering exceptional care.\n' +
    '\n' +
    'Who We Are?\n' +
    '\n' +
    'At Trauma Team, we are more than just an online medical website; we are a team of committed healthcare providers, including board-certified physicians, nurses, and specialists, all with extensive experience in their respective fields. Our goal is to bridge the gap between traditional healthcare and the convenience of modern technology, ensuring that you receive the care you deserve, when you need it the most.\n' +
    '\n' +
    'What We Stand For?\n' +
    '\n' +
    '1. Quality Care: We believe that healthcare should never be a one-size-fits-all approach. Our team is dedicated to providing personalized medical solutions tailored to your unique needs. Whether it\'s a routine check-up or a complex medical issue, we\'ve got you covered.\n' +
    '\n' +
    '2. Accessibility: Trauma Team is designed with your convenience in mind. No more waiting rooms or lengthy appointment scheduling. You can access our services 24/7, giving you the flexibility to consult with our medical professionals at a time that suits you.\n' +
    '\n' +
    '3. Trust and Confidentiality: Your health and privacy are of utmost importance to us. Rest assured that all your medical information and interactions with our team are treated with the highest level of confidentiality and security.\n' +
    '\n' +
    '4. Education: We believe that informed patients make the best decisions about their health. Our platform provides a wealth of reliable medical information, articles, and resources to empower you with the knowledge you need to make informed choices about your well-being.\n' +
    '\n' +
    'Our Services?\n' +
    '\n' +
    'Trauma Team offers a wide range of medical services, from general health consultations to specialized care in various fields, including:\n' +
    '\n' +
    'Emergency Care: For critical situations that require immediate attention.\n' +
    '\n' +
    'General Medicine: Consult with our experienced physicians for routine check-ups and non-emergency health concerns.\n' +
    '\n' +
    'Specialized Care: Access specialists in fields like cardiology, dermatology, and more.\n' +
    '\n' +
    'Mental Health: Our compassionate mental health professionals are here to support you through difficult times.\n' +
    '\n' +
    'Telemedicine: Receive expert medical advice via video consultations for added convenience.\n\n' +
    'Why Choose Trauma Team?\n' +
    '\n' +
    'Expertise: Our team of medical professionals is experienced, compassionate, and dedicated to delivering the best care.\n' +
    '\n' +
    'Convenience: We make it easy for you to access medical advice, no matter where you are.\n' +
    '\n' +
    'Security: Your privacy is our priority. Your data is protected with the highest security standards.\n' +
    '\n' +
    'Empowerment: We believe in educating our patients so you can take control of your health.\n' +
    '\n' +
    'Trauma Team is here to be your partner on your healthcare journey. We\'re committed to making high-quality medical care accessible and convenient. Join us in shaping the future of healthcare, one online consultation at a time.\n' +
    '\n' +
    'Take the first step towards better health and explore our range of services today. Your well-being is our priority, and we\'re here to support you every step of the way.'

function Home() {
    return (<div>
        <Card>
            <div>
                <h1 className={classes.header}>You want an appointment?</h1>
                <p className={classes.body}>{tutorial}</p>
            </div>
        </Card>

        <Card>
            <div>

                <h2 className={classes.header}>About Us!</h2>
                <p className={classes.body}>{AboutUs}</p>

            </div>
        </Card>
        </div>
    );

}

export default Home;
