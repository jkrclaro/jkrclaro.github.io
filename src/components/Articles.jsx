import React from 'react';


class Articles extends React.Component {

    state = {
        articles: require('../posts.json')
    }

    render() {
        return (
            <div id='articles'>
                {this.state.articles.map((article, index) => 
                    <div key={index}>
                        {article.category === 'articles' ? (
                            <span>
                                <span className='bulletpoint mr-2'>&#8226;</span>
                                <a href={article.url}>{article.title}</a>
                            </span>
                        ) : (null)}
                    </div>
                )}
            </div>
        )
    }
}

export default Articles;