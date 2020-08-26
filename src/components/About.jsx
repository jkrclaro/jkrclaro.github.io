import React from 'react';


class About extends React.Component {

    state = {
        latest: require('./blogs.json')[0]
    }

    componentDidMount() {
        document.title = 'About - John Claro';
    }

    render() {
        // const { latest } = this.state;
        return (
            <div style={{maxWidth: 525}}>
                <img alt='me.png' src='/me.png' height='100' width='100' style={{borderRadius: 50}}></img>
                <p>
                    I was born in the Philippines, grew up in Ireland and studied applied computing at <a href='https://www.wit.ie' target='_blank' rel='noopener noreferrer'>WIT</a>.
                    I worked as data engineer for <a href='https://www.distilledsch.ie' target='_blank' rel='noopener noreferrer'>DistilledSCH</a> after graduation and left to work on <a href='https://www.trysloop.com' target='_blank' rel='noopener noreferrer'>Sloop</a>. 
                </p>
                <p>
                    Contact me at my <a href='mailto:john@trysloop.com'>email</a>, <a href='https://www.linkedin.com/in/johnclaro' target='_blank' rel='noopener noreferrer'>linkedin</a>, <a href='https://www.twitter.com/johnclaro_' target='_blank' rel='noopener noreferrer'>twitter</a> or <a href='https://github.com/johnclaro' target='_blank' rel='noopener noreferrer'>github</a>.
                </p>
                {/* <p>
                    My latest blog is <a href={latest.url}>{latest.title}</a>.
                </p> */}
            </div>
        )
    }
}

export default About;