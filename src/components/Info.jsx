import React, { Component } from 'react';


class Info extends Component {

    render() {
        const { essay } = this.props;
        return (
            <div className='row mb-3 mt-4'>
                <div className='col-sm-7 mb-3'>
                    <div className='row'>
                        <div className='col-md-2 col-sm-3 col-3 my-auto'>
                            <img alt='me.png' src='/me.png' height='50' width='50' style={{ borderRadius: '50%'}}></img>
                        </div>
                        <div className='col-md-10 col-sm-9 col-9 my-auto'>
                            <div>John Claro</div>
                            <small className='text-muted'>
                                {essay.publishedAt}
                                <span className='ml-2 mr-2' style={{ fontSize: 10 }}>&#8226;</span>
                                {essay.readingTime}
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Info;