import React, { Component } from 'react';

import Note from '../Note';


class ReactJS extends Component {

    render() {
        const { title, publishedAt, readingTime } = this.props;
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