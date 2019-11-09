import React from 'react';
import Body from "./components/body"
import NavBar from "./components/navBar/navBar"
import Accounts from "./components/pages/Accounts/Account"
import Configure from "./components/pages/Configure/Configure"
import Characters from "./components/pages/Characters/Characters"
import Rosters from "./components/pages/Rosters/Rosters"
import Tasks from "./components/pages/Tasks/Tasks"
import Routines from "./components/pages/Routines/Routines"
import Overseers from "./components/pages/Overseers/Overseers"
import Manage from "./components/pages/Manage/Manage"
import Monitor from "./components/pages/Monitor/Monitor"
import Menu from "./structures/menu/menus"
import "./css/App.css"

const langsJSON = require("./modules/langs/langs.json") //JSON containing all the langs

export default class App extends React.Component {

  changePage(page) //function to change the selected page and refresh the states associated
  {
    this.setState({selectedPage: page});
  }

  selectServer(server) //function to change the selected server and refresh the states associated
  {
    this.setState({selectedServer: server});
  }


  constructor(props) { //inits the states for this component
    super(props);

    this.selectServer = this.selectServer.bind(this); //bind the function so it can change states
    this.changePage = this.changePage.bind(this); //bind the function so it can change states
    this.state = {
      lang: "en", //default selected lang
      langsJSON: langsJSON, //lang file

      selectedServer: "ERATZ",
      selectedPage: "CONFIGURE",

      changePage: this.changePage,
      selectServer: this.selectServer
    };
  }

  render() {
    return (
      <>
        <NavBar /> 
        <Body menus={[
          new Menu("CONFIGURE", <Configure    {...this.state} />), //{...this.state} => transmit all the states to the component
          new Menu("ACCOUNTS",  <Accounts     {...this.state} />),
          new Menu("CHARACTERS",<Characters   {...this.state} />),
          new Menu("ROSTERS",   <Rosters      {...this.state} />),
          new Menu("TASKS",     <Tasks        {...this.state} />),
          new Menu("ROUTINES",  <Routines     {...this.state} />),
          new Menu("OVERSEERS", <Overseers    {...this.state} />),
          new Menu("MANAGE",    <Manage       {...this.state} />),
          new Menu("MONITOR",   <Monitor      {...this.state} />)
      ]}                                      {...this.state} />
      </>
    );
  }
}
