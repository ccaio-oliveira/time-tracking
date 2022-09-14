import React from 'react';
import './style.css';

const Activities = () => {
    return (
        <div id="activities">
            <div id="work">
                <div className="act-info">
                    <div className="top">
                        <p className="info">Work</p>
                        <p className="more">...</p>
                    </div>
                    <div className="status">
                        <p className="data">32hrs</p>
                        <p className="info">Last Week - 36hrs</p>
                    </div>
                </div>
            </div>
            <div id="play">
                <div className="act-info">
                    <div className="top">
                        <p className="info">Play</p>
                        <p className="more">...</p>
                    </div>
                    <div className="status">
                        <p className="data">10hrs</p>
                        <p className="info">Last Week - 8hrs</p>
                    </div>
                </div>
            </div>
            <div id="study">
                <div className="act-info">
                    <div className="top">
                        <p className="info">Study</p>
                        <p className="more">...</p>
                    </div>
                    <div className="status">
                        <p className="data">4hrs</p>
                        <p className="info">Last Week - 7hrs</p>
                    </div>
                </div>
            </div>
            <div id="exercise">
                <div className="act-info">
                    <div className="top">
                        <p className="info">Exercise</p>
                        <p className="more">...</p>
                    </div>
                    <div className="status">
                        <p className="data">4hrs</p>
                        <p className="info">Last Week - 5hrs</p>
                    </div>
                </div>
            </div>
            <div id="social">
                <div className="act-info">
                    <div className="top">
                        <p className="info">Social</p>
                        <p className="more">...</p>
                    </div>
                    <div className="status">
                        <p className="data">5hrs</p>
                        <p className="info">Last Week - 10hrs</p>
                    </div>
                </div>
            </div>
            <div id="self-care">
                <div className="act-info">
                    <div className="top">
                        <p className="info">Self Care</p>
                        <p className="more">...</p>
                    </div>
                    <div className="status">
                        <p className="data">2hrs</p>
                        <p className="info">Last Week - 2hrs</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Activities;