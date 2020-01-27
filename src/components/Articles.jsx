import React from 'react';


class Articles extends React.Component {

    state = {
        articles: require('../articles.json')
    }

    render() {
        return (
            <div id='articles'>
                {this.state.articles.map((post, index) => 
                    <div key={index}>
                        <span className='bulletpoint mr-2'>-</span>
                        <a href={post.url}>{post.title}</a>
                    </div>
                )}
            </div>
        )
    }
}

export default Articles;