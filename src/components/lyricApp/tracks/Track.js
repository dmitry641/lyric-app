import React from "react";
import { useTrackList } from "./Tracks";
import Spinner from "../layout/Spinner";
import SingleTrack from "./SingleTrack";

export default function Track() {
  const { trackList, header } = useTrackList();
  if (trackList === undefined || trackList.length === 0) {
    return <Spinner></Spinner>;
  } else {
    return (
      <div>
        <h2 className="text-center mb-4">{header}</h2>
        <div className="row">
          {trackList.map((track) => {
            return (
              <SingleTrack
                key={track.track.track_id}
                oneTrack={track}
              ></SingleTrack>
            );
          })}
        </div>
      </div>
    );
  }
}
