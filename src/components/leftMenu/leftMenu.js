import React from 'react'
import SelectedServerDropDown from "./selectedServerDropDown"
import LeftMenuElement from "./leftMenuElement"

export default function LeftMenu(props) {
    return (
            <div class="leftMenu">
                <SelectedServerDropDown {...props} />
                <hr class="separator"/>
                <div class="leftMenuMenus">
                        {props.menus.map(function(element){
                                return (<LeftMenuElement menu={element} {...props} />);
                        })}
                </div>
            </div>
    );
}
