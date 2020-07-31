import React from 'react';


class Notes extends React.Component {

    state = {
        notes: [
            {'url': '/notes/the-lean-startup', 'title': 'The Lean Startup'},
        ]
    }
    
    componentDidMount() {
        document.title = 'Notes';
    }

    render() {
        return (
            <div>
                {this.state.notes.map((note, index) => 
                    <div key={index}>
                        <a href={note.url}>{note.title}</a>
                    </div>
                )}
            </div>
        )
    }
}

export default Notes;