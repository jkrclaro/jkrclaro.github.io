import React, { Component } from 'react';


class Info extends Component {

    render() {
        const { essay } = this.props;
        return (
            <div className='row mb-3 mt-4'>
                <div className='col-sm-7 mb-3'>
                    <div className='row'>
                        <div className='col-md-2 col-sm-3 col-3 my-auto'>
                            <img alt='me.png' src='/me.png' height='50' width='50' style={{ borderRadius: '50%'}}></img>
                        </div>
                        <div className='col-md-10 col-sm-9 col-9 my-auto'>
                            <div>John Claro</div>
                            <small className='text-muted'>
                                {essay.publishedAt}
                                <span className='ml-2 mr-2' style={{ fontSize: 10 }}>&#8226;</span>
                                {essay.readingTime}
                            </small>
                        </div>
                    </div>
                </div>
                <div className='col-sm-5 mb-3 text-sm-right my-auto' id='contacts'>
                    <a href='mailto:jkrclaro@gmail.com'><i className='far fa-envelope mr-5'></i></a>
                    <a href='https://www.linkedin.com/in/jkrclaro' target="_blank" rel="noopener noreferrer"><i className='fab fa-linkedin-in mr-5'></i></a>
                    <a href='https://www.twitter.com/jkrclaro' target="_blank" rel="noopener noreferrer"><i className='fab fa-twitter'></i></a>
                </div>
            </div>
        )
    }
}

export default Info;