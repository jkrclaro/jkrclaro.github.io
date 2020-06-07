import React, { Component } from 'react';

import Essay from '../Essay';


class Layout extends Component {

    state = {
        title: 'Title',
        publishedAt: 'Jan 29, 2019'
    }

    componentDidMount() {
        document.title = this.state.title;
    }

    render() {
        const { title, publishedAt } = this.state;
        return (
            <Essay title={title} publishedAt={publishedAt}>
                <p></p>
            </Essay>
        )
    }
}

export default Layout;