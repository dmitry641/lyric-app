import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
const TracksContext = React.createContext();

export function useTrackList() {
  return useContext(TracksContext);
}

export function TracksProvider({ children }) {
  const [trackList, setTrackList] = useState([]);
  const [header, setHeader] = useState("Десять популярных треков");

  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=ru&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then((res) => {
        // console.log(res.data);
        setTrackList(res.data.message.body.track_list);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <TracksContext.Provider
      value={{ trackList, header, setTrackList, setHeader }}
    >
      {children}
    </TracksContext.Provider>
  );
}
