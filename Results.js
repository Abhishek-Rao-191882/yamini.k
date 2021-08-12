import React from "react";

const Results = ({videos}) => {
    return (
        <div className ="search-result">
            {videos.map((video) => {
                return(
                    <Video
                        key={video.id.videoId}
                        title={video.snippet.title}
                        dateAdded={video.snippet.publishedAt}
                        channel={video.snippet.channelTitle}
                    />
                )
            })}
                
        </div>
    )
}
export default Results;