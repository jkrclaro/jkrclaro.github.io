import React, { Component } from 'react';


class Note extends Component {

    componentDidMount() {
        document.title = this.props.title;
    }

    render() {
        const { publishedAt, readingTime, title } = this.props;
        return (
            <div className='row'>
                <div className='col-lg-3'></div>
                <div className='col-lg-6' id='note'>
                    <div className='mb-3'>
                        <h1>{title}</h1>
                        <span className='text-muted'>
                            {publishedAt}
                            <span className='ml-2 mr-2'>-</span>
                            {readingTime} read
                        </span>
                    </div>
                    {this.props.children}
                </div>
                <div className='col-lg-3'></div>
            </div>
        )
    }
}

export default Note;