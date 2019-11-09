import React from 'react'
import LeftMenu from "./leftMenu/leftMenu"
import PageTitle from "./body/pageTitle"
import PageDesc from "./body/pageDesc"

export default function Body(props) {
    return (
        <div class="pageBody">
            <LeftMenu {...props} />
            <div class="pageContent">
                <PageTitle key={props.langsJSON[props.lang][props.selectedPage]} selectedPage={props.langsJSON[props.lang][props.selectedPage]} lang={props.lang}/>
                <PageDesc  key={props.langsJSON[props.lang][props.selectedPage] + "_DESC"} selectedPage={props.langsJSON[props.lang][props.selectedPage]} lang={props.lang}/>
                {props.menus.map(function(menu){
                    if (menu.menuID == props.selectedPage)
                        return menu.menuContent;
                })}
            </div>
        </div>
    )
}
