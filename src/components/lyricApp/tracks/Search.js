import React, { useState, useEffect } from "react";
import { useTrackList } from "./Tracks";
import axios from "axios";

export default function Search() {
  const [title, setTitle] = useState("");
  const { trackList, setTrackList, setHeader } = useTrackList();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(title);
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${title}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then((res) => {
        console.log(res.data);
        setTrackList(res.data.message.body.track_list);
        setHeader("Результаты поиска");
      })
      .catch((err) => console.log(err));
    setTitle("");
  };

  return (
    <div>
      <div className="card card-body mb-4 p-4">
        <h1 className="display-4 text-center">
          <i className="fas fa-music mr-2"></i>Поиск треков
        </h1>
        <p className="lead text-center">и просмотр лирики</p>
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <input
              name="title"
              className="form-control form-control-lg"
              placeholder="Трек..."
              value={title}
              type="text"
              onChange={(e) => setTitle(e.target.value)}
            ></input>
          </div>
          <button
            className="btn btn-primary btn-lg btn-block mb-3"
            type="submit"
          >
            Искать
          </button>
        </form>
      </div>
    </div>
  );
}
