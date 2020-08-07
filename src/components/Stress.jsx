import React from 'react';


class Stress extends React.Component {
    
    componentDidMount() {
        document.title = 'Stress - John Claro';
    }

    render() {
        return (
            <div>
                <video width='320' height='240' controls autoplay='autoplay'>
                    <source src='/stress.mp4' type='video/mp4'></source>
                    Your browser does not support the video tag.
                </video>
            </div>
        )
    }
}

export default Stress;