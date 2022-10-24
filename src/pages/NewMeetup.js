
import { useNavigate } from 'react-router-dom';

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetup(props) {
    const navigate = useNavigate();

    function addMeetupHandler(meetupData){
        //fetch('https://some-firebase-realtime-database-name/meetups.json', {
        fetch('http://localhost:3001/meetups', {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {'Content-Type': 'application/json'}
        }).then(() => navigate('/'));
    }

    return (
      <section>
          <h1>New Meetup</h1>
          <NewMeetupForm onAddMeetup={addMeetupHandler}/>
      </section>
    );
  }
  
  export default NewMeetup;
  