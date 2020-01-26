import React, { Component } from 'react';

import Info from '../Info';


class BenjaminFranklin extends Component {

    render() {
        const essay = {'publishedAt': 'Jan 25, 2019', 'readingTime': '9 sec read'}
        return (
            <div className='row'>
                <div className='col-lg-2'></div>
                <div className='col-lg-8'>
                    <h2>Nullam nec neque sed nibh dapibus auctor a sed nulla. Morbi sit metus.</h2>
                    <Info essay={essay} />
                    <div>
                    </div>
                    <p>
                        Curabitur molestie posuere risus sit amet imperdiet. Nam porttitor quis elit eu ultrices. Cras aliquam elit mauris, vitae aliquet justo volutpat rutrum. Duis vitae elementum arcu. Duis lacinia quam a auctor elementum. Nam sit amet finibus nunc, luctus feugiat neque. Proin nullam.
                    </p>
                </div>
                <div className='col-lg-2'></div>
            </div>
        )
    }
}

export default BenjaminFranklin;