import React from 'react';


class Essays extends React.Component {
    
    componentDidMount() {
        document.title = 'Essays';
    }

    render() {
        const { essays } = this.props;
        return (
            <div id='essays'>
                {essays.map((article, index) => 
                    <div key={index}>
                        <span className='bulletpoint mr-2'>-</span>
                        <a href={article.url}>{article.component.props.title}</a>
                    </div>
                )}
            </div>
        )
    }
}

export default Essays;