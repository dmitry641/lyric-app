import React, { useState, useContext } from "react";

const TracksContext = React.createContext();

export function useTrackList() {
  return useContext(TracksContext);
}

export function TracksProvider({ children }) {
  const [trackList, setTrackList] = useState([
    { track: { track_name: "123", track_id: "" + Math.random() } },
    { track: { track_name: "qwe", track_id: "" + Math.random() } },
    { track: { track_name: "gfhgfh", track_id: "" + Math.random() } },
  ]);
  const [header, setHeader] = useState("Top 10 tracks");

  return (
    <TracksContext.Provider value={{ trackList, header }}>
      {children}
    </TracksContext.Provider>
  );
}
