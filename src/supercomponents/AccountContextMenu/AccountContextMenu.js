import React, { useContext, useEffect } from "react";
import "./AccountContextMenuStyle.css"
import dp from "../../components/header/avatar.jpg"

import { AppStateContext } from "../../AppStateContext/AppStateContext.js";

function AccountContextMenu({account_details}){

    const { appState, setAppState } = useContext(AppStateContext);
    const contextMenuState = appState.contextMenuOpened;
    if(contextMenuState){
        return(
            <div className="AcContxtMenu">
                
                <div className="AcDetailsSection">
                    <div className="AcImg">
                        <span>
                            <img className="account-dp" src={dp} alt="account_image"/>
                        </span>
                    </div>
                    <div className="AcTextDetails">
                        <div className="AcName">
                            <span>Name</span>
                        </div>
                        <div className="AcUsername">
                            <span>@username123</span>
                        </div>
                    </div>
                </div>
    
                <hr className="menu-partition"/>
                <div className="menu-internal">
                    <div className="submenu">
                        <div className="menubtn">
                            <span>Switch Account</span>
                        </div>
                        <div className="menubtn">
                            <span>Sign Out</span>
                        </div>
                    </div>
                    <hr className="menu-partition"/>
                    <div className="submenu">
                        <div className="menubtn" onClick={()=>{setAppState({...appState, musicUploader: !appState.musicUploader})}}>
                            <span>Upload Music</span>
                        </div>
                        <div className="menubtn">
                            <span>History</span>
                        </div>
                        <div className="menubtn">
                            <span>Settings</span>
                        </div>
                        <div className="menubtn">
                            <span>FeedBack</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (<></>)
}

export default AccountContextMenu;