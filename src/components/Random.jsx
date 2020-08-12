import React from 'react';


class Random extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }
    
    componentDidMount() {
        document.title = 'Random - John Claro';
        fetch('https://hn.algolia.com/api/v1/search?tags=front_page')
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        isLoaded: true,
                        items: result.hits
                    })
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            const min = 1;
            const max = 20;
            const random = Math.floor(min + Math.random() * (max - min));
            window.location = items[random].url;
        }
    }
}

export default Random;