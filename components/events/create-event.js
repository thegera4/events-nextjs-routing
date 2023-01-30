import { useState } from 'react';
import Button from '../ui/button';
import Card from '../ui/card';
import classes from './create-event.module.css';

function CreateEventForm(props) {
  const [eventData, setEventData] = useState({
    title: '',
    image: '',
    location: '',
    date: '',
    description: '',
    isFeatured: false
  });


  function submitHandler(event) {
    event.preventDefault();
    props.addEvent(eventData)
  }

  console.log(eventData);

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Event Title</label>
          <input 
            type='text' 
            required 
            id='title' 
            value={eventData.title}
            onChange={(event) => setEventData({
                ...eventData,
                title: event.target.value
            })}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Image URL:</label>
          <input 
            type='url' 
            required 
            id='image' 
            value={eventData.image} 
            onChange={(event) => setEventData({
              ...eventData,
              image: event.target.value
            })}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Location (Address):</label>
          <input 
            type='text' 
            required 
            id='address' 
            value={eventData.location} 
            onChange={(event) => setEventData({
              ...eventData,
              location: event.target.value
            })}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor='date'>Date</label>
          <input 
            type='date' 
            required 
            id='date' 
            value={eventData.date} 
            onChange={(event) => setEventData({
              ...eventData,
              date: event.target.value
            })}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            required
            rows='5'
            value={eventData.description}
            onChange={(event) => setEventData({
              ...eventData,
              description: event.target.value
            })}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <Button>Add Event</Button>
        </div>
      </form>
    </Card>
  );
}

export default CreateEventForm;