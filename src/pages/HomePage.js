import React from 'react';
// import ridesInfo from '../components/ridesInfo';
import RidesList from '../components/RidesList';

const HomePage = () => {

    return (
        <>
            <h1>Welcome to Paris Taxi</h1>
            <h3>Here is the list of the rides: </h3>
            <RidesList />
        </>
    );
};

export default HomePage;

