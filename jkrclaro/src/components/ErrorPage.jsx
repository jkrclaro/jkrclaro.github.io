import React from 'react';


class ErrorPage extends React.Component {

    render() {
        return (
            <div>
              <p>That page does not exist. <a href='/'>Go back</a></p>
            </div>
        );
    };
};

export default ErrorPage;
