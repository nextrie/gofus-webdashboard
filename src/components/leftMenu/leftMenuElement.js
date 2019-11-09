import React from 'react'

export default function LeftMenuElement(props) {
    return (
        <a onClick={function(){
            if (props.selectedPage != props.menu.menuID)
                props.changePage(props.menu.menuID)
            }}
        >
            <div id={props.selectedPage == props.menu.menuID ? "selected" : "notselected"} class="leftMenuElement">
                    <div class="LeftMenuElementContent">
                        {props.langsJSON[props.lang][props.menu.menuID]}
                    </div>
            </div>       
        </a>
    )
}
