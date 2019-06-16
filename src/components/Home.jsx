import React from 'react';

const me = require('../imgs/me.png');

const underlineStyle = {
    textDecoration: 'underline'
}

class Home extends React.Component {

    render() {
        return (
            <div className='col-lg-12'>
                <div className='row'>
                    <div className='col-lg-10'>
                        <p>
                            My name is John Claro, I'm 24 years old and 
                            I'm a passionate developer interested in web development, 
                            software engineering and tons of other stuff. 
                        </p>
                        <p>I was born in Manila, Philippines but raised in Waterford, Ireland since I was 10 years old.</p>
                        <p>I graduated with a BSc Applied Computing in Waterford Institute of Technology from 2012-2016 and did work placement at DoneDeal.ie which is Ireland's biggest classifieds website.</p>
                        <p>After graduating, I moved to Dublin to work at DistilledSCH which is Ireland's leader in online marketplaces from 2016-2018 as a Data Engineer.</p>
                        <p>I left DistilledSCH to work on an idea that helps sellers, <a href='https://channelry.com'>Channelry</a>.</p>
                        <p>If you want to contact me, you can reach me via one of the following communication channels:</p>
                        <ul>
                            <li>via <a href='mailto:john@channelry.com' style={underlineStyle}>john@channelry.com</a></li>
                            <li>send me a message on <a href='https://www.github.com/jkrclaro' target="_blank" rel="noopener noreferrer" style={underlineStyle}>github</a></li>
                            <li>reach out to me on <a href='https://www.twitter.com/jkrclaro' target="_blank" rel="noopener noreferrer" style={underlineStyle}>twitter</a></li>
                            <li>connect with me on <a href='https://www.linkedin.com/in/jkrclaro' target="_blank" rel="noopener noreferrer" style={underlineStyle}>linkedin</a></li>
                        </ul>
                    </div>
                    <div className='col-lg-2 mb-3'>
                        <img src={me} alt='me' className='img-fluid'/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;