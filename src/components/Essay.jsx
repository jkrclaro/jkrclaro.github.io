import React, { Component } from 'react';


class Essay extends Component {

    componentDidMount() {
        document.title = `${this.props.title} - John Claro`;
    }

    render() {
        const { publishedAt, readingTime, title } = this.props;
        const Content = this.props.content;
        return (
            <div className='row'>
                <div className='col-lg-3'></div>
                <div className='col-lg-6' id='article'>
                    <div className='mb-3'>
                        <h1>{title}</h1>
                        <span className='text-muted'>
                            {publishedAt}
                            <span className='ml-2 mr-2'>-</span>
                            {readingTime} read
                        </span>
                    </div>
                    <Content />
                </div>
                <div className='col-lg-3'></div>
            </div>
        )
    }
}

export default Essay;