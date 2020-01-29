import React from 'react';


class Notes extends React.Component {
    
    componentDidMount() {
        document.title = 'Notes';
    }

    render() {
        const { notes } = this.props;
        return (
            <div id='notes'>
                {notes.map((note, index) => 
                    <div key={index}>
                        <span className='bulletpoint mr-2'>-</span>
                        <a href={note.url}>{note.component.props.title}</a>
                    </div>
                )}
            </div>
        )
    }
}

export default Notes;