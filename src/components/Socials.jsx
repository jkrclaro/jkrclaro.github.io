import React, { Component } from 'react';


class Socials extends Component {

    render() {
        return (
            <div className='text-center mt-4' id='contacts'>
                <a href='mailto:jkrclaro@gmail.com'><i className='far fa-envelope mr-5'></i></a>
                <a href='https://www.linkedin.com/in/jkrclaro' target="_blank" rel="noopener noreferrer"><i className='fab fa-linkedin-in mr-5'></i></a>
                <a href='https://www.twitter.com/jkrclaro' target="_blank" rel="noopener noreferrer"><i className='fab fa-twitter'></i></a>
            </div>
        )
    }
}

export default Socials;