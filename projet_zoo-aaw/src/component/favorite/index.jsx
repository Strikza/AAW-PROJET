import React from "react";

class Favorite extends React.Component {
    constructor() {
        super()
        this.state = { user: null }
    }

    componentDidMount() {
        fetch("/api/login")
            .then(response => response.json())
            .then(data => {
                this.setState({ user: data })
                console.log(this.state.user)
            });
    }

    render() {
        return (
            <div>
                <h1>Favoris</h1>
                {this.state.user === null ? <>nothing</> : <>connected !</>}
            </div>
        )
    }
}

export default Favorite;