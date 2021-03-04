import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import './ChannelRow.css';

function ChannelRow({ image, channel, verified, subs, noOfVideo, description }) {
    return ( 
        <div className = "channelRow" >
        <Avatar className = "channelRow__logo"
        alt = { channel }
        src = { image }
        /> 
        <div className = "channelRow__text" >
            
        </div>
        </div>
    )
}

export default ChannelRow