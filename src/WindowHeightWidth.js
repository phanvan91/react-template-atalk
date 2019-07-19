import React from 'react'
class WindowWidth extends React.Component {
    constructor() {
        super();
        this.state = {
            height: window.innerHeight,
            width: window.innerWidth
        };
    }
    componentDidMount() {
        // console.log(this.state.height);
        // Additionally I could have just used an arrow function for the binding `this` to the component...
        window.addEventListener("resize", this.updateDimensions);
    }
    updateDimensions = () => {
        this.setState({
            height: window.innerHeight,
            width: window.innerWidth
        },()=>this.props.height(this.state.height));
    }

    render() {
        return null;

    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }
}

export default WindowWidth