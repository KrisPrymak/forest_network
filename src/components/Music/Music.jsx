import React from "react";
import s from "./Music.module.css";

const Music = (props) => {
  return (
    <div className={s.music}>
      {props.songs.map((song) => (
        <div className={s.item}>
          <div className={s.left}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2404/2404729.png"
            alt="song_icon"
            className={s.icon}
          />
          <div>
            {song.play ? (
              <button
                className={s.buttonPause}
                onClick={() => {
                  props.pauseSong(song.id);
                }}
              ></button>
            ) : (
              <button
                className={s.buttonPlay}
                onClick={() => {
                  props.playSong(song.id);
                }}
              ></button>
            )}
          </div>
          <div className={s.info}>
            <div className={s.nameItem}>{song.name}</div>
            <div>{song.author}</div>
          </div>
          </div>
          <div className={s.rigth}>
          <div>
            {song.add ? (
              <button
                className={s.buttonDelete}
                onClick={() => {
                  props.deleteSong(song.id);
                }}
              ></button>
            ) : (
              <button
                className={s.buttonAdd}
                onClick={() => {
                  props.addSong(song.id);
                }}
              ></button>
            )}
          </div>
          <div>{`${song.length.min}:${song.length.sec}`}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Music;
