import React from 'react';


class Home extends React.Component {

    render() {
        return (
            <div className='col-lg-5'>
                <div className='row mb-3'>
                    <div className='col-sm-2 col-3 my-auto'>
                        <img alt='me.png' src='/me.png' height='50' width='50' style={{ borderRadius: '50%'}}></img>
                    </div>
                    <div className='col-sm-10 col-9'>
                        <div>John Claro</div>
                        <div id='contacts'>
                            <a href='mailto:jkrclaro@gmail.com'><i className='fas fa-envelope mr-3'></i></a>
                            <a href='https://www.github.com/jkrclaro' target="_blank" rel="noopener noreferrer"><i className='fab fa-github mr-3'></i></a>
                            <a href='https://www.linkedin.com/in/jkrclaro' target="_blank" rel="noopener noreferrer"><i className='fab fa-linkedin mr-3'></i></a>
                            <a href='https://www.twitter.com/jkrclaro' target="_blank" rel="noopener noreferrer"><i className='fab fa-twitter mr-3'></i></a>
                        </div>
                    </div>
                </div>
                <p>
                    I live in Dublin and I'm a passionate software engineer primarily interested in web development and cloud computing.
                </p>
                <p>
                    I was born in the Philippines but grew up in Ireland and studied at WIT.
                </p>
            </div>
        )
    }
}

export default Home;