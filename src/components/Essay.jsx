import React, { Component } from 'react';


class Essay extends Component {

    componentDidMount() {
        document.title = this.props.title;
    }

    render() {
        const { publishedAt, title } = this.props;
        return (
            <div>
                <div className='mb-3'>
                    <h1>{title}</h1>
                    <span className='text-muted'>
                        {publishedAt}
                    </span>
                </div>
                {this.props.children}
            </div>
        )
    }
}

export default Essay;