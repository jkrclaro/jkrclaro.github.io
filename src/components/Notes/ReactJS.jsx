import React, { Component } from 'react';

import Note from '../Note';


class ReactJS extends Component {

    state = {
        title: 'ReactJS',
        publishedAt: 'Jan 29, 2019',
        readingTime: '1m 9s'
    }

    componentDidMount() {
        document.title = this.state.title;
    }

    render() {
        const { title, publishedAt, readingTime } = this.state;
        return (
            <Note title={title} publishedAt={publishedAt} readingTime={readingTime}>
                <h6>History</h6>
                <p>
                    Created by Jordan Walke.
                </p>
            </Note>
        )
    }
}

export default ReactJS;