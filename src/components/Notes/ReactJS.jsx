import React, { Component } from 'react';

import Note from '../Note';


class ReactJS extends Component {

    render() {
        return (
            <Note title='ReactJS' publishedAt='Jan 29, 2019' readingTime='1m 9s'>
                <h6>History</h6>
                <p>
                    Created by Jordan Walke.
                </p>
            </Note>
        )
    }
}

export default ReactJS;