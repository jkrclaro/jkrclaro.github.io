import React from 'react';


class Home extends React.Component {

    componentDidMount() {
        document.title = 'About';
    }

    render() {
        return (
            <div style={{maxWidth: 512}}>
                <img alt='me.png' src='/me.png' height='100' width='100'></img>
                <p>
                    I was born in the Philippines, grew up in Ireland and previously studied applied computing at WIT. 
                    I'm working on <a href='https://www.sloopback.com' target='_blank' rel='noopener noreferrer'>Sloopback</a>.
                </p>
                <p>
                    You can find or reach me at my <a href='mailto:jkrclaro@gmail.com'>email</a>, <a href='https://www.linkedin.com/in/johnclaro' target='_blank' rel='noopener noreferrer'>linkedin</a>, <a href='https://www.twitter.com/johnclaro_' target='_blank' rel='noopener noreferrer'>twitter</a> or <a href='https://github.com/johnclaro' target='_blank' rel='noopener noreferrer'>github</a>.
                </p>
            </div>
        )
    }
}

export default Home;