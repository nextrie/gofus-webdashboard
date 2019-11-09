import React from 'react'
import { GetServers } from "../../structures/server/server"

export default class SelectedServerDropDown extends React.Component {

    constructor(props)
    {
        super(props);

        this.changeServer = this.changeServer.bind(this); //bind the function so it can changes states
        this.state = {
            value: this.props.selectedServer //default select value is the default selectedServer
        }
    }

    changeServer(event)
    {
        this.setState({value: event.target.value}); //for the select value
        this.props.selectServer(event.target.value); //for the selectedServer state of <App />
    }

    render()
    {
        return (
            <div class="selectedServerDropDownContainer">
                <select onChange={this.changeServer} value={this.state.value}> //select calling changeServer() when it changes of value
                    {GetServers().map((element) => { //foreach server show a select option
                        return <option value={element}>{element}</option>
                    }, this)}
                </select>
            </div>
        )
    }
}
