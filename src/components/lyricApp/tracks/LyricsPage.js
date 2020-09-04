import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Spinner from "../layout/Spinner";
import Moment from "react-moment";

export default function LyricsPage() {
  const params = useParams();
  const [track, setTrack] = useState("");
  const [lyrics, setLyrics] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${params.id}&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then((res) => {
        // console.log(res.data);
        setLyrics(res.data.message.body.lyrics);
        return axios
          .get(
            `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${params.id}&apikey=${process.env.REACT_APP_MM_KEY}`
          )
          .then((res) => {
            // console.log(res.data);
            setTrack(res.data.message.body.track);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, [params]);

  // if (lyrics === undefined || lyrics === "" || track === undefined || track === "") {
  if (
    lyrics === undefined ||
    lyrics === "" ||
    track === undefined ||
    track === ""
  ) {
    return <Spinner></Spinner>;
  } else {
    return (
      <>
        <Link to="/" className="btn btn-dark btn-sm mb-4">
          Назад
        </Link>
        <div className="card">
          <h5 className="card-header">
            {track.track_name}
            <span className="text-secondary"> {track.artist_name}</span>
          </h5>
          <div className="card-body">
            <p className="card-text">{lyrics.lyrics_body}</p>
          </div>
        </div>

        <ul className="list-group mt-3">
          <li className="list-group-item mr-1">
            <strong>Альбом ИД:</strong>
            {track.album_id}
          </li>
          <li className="list-group-item mr-1">
            <strong>Жанр:</strong>{" "}
            {
              track.primary_genres.music_genre_list[0].music_genre
                .music_genre_name
            }
          </li>
          <li className="list-group-item mr-1">
            <strong>Нецензурная лексика:</strong>
            {track.explicit === 0 ? "No" : "Yes"}
          </li>
          <li className="list-group-item mr-1">
            <strong>Дата выхода:</strong>
            <Moment format="DD.MM.YYYY">{track.first_release_date}</Moment>
          </li>
        </ul>
      </>
    );
  }
}
