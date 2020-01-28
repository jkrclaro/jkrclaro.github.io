import React, { Component } from 'react';


class Article extends Component {

    render() {
        const { publishedAt, readingTime, title } = this.props;
        const Content = this.props.content;
        return (
            <div className='row'>
                <div className='col-lg-3'></div>
                <div className='col-lg-6' id='article'>
                    <h1>{title}</h1>
                    <div className='row mb-3 mt-4'>
                        <div className='col-sm-7 mb-3'>
                            <div className='row'>
                                <div className='col-sm-3 col-sm-3 col-3 my-auto'>
                                    <img alt='me.png' src='/me.png' height='50' width='50' style={{ borderRadius: '50%'}}></img>
                                </div>
                                <div className='col-md-9 col-sm-9 col-9 my-auto'>
                                    <div>John Claro</div>
                                    <small className='text-muted'>
                                        {publishedAt}
                                        <span className='ml-2 mr-2' style={{ fontSize: 10 }}>-</span>
                                        {readingTime} read
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-5 mb-3 text-sm-right my-auto' id='contacts'>
                            <a href='mailto:jkrclaro@gmail.com'><i className='far fa-envelope mr-4'></i></a>
                            <a href='https://www.linkedin.com/in/jkrclaro' target='_blank' rel='noopener noreferrer'><i className='fab fa-linkedin-in mr-4'></i></a>
                            <a href='https://www.twitter.com/jkrclaro' target='_blank' rel='noopener noreferrer'><i className='fab fa-twitter mr-4'></i></a>
                        </div>
                    </div>
                    <Content title={title} />
                    <div>Got feedback? <a href='mailto:jkrclaro@gmail.com'>Email me</a></div>
                </div>
                <div className='col-lg-3'></div>
            </div>
        )
    }
}

export default Article;