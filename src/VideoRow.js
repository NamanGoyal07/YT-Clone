import './VideoRow.css';

import React from 'react'

function VideoRow({views, description, timestamp, channel, title, image}) {
    return (
        <div className="videoRow">
            <img src={image} alt="" />
            <div className="videoRow__text">
                <h3>{title}</h3>
                <p>
                    {channel} . {views} views . {timestamp}
                </p>
                <p className="videoRow__description">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default VideoRow


