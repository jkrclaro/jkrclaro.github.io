import React from 'react';


class Home extends React.Component {

    render() {
        return (
            <div className='row'>
                <div className='col-lg-5'>
                    <img className='mb-3' alt='me.png' src='/me.png' height='75' width='75' style={{ borderRadius: '50%'}}></img>
                    <p>I live in Dublin and I'm a software developer primarily interested in web development and cloud computing.</p>
                    <p>I was born in the Philippines but grew up in Ireland and previously studied applied computing at WIT.</p>
                    <p className='mb-3'>If you want to get in touch, below are my links:</p>
                    <div id='links'>
                        <div><span className='bulletpoint mr-3'>-</span>send me an <a href='mailto:jkrclaro@gmail.com'>email</a></div>
                        <div><span className='bulletpoint mr-3'>-</span>connect with me on <a href='https://www.linkedin.com/in/jkrclaro' target="_blank" rel="noopener noreferrer">linkedin</a></div>
                        <div><span className='bulletpoint mr-3'>-</span>reach out to me on <a href='https://www.twitter.com/jkrclaro' target="_blank" rel="noopener noreferrer">twitter</a></div>
                        <div><span className='bulletpoint mr-3'>-</span>see my projects on <a href='https://www.github.com/jkrclaro' target="_blank" rel="noopener noreferrer">github</a></div>
                     </div>
                </div>
            </div>
        )
    }
}

export default Home;