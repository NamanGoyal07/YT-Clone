import React from 'react'
import './RecommendedVideos.css';
import VideoCard from './VideoCard.js';

function RecommendedVideos() {
    return (
        <div className="recommend">
            <h2>Recommended</h2>

            <div className="recommend__videos">
                {/* It will contain all videos */}

                <VideoCard 
                    title="Real Time ChatCord"
                    views="2.3M views"
                    timestamp="3 days ago"
                    channel="Naman Goyal"
                    channelimage="https://yt3.ggpht.com/yti/ANoDKi4H2giODBfCok8gc4zZcy9q0DjdckXPE21-HIBDEA=s88-c-k-c0x00ffffff-no-rj-mo"
                    image = "https://i9.ytimg.com/vi/HCZkwoGw38M/mq2.jpg?sqp=CMTl_IEG&rs=AOn4CLCFhBvS56LVYklHBDI8Nqim1yREVw"
                />

                <VideoCard 
                    title="Virtual Memory Concept"
                    views="4.5M views"
                    timestamp="5 days ago"
                    channel="Naman Goyal"
                    channelimage="https://yt3.ggpht.com/yti/ANoDKi4H2giODBfCok8gc4zZcy9q0DjdckXPE21-HIBDEA=s88-c-k-c0x00ffffff-no-rj-mo"
                    image = "https://i9.ytimg.com/vi/9z7LIvwwOrQ/mqdefault.jpg?time=1614754500000&sqp=CMTl_IEG&rs=AOn4CLB4wmLFuNdQvPJP0aCeV04_shp9PQ"
                />
            </div>

        </div>
    )
}

export default RecommendedVideos
