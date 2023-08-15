import React from "react";
import "./navbar.scss";
import { SearchOutlined, LanguageOutlined, DarkModeOutlined, FullscreenExitOutlined } from "@mui/icons-material";
import { NotificationsNoneOutlined, ChatBubbleOutlineOutlined, ListOutlined } from "@mui/icons-material";
import { useDarkModeContext } from "../../context/darkModeContext";



const Navbar = () => {
    const {dispatch} = useDarkModeContext();
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="search..." />
                    <SearchOutlined />
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageOutlined className="icon"/>
                        English
                    </div>
                    <div className="item">
                        <DarkModeOutlined className="icon" onClick={()=>dispatch({type: "TOGGLE"})} style={{cursor: "pointer"}} />
                    </div>
                    <div className="item">
                        <FullscreenExitOutlined className="icon"/>
                    </div>
                    <div className="item">
                        <NotificationsNoneOutlined className="icon"/>
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <ChatBubbleOutlineOutlined className="icon"/>
                        <div className="counter">2</div>
                    </div>
                    <div className="item">
                        <ListOutlined className="icon"/>
                    </div>
                    <div className="item">
                        <img src="https://xsgames.co/randomusers/assets/avatars/male/63.jpg" alt="" className="avatar"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;