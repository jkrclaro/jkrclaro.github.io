import React, { Component } from 'react';


class Contacts extends Component {

    render() {
        const { essay } = this.props;
        return (
            <div className='row mb-3 mt-3'>
                <div className='col-sm-7 mb-3'>
                    <div className='row'>
                        <div className='col-sm-2 col-3 my-auto'>
                            <img alt='me.png' src='/me.png' height='50' width='50' style={{ borderRadius: '50%'}}></img>
                        </div>
                        <div className='col-sm-10 col-9'>
                            <div>John Claro</div>
                            <span className='text-muted'>{essay.publishedAt} . {essay.readingTime}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contacts;