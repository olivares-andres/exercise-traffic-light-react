import React from "react";

export default class TrafficLights extends React.Component {
    constructor(){
        super();
        this.state = {
            clickedLight: null

        };

    }
    render() {
        let red2 = '';
        if(this.state.clickedLight === 'red') red2 = 'selected'
        let yellow2 = '';
        if(this.state.clickedLight === 'yellow') yellow2 = 'selected'
        let green2 = '';
        if(this.state.clickedLight === 'green') green2 = 'selected'
       return <>
            <div className="container">

            <div id="semaforo"></div>
            <div id="semaforo_body">
                <div className={"red light " + red2}
                 onClick={() => this.setState({clickedLight: 'red'})}
                 ></div>
                <div className={"yellow light " + yellow2}
                 onClick={() => this.setState({clickedLight: 'yellow'})}
                 ></div>
                <div className={"green light " + green2} onClick={() => this.setState({clickedLight: 'green'})}
                ></div>
            </div>
            </div>
        </>
    }
}