import React from 'react';


class Articles extends React.Component {

    render() {
        const { articles } = this.props;
        return (
            <div id='articles'>
                {articles.map((article, index) => 
                    <div key={index}>
                        <span className='bulletpoint mr-2'>-</span>
                        <a href={article.url}>{article.component.props.title}</a>
                    </div>
                )}
            </div>
        )
    }
}

export default Articles;