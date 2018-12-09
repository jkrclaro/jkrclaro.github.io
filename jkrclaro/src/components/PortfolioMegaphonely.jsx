import React from 'react';

import megaphonely from '../imgs/megaphonely.png';


class PortfolioMegaphonely extends React.Component {

    render() {
        return (
            <div className='row'>
                <div className='col-lg-2'></div>
                <div className='col-lg-8'>
                    <img src={megaphonely} alt='megaphonely' className='img-fluid rounded mb-3' />
                    <p>
                        <b>Megaphonely</b> was a social media management application 
                        that allowed users to connect their social media accounts and 
                        allow the application to post contents with the consent of the user.
                        Users were able to instantly or schedule contents to be posted
                        to various social platforms in one click.
                    </p>
                    <b>Technology</b>
                    <ul>
                        <li>
                            Django, HTML, Bootstrap, Javascript, Twitter API, 
                            LinkedIn API, Facebook API, Python, AWS Lambda, 
                            AWS Elastic Beanstalk, Stripe API, CSS
                        </li>
                    </ul>
                </div>
                <div className='col-lg-2'></div>
            </div>
        )
    }
}

export default PortfolioMegaphonely;