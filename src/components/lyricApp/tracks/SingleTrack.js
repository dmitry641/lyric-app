import React from "react";
import { Link } from "react-router-dom";

export default function SingleTrack({ oneTrack }) {
  return (
    <div className="col-md-6">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5>{oneTrack.track.artist_name}</h5>
          <p className="card-text">
            <strong>
              <i className="fas fa-play mr-1"></i>
              Название:&nbsp;
            </strong>
            {oneTrack.track.track_name}
          </p>
          <Link
            to={`lyrics/track/${oneTrack.track.track_id}`}
            className="btn btn-dark btn-block"
          >
            <i className="fas fa-chevron-right mr-1"></i>Посмотреть текст
          </Link>
        </div>
      </div>
    </div>
  );
}
