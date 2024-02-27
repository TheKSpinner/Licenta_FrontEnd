import Card from "../../../UI/Card/Card";
import classes from './OpeningHours.module.css'

const clinicHours = [
    { day: 'Monday', hours: '8:00 AM - 5:00 PM' },
    { day: 'Tuesday', hours: '8:00 AM - 5:00 PM' },
    { day: 'Wednesday', hours: '8:00 AM - 5:00 PM' },
    { day: 'Thursday', hours: '8:00 AM - 5:00 PM' },
    { day: 'Friday', hours: '8:00 AM - 5:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 12:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
];

function OpeningHours() {
    return <div>
       <Card>
           <h2 className={classes.header}>Opening Hours</h2>
           <p className={classes.body}>Please note that there are medics available at all times, outside of these intervals, for emergencies.</p>
           <ul className={classes.body}>
               {clinicHours.map((item, index) => (
                   <li key={index}>
                       <strong>{item.day}:</strong> {item.hours}
                   </li>
               ))}
           </ul>
       </Card>
    </div>
}

export default OpeningHours;