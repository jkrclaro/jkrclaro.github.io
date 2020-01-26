import React from 'react';


class Books extends React.Component {

    state = {
        books: require('../posts.json')
    }

    render() {
        return (
            <div id='books'>
                {this.state.books.map((book, index) =>
                    <div key={index}>
                        {book.category === 'books' ? (
                            <span>
                                <span className='bulletpoint mr-2'>-</span>
                                <a href={book.url}>{book.title}</a>
                            </span>
                        ) : (null)}
                    </div>
                )}
            </div>
        )
    }
}

export default Books;