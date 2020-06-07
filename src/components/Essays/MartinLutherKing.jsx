import React, { Component } from 'react';

import Essay from '../Essay';


class MartinLutherKing extends Component {

    state = {
        title: 'Martin Luther King',
        publishedAt: 'Jun 7, 2020'
    }

    componentDidMount() {
        document.title = this.state.title;
    }

    render() {
        const { title, publishedAt } = this.state;
        return (
            <Essay title={title} publishedAt={publishedAt}>
                <p>
                    The death of <a href='https://en.wikipedia.org/wiki/Killing_of_George_Floyd'>George Floyd</a> has sparked controversy about police brutality so I started listening to <a href='https://www.amazon.co.uk/Martin-Luther-King-Jr./e/B000APMH74%3Fref=dbs_a_mng_rwt_scns_share'>The Autobiography of Martin Luther King</a>.
                </p>
                <p>
                    It's insane how someone could get death threats, house bombed and have their family threatened for simply speaking up on <mark>what should be basic human rights</mark>.
                    To fight for a just cause against an intimidating behemoth in a non-violent way and do so where the minority felt they have a chance is awe-inspiring.
                    It's why I now understand why he's considered a national hero.
                </p>
                <p>
                    MLK was heavily inspired by <a href='https://en.wikipedia.org/wiki/Mahatma_Gandhi'>Mahatma Gandhi</a>'s non-violent approaches for protesting.
                    His strategy for combating racism was to use love and religion. Love for unification and religion for redemption.
                    He worked as a preacher and even sounds like a preacher.
                </p>
            </Essay>
        )
    }
}

export default MartinLutherKing;