import React from 'react';

import eirand from '../imgs/eirand.png';


const grayBorderStyle = {
    border: '1px solid #222222'
}


class PortfolioEirand extends React.Component {

    render() {
        return (
            <div className='row'>
                <div className='col-lg-2'></div>
                <div className='col-lg-8'>
                    <img src={eirand} alt='gravitywebinar' style={grayBorderStyle} className='img-fluid rounded mb-3' />
                    <p>
                        <b>Eirand</b> is an on-demand platform for freelancing
                        photographers to get photography work.
                    </p>
                    <b>Technology</b>
                    <ul>
                        <li>
                            Django, Python, Javascript, HTML, Bootstrap
                        </li>
                    </ul>
                </div>
                <div className='col-lg-2'></div>
            </div>
        )
    }
}

export default PortfolioEirand;