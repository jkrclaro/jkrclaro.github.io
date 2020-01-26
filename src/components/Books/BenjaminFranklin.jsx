import React, { Component } from 'react';

import Info from '../Info';


class BenjaminFranklin extends Component {

    render() {
        const essay = {'publishedAt': 'Jan 25, 2019', 'readingTime': '9 sec read'}
        return (
            <div className='row'>
                <div className='col-lg-2'></div>
                <div className='col-lg-8'>
                    <h2>Benjamin Franklin: An American Life</h2>
                    <Info essay={essay} />
                    <div>
                    <h6>What is the thesis—or main argument—of the book?</h6>
                    </div>
                    <p>
                        Curabitur molestie posuere risus sit amet imperdiet. Nam porttitor quis elit eu ultrices. Cras aliquam elit mauris, vitae aliquet justo volutpat rutrum. Duis vitae elementum arcu. Duis lacinia quam a auctor elementum. Nam sit amet finibus nunc, luctus feugiat neque. Proin nullam.
                    </p>

                    <div>
                    <h6>What exactly is the subject or topic of the book?</h6>
                    </div>
                    <p>
                    Sed in vehicula augue, id ultricies ex. In lacinia viverra leo vel pretium. Morbi placerat dignissim arcu, quis dictum diam tristique in. Pellentesque semper tincidunt lectus, vitae consequat neque lacinia sit amet. Maecenas pellentesque lectus rhoncus maximus mattis. Mauris sed.
                    </p>

                    <div>
                    <h6>How does the author support the argument?</h6>
                    </div>
                    <p>
                    Sed ac mi a ex scelerisque feugiat. <b>Curabitur</b> id purus sapien. Aliquam gravida leo scelerisque nunc egestas consectetur. Quisque finibus velit in fermentum tempus. Ut tincidunt, nisl vitae imperdiet ullamcorper, urna nulla hendrerit lorem, sed egestas risus arcu nec mi cras amet.
                    </p>

                    <div>
                    <h6>How does the author structure the argument?</h6>
                    </div>
                    <p>
                    In ut dui aliquam, blandit tellus a, cursus est. Fusce pretium venenatis porta. Sed viverra nulla elit, vitae sollicitudin lorem porta id. Cras magna erat, congue luctus urna quis, hendrerit semper turpis. Aliquam eu massa sed enim convallis sodales. Curabitur porttitor volutpat.
                    </p>
                    
                    <div>
                    <h6>How has this book helped you understand the subject?</h6>
                    </div>
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
        )
    }
}

export default BenjaminFranklin;