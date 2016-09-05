import React from 'react';
import VideoListItem from './video_list_item';
//the array of videos inside a property object sent by the parent component
//access props from a class based component by typing this.props
const VideoList = (props) => {
    const videoItens = props.videos.map((video) => {
        return <VideoListItem video={video} />
    });
        
    return (
        //add css class use className
        <ul className="col-md-4 list-group">
            {videoItens}
        </ul>    
    );
};

export default VideoList;