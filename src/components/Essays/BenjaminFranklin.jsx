import React, { Component } from 'react';

import Essay from '../Essay';


class BenjaminFranklin extends Component {

    state = {
        title: 'Benjamin Franklin: An American Life',
        publishedAt: 'Jan 29, 2019',
        readingTime: '1m 9s'
    }

    componentDidMount() {
        document.title = this.state.title;
    }

    render() {
        const { title, publishedAt, readingTime } = this.state;
        return (
            <Essay title={title} publishedAt={publishedAt} readingTime={readingTime}>
                <p>I'll update once I'm finished reading the book.</p>
            </Essay>
        )
    }
}

export default BenjaminFranklin;