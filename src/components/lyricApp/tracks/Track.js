import React from "react";
import { useTrackList } from "./Tracks";

export default function Track() {
  const { trackList, header } = useTrackList();

  return (
    <div>
      <h2>{header}</h2>
      {trackList.map((track) => {
        return <div key={track.track.track_id}>{track.track.track_name}</div>;
      })}
    </div>
  );
}
