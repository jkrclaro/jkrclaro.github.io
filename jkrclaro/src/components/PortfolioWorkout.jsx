import React from 'react';

import workout from '../imgs/workout.png';


class PortfolioWorkout extends React.Component {

    render() {
        return (
            <div className='row'>
                <div className='col-lg-2'></div>
                <div className='col-lg-8'>
                    <img src={workout} alt='workout' className='img-fluid rounded mb-3' />
                    <p>
                        <b>Workout</b> is a random exercise generator based
                        on the current month and day. It gives you 6 random
                        exercises to do.
                    </p>
                </div>
                <div className='col-lg-2'></div>
            </div>
        )
    }
}

export default PortfolioWorkout;