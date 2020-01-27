import React from 'react';


class Essays extends React.Component {

    state = {
        essays: require('../essays.json')
    }

    render() {
        return (
            <div id='essays'>
                {this.state.essays.map((post, index) => 
                    <div key={index}>
                        <span className='bulletpoint mr-2'>-</span>
                        <a href={post.url}>{post.title}</a>
                    </div>
                )}
            </div>
        )
    }
}

export default Essays;