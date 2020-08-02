import React from 'react';


class About extends React.Component {

    state = {
        latest: require('./blogs.json')[0]
    }

    componentDidMount() {
        document.title = 'About - John Claro';
    }

    render() {
        const { latest } = this.state;
        return (
            <div style={{maxWidth: 512}}>
                <img alt='me.png' src='/me.png' height='100' width='100' style={{borderRadius: 50}}></img>
                <p>
                    I was born in the Philippines, grew up in Ireland and previously studied applied computing at WIT.
                </p>
                <p>
                    I'm currently a freelance developer and have a side project called <a href='https://www.sloopback.com' target='_blank' rel='noopener noreferrer'>Sloopback</a>.
                </p>
                <p>
                    Feel free to contact me at my <a href='mailto:jkrclaro@gmail.com'>email</a>, <a href='https://www.linkedin.com/in/johnclaro' target='_blank' rel='noopener noreferrer'>linkedin</a>, <a href='https://www.twitter.com/johnclaro_' target='_blank' rel='noopener noreferrer'>twitter</a> or <a href='https://github.com/johnclaro' target='_blank' rel='noopener noreferrer'>github</a>.
                </p>
                <p>
                    My latest blog is <a href={latest.url}>{latest.title}</a>.
                </p>
            </div>
        )
    }
}

export default About;