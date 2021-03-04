import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import './ChannelRow.css';
import CheckCircleOutlineOutlined from '@material-ui/icons/CheckCircleOutlineOutlined';

// Props should be given same variable name
function ChannelRow({ image, channel, verified, subs, noOfVideo, description }) {
    return ( 
        <div className = "channelRow" >
        <Avatar className = "channelRow__logo"
        alt = { channel }
        src = { image } /> 
        <div className = "channelRow__text">
            <h4>{channel} {verified && <CheckCircleOutlineOutlined />} </h4>
            <p>
                {subs} subscibers - {noOfVideo} videos
            </p>
            <p>
                {description}
            </p>

        </div>
        </div>
    )
}

export default ChannelRow