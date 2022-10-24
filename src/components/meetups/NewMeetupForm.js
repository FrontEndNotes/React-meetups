import { useRef } from "react";

import Card from "../ui/Card";
import classes from './NewMeetupForm.module.css';

function NewMeetupForm(props) {
    const titleInputRef =  useRef();
    const imageInputRef =  useRef();
    const addressInputRef =  useRef();
    const descriptionInputRef =  useRef();

    function submitHandler(event) {
        event.preventDefault();

        const meetupData = {
            title: titleInputRef.current.value,
            image: imageInputRef.current.value,
            address: addressInputRef.current.value,
            description: descriptionInputRef.current.value,
        };

        props.onAddMeetup(meetupData);
    }

    return (
      <Card>
        <form className={classes.form} onSubmit={submitHandler}>

            {/* title */}
            <div className={classes.control}>
                <label htmlFor="title">Meetup title</label>
                <input type="text" required id="title" ref={titleInputRef}/>
            </div>

            {/* image */}
            <div className={classes.control}>
                <label htmlFor="image">Meetup image</label>
                <input type="url" id="image" ref={imageInputRef}/>
            </div>

            {/* address */}
            <div className={classes.control}>
                <label htmlFor="address">Meetup address</label>
                <input type="text" id="address" ref={addressInputRef}/>
            </div>

            {/* description */}
            <div className={classes.control}>
                <label htmlFor="description">Meetup description</label>
                <textarea rows="3" id="description" ref={descriptionInputRef}/>
            </div>

            {/* actions */}
            <div className={classes.actions}>
                <button type="submit">Add meetup</button>
            </div>
        </form>
      </Card>
    );
  }
  
  export default NewMeetupForm;