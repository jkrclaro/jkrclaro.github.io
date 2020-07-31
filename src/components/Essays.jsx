import React from 'react';


class Essays extends React.Component {

    state = {
        essays: [
            {'url': '/notes/the-lean-startup', 'title': 'The Lean Startup'},
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