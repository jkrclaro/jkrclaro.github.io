import React, { Component } from 'react';


class Workspace extends Component {

    componentDidMount() {
        document.title = this.props.title;
    }

    render() {
        return (
            <div>
                <p>
                    Understanding where to do productive work regularly is important. 
                    One perk of coding is that the work can be done anywhere.
                    Home, cafes, libraries and offices are common places where most meaningful work happens.
                    The ideal workspace should therefore foster or kickstart the state of <a href='https://en.wikipedia.org/wiki/Flow_(psychology)'>being in the zone</a>.
                </p>
                <h6>Home</h6>
                <p>
                    Meaningful work usually comes from doing something challenging.
                    There's a high chance that during this time, you'll likely be stressed.
                    Everything is in the palm of your hands if you work at home but having everything within your reach can also be a bad thing.
                    Distraction is the most popular reason why people don't work at home.
                </p>
                <h6>Offices</h6>
                <p>
                    I've actually never been to one because they require a monthly fee and closed during the weekends.
                    Most of them are usually located in the middle of towns or cities so if you live in the suburbs, you'll essentially be paying for commute and their monthly fee.
                </p>
                <h6>Cafes</h6>
                <p>
                    The most popular workplace that I hear most people work from.
                    Depending on the ventilation of the cafe, it can feel a bit stuffy and warm sometimes.
                    You also have a high chance of finding other people working here so you won't feel left out.
                </p>
                <h6>Libraries</h6>
                <p>
                    Can be bad during the weekdays because that's when groups of students go.
                    Not a problem most of the time but if you ever get in a situation when you're the only one in the room while everyone else is a student, it can feel a bit intimidating!
                    Overall, I was skeptical at first but I managed to find a nearby library in my area that allows me to work peacefully and away from the groups of students.
                </p>
            </div>
        )
    }
}

export default Workspace;