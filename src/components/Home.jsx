import React from 'react';


class Home extends React.Component {

    componentDidMount() {
        document.title = 'About - John Claro';
    }

    render() {
        return (
            <div className='row'>
                <div className='col-lg-5'>
                    <img className='mb-3' alt='me.png' src='/me.png' height='75' width='75' style={{ borderRadius: '50%'}}></img>
                    <p>I live in Dublin and I'm a software developer with interests in data engineering and cloud computing.</p>
                    <p>I was born in the Philippines, grew up in Ireland and previously studied applied computing at WIT.</p>
                    <p className='mb-3'>My links:</p>
                    <div id='links'>
                        <div><span className='bulletpoint mr-2'>-</span>send me an <a href='mailto:jkrclaro@gmail.com'>email</a></div>
                        <div><span className='bulletpoint mr-2'>-</span>connect with me on <a href='https://www.linkedin.com/in/johnclaro' target='_blank' rel='noopener noreferrer'>linkedin</a></div>
                        <div><span className='bulletpoint mr-2'>-</span>reach out to me on <a href='https://www.twitter.com/johnclaro_' target='_blank' rel='noopener noreferrer'>twitter</a></div>
                        <div><span className='bulletpoint mr-2'>-</span>see my projects on <a href='https://www.github.com/johnclaro' target='_blank' rel='noopener noreferrer'>github</a></div>
                        <div><span className='bulletpoint mr-2'>-</span>recommended articles on <a href='https://getpocket.com/@johnclaro' target='_blank' rel='noopener noreferrer'>pocket</a></div>
                     </div>
                </div>
            </div>
        )
    }
}

export default Home;