import React from 'react';


class Home extends React.Component {

    componentDidMount() {
        document.title = 'About - John Claro';
    }

    render() {
        return (
            <div className='row'>
                <div className='col-lg-5 mt-3 mb-3'>
                    <p>
                        I live in Dublin and I'm a software developer with an interest in data engineering and cloud computing.
                    </p>
                    <p>
                        I was born in the Philippines, grew up in Ireland and previously studied applied computing at WIT.
                    </p>
                    <p>
                        I'm working on <a href='https://www.softwareletters.com' target='_blank' rel='noopener noreferrer'>software letters</a>.
                    </p>
                    <p>
                        You can find me at my <a href='mailto:jkrclaro@gmail.com'>email</a>, <a href='https://www.linkedin.com/in/johnclaro' target='_blank' rel='noopener noreferrer'>linkedin</a>, <a href='https://www.twitter.com/johnclaro_' target='_blank' rel='noopener noreferrer'>twitter</a>, <a href='https://getpocket.com/@johnclaro' target='_blank' rel='noopener noreferrer'>pocket</a> or <a href='https://github.com/johnclaro' target='_blank' rel='noopener noreferrer'>github</a>
                    </p>
                </div>
            </div>
        )
    }
}

export default Home;