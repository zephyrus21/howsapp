import React, { useState, useEffect } from 'react';
import { Avatar } from '@material-ui/core';

import './SidebarChats.css';

const SidebarChats = () => {
    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);
    return (
        <div className="sidebarChats">
            <Avatar
                src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
            />
            <div className="sidebarChats__info">
                <h2>Name</h2>
                <p>Last Message</p>
            </div>
        </div>
    );
};

export default SidebarChats;
