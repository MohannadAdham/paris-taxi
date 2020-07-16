import React, { useState, useEffect } from 'react';
import Ride from './Ride';

const RidesList = () => {

    const [rides, setRides] = useState([]);

    useEffect(() => {
        // fetch the list of the rides objects from the server
        // This function will be executed only on the load of the component
        const fetchData = async () => {
            const result = await fetch("/api/rides");
            const body = await result.json();
            const ridesList = await body['Rides'];
            setRides(ridesList);
        }
        fetchData();
    }, []);


    return (
        <>
            {rides.map((ride, key) => (
                <Ride key={key} rideId={ride.id} distance={ride.distance} startTime={ride.startTime}
                duration={ride.duration} />
            ))}
        </>
    )
};


export default RidesList;