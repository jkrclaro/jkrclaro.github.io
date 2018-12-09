import React from 'react';

import gravitywebinar from '../imgs/gravitywebinar.png';


const grayBorderStyle = {
    border: '1px solid #222222'
}


class PortfolioGravityWebinar extends React.Component {

    render() {
        return (
            <div className='row'>
                <div className='col-lg-2'></div>
                <div className='col-lg-8'>
                    <img src={gravitywebinar} alt='gravitywebinar' style={grayBorderStyle} className='img-fluid rounded mb-3' />
                    <p>
                        <b>Gravity Webinar</b> is a web conferencing application for B2B technology companies. 
                        Users are able to conduct video calls using their webcam and microphone from their laptop to 
                        someone from a different internet network.
                    </p>
                    <b>Technology</b>
                    <ul>
                        <li>
                            ReactJS, NodeJS, WebSockets, WebRTC, Flask, Python,
                            Javascript, Bootstrap, HTML, CSS, Docker
                        </li>
                    </ul>
                </div>
                <div className='col-lg-2'></div>
            </div>
        )
    }
}

export default PortfolioGravityWebinar;