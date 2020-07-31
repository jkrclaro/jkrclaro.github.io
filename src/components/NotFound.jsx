import React from 'react';


class NotFound extends React.Component {

    componentDidMount() {
        document.title = '404';
    }

    render() {
        return (
            <h1>Page not found!</h1>
        )
    }
}

export default NotFound;