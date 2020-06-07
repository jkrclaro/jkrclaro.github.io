import React from 'react';


class Essays extends React.Component {

    state = {
        essays: [
            {'url': '/benjamin-franklin', 'title': 'Benjamin Franklin: An American Life', 'date': 'Jan 19, 2020'},
        ]
    }
    
    componentDidMount() {
        document.title = 'Essays';
    }

    render() {
        return (
            <div id='essays'>
                {this.state.essays.map((essay, index) => 
                    <div className='row' key={index}>
                        <div className='col-lg-2 text-lg-right'>
                            <span>{essay.date}</span>
                        </div>
                        <div className='col-lg-10 my-auto'>
                            <a href={essay.url}>{essay.title}</a>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default Essays;