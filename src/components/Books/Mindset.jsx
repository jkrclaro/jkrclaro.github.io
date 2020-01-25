import React, { Component } from 'react';

import Contacts from '../Contacts';


class Mindset extends Component {

    render() {
        const essay = {'publishedAt': 'Jan 25, 2019', 'readingTime': '6 min read'}
        return (
            <div className='col-lg-12'>
                <div className='row'>
                    <div className='col-lg-2'></div>
                    <div className='col-lg-8'>
                        <h2>Maecenas molestie eros id tempor viverra. Suspendisse potenti orci aliquam.</h2>
                        <Contacts essay={essay} />
                        <p>
                            Phasellus porta ante vitae lorem sollicitudin convallis. 
                            Nunc iaculis metus neque, dictum posuere diam efficitur ac. 
                            Aliquam tellus dui, posuere vitae felis et, ullamcorper bibendum ipsum. 
                            Fusce sit amet blandit urna. Phasellus scelerisque accumsan tincidunt. 
                            Sed quam lorem amet.
                        </p>
                    </div>
                    <div className='col-lg-2'></div>
                </div>
            </div>
        )
    }
}

export default Mindset;