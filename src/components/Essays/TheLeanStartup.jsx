import React, { Component } from 'react';

import Essay from '../Essay';


class TheLeanStartup extends Component {

    state = {
        title: 'The Lean Startup',
        publishedAt: 'Jul 29, 2020'
    }

    componentDidMount() {
        document.title = this.state.title;
    }

    render() {
        const { title, publishedAt } = this.state;
        return (
            <Essay title={title} publishedAt={publishedAt}>
                <p>
                    Todo.
                </p>
            </Essay>
        )
    }
}

export default TheLeanStartup;