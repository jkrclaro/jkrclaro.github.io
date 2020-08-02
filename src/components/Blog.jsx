import React from 'react';


class Blog extends React.Component {

    state = {
        blogs: require('./blogs.json')
    }
    
    componentDidMount() {
        document.title = 'Blog';
    }

    render() {
        return (
            <div>
                {this.state.blogs.map((blog, index) => 
                    <div key={index}>
                        <a href={blog.url}>{blog.title}</a>
                    </div>
                )}
            </div>
        )
    }
}

export default Blog;