import { useState, useEffect } from "react";
import API_KEY from "./Key";
/* eslint-disable */
const useYoutubeSearch = (term) => {
  const [data, setData] = useState(null);
  var i;
  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${term}&type=video&key=${API_KEY}`
      )
        .then((response) => response.json())
        .then((result) => {
          console.log(result);

          result.items.map((item) => {
            fetch(
              `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${item.snippet.channelId}&key=${API_KEY}`
            )
              .then((res) => res.json())
              .then((res) => {
                Object.assign(result.items[i], res.items[i]);
                //console.log(Object.assign(result.items[i], res.items[i]));
                i++;
              });
          });
          setData(result);
        });
    };
    fetchData();
  }, [term]);

  return { data };
};

export default useYoutubeSearch;
