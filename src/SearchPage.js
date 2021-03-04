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
            image="https://i9.ytimg.com/vi/HCZkwoGw38M/mq2.jpg?sqp=CMTl_IEG&rs=AOn4CLCFhBvS56LVYklHBDI8Nqim1yREVw"
            />

            <VideoRow 
            views="4.5M views"
            description="My explaination about the Virtual Memory Concept in Linux"
            timestamp="5 days ago"
            channel="Naman Goyal"
            title="Virtual Memory Concept"
            image="https://i9.ytimg.com/vi/9z7LIvwwOrQ/mqdefault.jpg?time=1614754500000&sqp=CMTl_IEG&rs=AOn4CLB4wmLFuNdQvPJP0aCeV04_shp9PQ"
            />

        </div>
    )
}

export default SearchPage
