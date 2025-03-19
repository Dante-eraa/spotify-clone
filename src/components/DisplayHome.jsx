import React from "react";
import Navbar from "./Navbar";
import { albumsData, songsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";
import SongItem from "./SongItem";

const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((eachAlbum, id) => (
            <AlbumItem
              key={id}
              name={eachAlbum.name}
              image={eachAlbum.image}
              desc={eachAlbum.desc}
              id={eachAlbum.id}
            />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Today's biggest hits</h1>
        <div className="flex overflow-auto">
          {songsData.map((eachSong, id) => (
            <SongItem
              key={id}
              name={eachSong.name}
              image={eachSong.image}
              desc={eachSong.desc}
              id={eachSong.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
