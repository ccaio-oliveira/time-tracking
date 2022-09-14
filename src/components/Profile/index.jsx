import React from 'react';

import './style.css';

const Profile = () => {
    return(
        <div id="profile">
            <div id="profile-back">
                <img src="./images/image-jeremy.png" alt="Profile" />
                <div id="name">
                    <p className='info'>Report for</p>
                    <div className="data">Jeremy Robson</div>
                </div>
            </div>
            <div id="option">
                <a href="/" className="info">Daily</a>
                <a href="/" className="info">Weekly</a>
                <a href="/" className="info">Monthly</a>
            </div>
        </div>
    )
}

export default Profile;