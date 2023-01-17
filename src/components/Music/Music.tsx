import React from "react";
// @ts-ignore
import s from './Music.module.css';
import { SongType } from "../../types";

type PropsType = {
  songs: Array<SongType>
  pauseSong: (id: number) => void
  playSong: (id: number) => void
  deleteSong: (id: number) => void
  addSong: (id: number) => void
}

const Music: React.FC<PropsType> = ({songs, pauseSong, playSong, deleteSong, addSong}) => {
  return (
    <div className={s.music}>
      {songs.map((song) => (
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
                  pauseSong(song.id);
                }}
              ></button>
            ) : (
              <button
                className={s.buttonPlay}
                onClick={() => {
                  playSong(song.id);
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
                  deleteSong(song.id);
                }}
              ></button>
            ) : (
              <button
                className={s.buttonAdd}
                onClick={() => {
                  addSong(song.id);
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
