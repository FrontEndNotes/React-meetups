import { useEffect, useState } from "react";

import MeetupList from "../components/meetups/MeetupList";

function AllMeetups() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch('http://localhost:3001/meetups')
        .then(response => response.json())
        .then(data => {
            setIsLoading(false);
            setLoadedMeetups(data);
        });
        // fetch('https://some-firebase-realtime-database-name.firebaseio.com/meetups.json')
        // .then(response => response.json())
        // .then(data => {
        //     const meetups = [];

        //     for (const key in data) {
        //         const meetup = {
        //             id: key,
        //             ...data[key]
        //         };
        //         meetups.push(meetup);
        //     }
            
        //     setIsLoading(false);
        //     setLoadedMeetups(meetups);
        // });
    }, []);

    if (isLoading) {
        return (
            <div>Loading data...</div>
        );
    }

    return (
        <div>
            <h1>All Meetups</h1>
            <MeetupList meetups={loadedMeetups} />
        </div>
    );
}

export default AllMeetups;
