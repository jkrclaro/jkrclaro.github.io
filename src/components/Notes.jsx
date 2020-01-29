import React from 'react';


class Notes extends React.Component {

    state = {
        notes: [
            {'url': '/reactjs', 'title': 'ReactJS'}
        ]
    }
    
    componentDidMount() {
        document.title = 'Notes';
    }

    render() {
        return (
            <div id='notes'>
                {this.state.notes.map((note, index) => 
                    <div key={index}>
                        <span className='bulletpoint mr-2'>-</span>
                        <a href={note.url}>{note.title}</a>
                    </div>
                )}
            </div>
        )
    }
}

export default Notes;