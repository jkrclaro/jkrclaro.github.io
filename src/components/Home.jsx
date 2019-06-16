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
                            My name is John Claro, I'm a passionate developer interested in web development, 
                            software engineering and tons of other stuff. 
                        </p>
                        <p>I was born in Antipolo, Philippines then moved to Waterford, Ireland when I was 9 years old.</p>
                        <p>I studied Applied Computing in Waterford Institute of Technology and did work placement at Ireland's biggest classifieds website, DoneDeal.ie.</p>
                        <p>I got a job after graduating at Ireland's leader for online marketplaces, DistilledSCH in Dublin as a Data Engineer.</p>
                        <p>I left DistilledSCH to work on <a href='https://channelry.com'>Channelry</a>.</p>
                        <p>If you want to contact me, you can reach me via one of the following communication channels:</p>
                        <ul>
                            <li>email via <a href='mailto:john@channelry.com' style={underlineStyle}>john@channelry.com</a></li>
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