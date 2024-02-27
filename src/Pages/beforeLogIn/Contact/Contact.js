import Card from '../../../UI/Card/Card'
import classes from './Contact.module.css'

const paragraf = 'Get in touch with us for any information or help at: \n  Tel.: 0759874658 \n    Email: trauma.team@tteam.com';

function Contact() {
    return <Card>
            <div>

                <h1 className={classes.header}>Contact Information!</h1>
                <p className={classes.body}>{paragraf}</p>

            </div>
        </Card>;

}

export default Contact;
