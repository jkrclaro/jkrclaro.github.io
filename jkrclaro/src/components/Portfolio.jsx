import React from 'react';
import { Link } from 'react-router-dom';

import gravitywebinar from '../imgs/gravitywebinar.png';
import megaphonely from '../imgs/megaphonely.png';


const grayBorderStyle = {
    border: '1px solid #222222'
}


class Portfolio extends React.Component {

    render() {
        return (
            <div>
                <div className='row text-center'>
                    <div className='col-lg-4 mb-3'>
                        <Link to='/portfolios/gravitywebinar'>
                            <img src={gravitywebinar} alt='gravitywebinar' className='img-fluid rounded' style={grayBorderStyle}/>
                        </Link>
                    </div>
                    <div className='col-lg-4'>
                        <Link to='/portfolios/megaphonely'>
                            <img src={megaphonely} alt='megaphonely' className='img-fluid rounded'/>
                        </Link>
                    </div>
                    <div className='col-lg-4'></div>
                </div>
            </div>
        )
    }
}

export default Portfolio;