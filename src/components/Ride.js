import React, { useState, useEffect } from 'react';
import calculatePrice, { parseISOString, convertToHHMMSS, calculateEndTime } from './helpers';


const Ride = ({rideId, distance, startTime, duration}) => {

    const [isClicked, setIsClicked] = useState('');
    const [color, setColor] = useState('#7986cb');
    const [price, setPrice] = useState(0);

    useEffect(() => {
        // Set the background color of the element to red if the distance of the ride is greater than 2 miles
        if (distance > 2) {
            setColor('#e57373');
        }

        // Calculate the price of the ride
        setPrice(calculatePrice(distance, startTime, duration));

    }, [distance, startTime, duration]);
    
    // convert the duration from seconds to HHMMSS format
    const durationInHHMMSS =  convertToHHMMSS(duration);

    const onRideClick = () => {
        console.log("The element is clicked");
        alert(`${durationInHHMMSS} - ${calculateEndTime(startTime, duration)}`)
        setIsClicked("(clicked)");
    }

    return (
    <div className="Ride-content" onClick={onRideClick} style={{background: color}}>
        <div>{`ID: ${rideId} ${isClicked}`}</div>
        <div>{`Price: ${price} EUR`}</div>
    </div>
    )
}


export default Ride;