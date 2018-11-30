import React from 'react';

class Home extends React.Component {

    render() {
        return (
            <div>
                <p>
                    My name is John Claro and I'm a passionate developer 
                    interested in web development, real-time communications
                    and tons of other stuff. 
                </p>
                <p>
                    I am currently working on <a href='https://www.summonapp.com'>Summon</a> as a solo-founder, from programming to sales.
                </p>
                <p>If you want to contact me, you can reach me via one of the following communication channels:</p>
                <ul>
                    <li>via <a href='mailto:jkrclaro@gmail.com'>email</a></li>
                    <li>send me a message on <a href='https://www.github.com/jkrclaro'>github</a></li>
                    <li>reach out to me on <a href='https://www.twitter.com/jkrclaro'>twitter</a></li>
                </ul>
            </div>
        )
    }
}

export default Home;