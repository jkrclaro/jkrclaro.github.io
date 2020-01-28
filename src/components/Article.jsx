import React, { Component } from 'react';


class Article extends Component {

    render() {
        const { publishedAt, readingTime, title } = this.props;
        const Content = this.props.content;
        return (
            <div className='row'>
                <div className='col-lg-3'></div>
                <div className='col-lg-6' id='article'>
                    <div className='mb-3'>
                        <h1>{title}</h1>
                        <small className='text-muted'>
                            {publishedAt}
                            <span className='ml-2 mr-2' style={{ fontSize: 10 }}>-</span>
                            {readingTime} read
                        </small>
                    </div>
                    <Content title={title} />
                </div>
                <div className='col-lg-3'></div>
            </div>
        )
    }
}

export default Article;