import React from "react";
import "./SearchPage.css";
import { TuneOutlined } from "@material-ui/icons";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import { useStateValue } from "../StateProvider";
import useYoutubeSearch from "../useYoutubeSearch";
/* eslint-disable */
function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useYoutubeSearch(term);

  /* MOCK API */
  /* const data = Response; */

  console.log(data);

  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlined />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        channel="Sunil Luhana"
        description="lorem Ipsum what should you do after making this clone do you make any changes in it? or you just deploy it as it completed"
        subs="443K"
        noOfVideos="244"
        verified
      />
      <hr />
      {term && (
        <div className="searchPage__results">
          {data?.items.map((item) => (
            <VideoRow
              id={item.id}
              image={item.snippet.thumbnails.default.url}
              views="700k"
              subs="234k"
              description={item.snippet.description}
              timestamp="23 second ago"
              channel={item.snippet.channelTitle}
              title={item.snippet.title}
            />
          ))}
        </div>
      )}
      <VideoRow
        views="700k"
        subs="234k"
        description="lorem Ipsum what should you do after making this clone do you make any changes in it? or you just deploy it as it completed"
        timestamp="23 second ago"
        channel="Sunil Luhana"
        title="My Youtube Clone"
      />
    </div>
  );
}

export default SearchPage;
