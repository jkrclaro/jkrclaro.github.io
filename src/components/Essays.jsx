import React from 'react';


class Essays extends React.Component {

    state = {
        essays: [
            {'url': '/benjamin-franklin', 'title': 'Benjamin Franklin: An American Life'}
        ]
    }
    
    componentDidMount() {
        document.title = 'Essays';
    }

    render() {
        return (
            <div id='essays'>
                {this.state.essays.map((essay, index) => 
                    <div key={index}>
                        <a href={essay.url}>{essay.title}</a>
                    </div>
                )}
            </div>
        )
    }
}

export default Essays;