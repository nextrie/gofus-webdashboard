import React from 'react'

export default class AccountList extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            accounts: [],
            selectedPage: "accountList",
            lang: this.props.lang
        };
    }
    render()
    {
        return (
            <div>
                //wip
            </div>
        )
    }
}
