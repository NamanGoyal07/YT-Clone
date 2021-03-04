import React from 'react'
import './SearchPage.css';
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from './ChannelRow.js';
import VideoRow from './VideoRow.js';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
            <TuneOutlinedIcon />
            <h2>FILTER</h2>
            </div>
            <hr />

            <ChannelRow
                image="https://yt3.ggpht.com/yti/ANoDKi4H2giODBfCok8gc4zZcy9q0DjdckXPE21-HIBDEA=s88-c-k-c0x00ffffff-no-rj-mo"
                channel="Naman Goyal"
                verified
                subs="2K"
                noOfVideo= {2}
                description="This is my Youtube Channel, I'm from IITG."
            /> 

            <hr />

            <VideoRow 
            views="2.3M views"
            description="This is a Real Time ChatCord with rooms for chat"
            timestamp="3 days ago"
            channel="Naman Goyal"
            title="Real Time ChatCord"
            image="https://i9.ytimg.com/vi_webp/HCZkwoGw38M/mqdefault.webp?time=1614858900000&sqp=CJSVg4IG&rs=AOn4CLArWB4ULzh_RUKpsjLJnZHUyF5X4g"
            />

            <VideoRow 
            views="4.5M views"
            description="My explaination about the Virtual Memory Concept in Linux"
            timestamp="5 days ago"
            channel="Naman Goyal"
            title="Virtual Memory Concept"
            image="https://i9.ytimg.com/vi/9z7LIvwwOrQ/mqdefault.jpg?time=1614858900000&sqp=CJSVg4IG&rs=AOn4CLAAmtJf5rJ9mCg8YQFRnKmQAaR1lw"
            />

            <VideoRow 
            views="2.3M views"
            description="This is a Real Time ChatCord with rooms for chat"
            timestamp="3 days ago"
            channel="Naman Goyal"
            title="Real Time ChatCord"
            image="https://i9.ytimg.com/vi_webp/HCZkwoGw38M/mqdefault.webp?time=1614858900000&sqp=CJSVg4IG&rs=AOn4CLArWB4ULzh_RUKpsjLJnZHUyF5X4g"
            />

            <VideoRow 
            views="4.5M views"
            description="My explaination about the Virtual Memory Concept in Linux"
            timestamp="5 days ago"
            channel="Naman Goyal"
            title="Virtual Memory Concept"
            image="https://i9.ytimg.com/vi/9z7LIvwwOrQ/mqdefault.jpg?time=1614858900000&sqp=CJSVg4IG&rs=AOn4CLAAmtJf5rJ9mCg8YQFRnKmQAaR1lw"
            />

            <VideoRow 
            views="2.3M views"
            description="This is a Real Time ChatCord with rooms for chat"
            timestamp="3 days ago"
            channel="Naman Goyal"
            title="Real Time ChatCord"
            image="https://i9.ytimg.com/vi_webp/HCZkwoGw38M/mqdefault.webp?time=1614858900000&sqp=CJSVg4IG&rs=AOn4CLArWB4ULzh_RUKpsjLJnZHUyF5X4g"
            />

            <VideoRow 
            views="4.5M views"
            description="My explaination about the Virtual Memory Concept in Linux"
            timestamp="5 days ago"
            channel="Naman Goyal"
            title="Virtual Memory Concept"
            image="https://i9.ytimg.com/vi/9z7LIvwwOrQ/mqdefault.jpg?time=1614858900000&sqp=CJSVg4IG&rs=AOn4CLAAmtJf5rJ9mCg8YQFRnKmQAaR1lw"
            />

            <VideoRow 
            views="2.3M views"
            description="This is a Real Time ChatCord with rooms for chat"
            timestamp="3 days ago"
            channel="Naman Goyal"
            title="Real Time ChatCord"
            image="https://i9.ytimg.com/vi_webp/HCZkwoGw38M/mqdefault.webp?time=1614858900000&sqp=CJSVg4IG&rs=AOn4CLArWB4ULzh_RUKpsjLJnZHUyF5X4g"
            />

            <VideoRow 
            views="4.5M views"
            description="My explaination about the Virtual Memory Concept in Linux"
            timestamp="5 days ago"
            channel="Naman Goyal"
            title="Virtual Memory Concept"
            image="https://i9.ytimg.com/vi/9z7LIvwwOrQ/mqdefault.jpg?time=1614858900000&sqp=CJSVg4IG&rs=AOn4CLAAmtJf5rJ9mCg8YQFRnKmQAaR1lw"
            />

        </div>
    )
}

export default SearchPage
