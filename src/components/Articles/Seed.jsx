import React, { Component } from 'react';

import Info from '../Info';


class BenjaminFranklin extends Component {

    render() {
        const essay = {'publishedAt': 'Jan 26, 2019', 'readingTime': '9 sec read'}
        return (
            <div className='row'>
                <div className='col-lg-2'></div>
                <div className='col-lg-8'>
                    <h2>Seed</h2>
                    <Info essay={essay} />
                    <p>
                        In an effort to live a more studious life, I've decided
                        to write a thing or two about whatever it is that I
                        find interesting or I believe will help other people out.
                    </p>
                </div>
                <div className='col-lg-2'></div>
            </div>
        )
    }
}

export default BenjaminFranklin;