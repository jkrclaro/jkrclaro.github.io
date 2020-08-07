import React from 'react';


class Stress extends React.Component {
    
    componentDidMount() {
        document.title = 'Stress - John Claro';
    }

    render() {
        return (
            <div>
                <video width='640' height='360' loop muted controls autoplay='autoplay'>
                    <source src='/stress.mp4' type='video/mp4'></source>
                    Your browser does not support the video tag.
                </video>
                <p>
                    <b>Stress primarily comes from not taking action</b> over something you can have some control over.
                </p>
                <p>
                    If I find that some particular thing is causing me to have stress, that's a warning flag.
                </p>
                <p>
                    It means there's something that I haven't completely identified in my conscious mind that is bothering me and I haven't yet taken any action on it.
                </p>
                <p>
                    I find that <b>as soon as I identify it and make the first action to address that situation</b>, even if it's not solved, the mere fact that we're addresssing it dramatically reduces stress.
                </p>
                <p>
                    So <b>stress comes from ignoring things that you shouldn't be ignoring</b>.
                </p>
                <p>
                    <b>Stress doesn't come from hard work</b>, you can be working extremely hard and loving it, likewise, you can be out of work and incredibly stressed.
                </p>
            </div>
        )
    }
}

export default Stress;