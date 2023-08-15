import React, { useState } from "react";
import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { DriveFolderUploadOutlined } from "@mui/icons-material";

const New = (props: NewData) => {

    const [file, setFile] = useState();

    return (
        <div className="new">
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1>{props.title}</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src={file ? URL.createObjectURL(file) : "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"} alt="" />
                    </div>
                    <div className="right">
                        <form action="">
                            <div className="formInput">
                                <label htmlFor="file">Image: <DriveFolderUploadOutlined className="icon" /></label>
                                <input type="file" id="file" onChange={(e:any)=>setFile(e.target.files[0])} style={{
                                    display: "none"
                                }} />
                            </div>
                            {
                                props.inputs.map((input: any) => ( 
                                <div className="formInput" key={input.id}>
                                        <label>{input.label}</label>
                                        <input type={input.type} placeholder={input.placeholder} />
                                    </div>
                                    )
                                )
                            }
                            <button>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

interface NewData {
    inputs: any;
    title: string;
}


export default New