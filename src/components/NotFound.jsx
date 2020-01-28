import React from 'react';


class NotFound extends React.Component {

    componentDidMount() {
        document.title = 'Page not found - John Claro'
    }

    render() {
        return (
            <h2>Page not found!</h2>
        )
    }
}

export default NotFound;