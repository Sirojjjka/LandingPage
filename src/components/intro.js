import React from "react";
import {render} from 'react-dom'
import {faHome, faAtlas, faCar, faCarrot} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class Intro extends React.Component{
    render() {
        return <div>
            <strong className="aaa">
                <h1 className="h1">The Ripple Cod Bot<br/> Advantage</h1>
            </strong>
            <div className="row ">
                <div className="flex_container">
                    <div className="first"><FontAwesomeIcon  icon={faHome} /></div>
                    <h4 className="text-center">
                        <strong>Autopilot Trading</strong>
                    </h4>
                    <p className="text-center">
                        Sit back and relax as our system does all the hard work for you - there is no need to do a thing
                    </p>
                </div>
                <div className="flex_container">
                    <div className="first"><FontAwesomeIcon icon={faAtlas} /></div>
                    <h4 className="text-center"><strong>Tax Free Profits</strong></h4>
                    <p className="text-center">With the Ripple Code Bot there is no limit to the profit you can make every day and no taxes!
                    </p>
                </div>
                <div className="flex_container">
                    <div className="first"><FontAwesomeIcon icon={faCar} /></div>
                    <h4 className="text-center"><strong>Cloud Technology</strong></h4>
                    <p className="text-center">The Ripple Code Bot system runs in the cloud 24/7/365 - no downloads required</p>
                </div>
                <div className="flex_container"><div className="first"><FontAwesomeIcon icon={faCarrot} /></div>
                    <h4 className="text-center"><strong>Lightning Fast</strong></h4>
                    <p className="text-center">State of the art algorithms scan the markets thousands of times a minute for opportunities</p>
                </div>

            </div>
         </div>
                    }
                    }
                    /*верстка 3-го блока используя flex playground.
                    использую font awesome для иконок.
                     */
                    export default Intro;