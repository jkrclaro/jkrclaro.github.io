import React from 'react';
import { Link } from 'react-router-dom';

import lightdeo from '../imgs/lightdeo.png';
import megaphonely from '../imgs/megaphonely.png';
import workout from '../imgs/workout.png';
import eirand from '../imgs/eirand.png';


const grayBorderStyle = {
    border: '1px solid #222222'
}


class Portfolio extends React.Component {

    render() {
        return (
            <div>
                <div className='row text-center'>
                    <div className='col-lg-4 mb-3'>
                        <Link to='/portfolios/eirand'>
                            <img src={eirand} alt='eirand' className='img-fluid rounded' style={grayBorderStyle}/>
                        </Link>
                    </div>
                    <div className='col-lg-4 mb-3'>
                        <Link to='/portfolios/workout'>
                            <img src={workout} alt='workout' className='img-fluid rounded' style={grayBorderStyle}/>
                        </Link>
                    </div>
                    <div className='col-lg-4 mb-3'>
                        <Link to='/portfolios/lightdeo'>
                            <img src={lightdeo} alt='lightdeo' className='img-fluid rounded' style={grayBorderStyle}/>
                        </Link>
                    </div>
                    <div className='col-lg-4 mb-3'>
                        <Link to='/portfolios/megaphonely'>
                            <img src={megaphonely} alt='megaphonely' className='img-fluid rounded'/>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio;