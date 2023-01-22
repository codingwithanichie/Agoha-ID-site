import React from "react"
import ReactDOM from "react-dom"

export default function Footer(){
    return (
        <div className="footer-div" >
            <div className="img" >
            <img src="./Images/twitter-sign.png" alt="twitter" width="30px" height="30px" />
            </div>
            <div className="img" >
            <img src="./Images/facebook.png" alt="facebook" width="30px" height="30px" />
            </div>
            <div className="img" >
            <img src="./Images/ig.png" alt="instagram" width="30px" height="30px" />
            </div>
            <div className="img" >
            <img src="./Images/github.png" alt="github" width="30px" height="30px" />
            </div>
        </div>
    )
}