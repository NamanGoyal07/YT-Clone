import React from 'react'
import './SearchPage.css';
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from './ChannelRow.js';

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

            {/* <VideoRow /> */}

        </div>
    )
}

export default SearchPage
