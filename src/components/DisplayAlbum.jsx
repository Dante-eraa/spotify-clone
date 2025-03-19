import React, { useContext } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { albumsData, assets, songsData } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";

const DisplayAlbum = () => {
  const { id } = useParams();
  const albumData = albumsData[id];
  const { playWithId } = useContext(PlayerContext);

  return (
    <>
      <Navbar />
      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
        <img src={albumData.image} alt="Album" className="w-48 rounded" />
        <div className="flex flex-col ">
          <p>Playlist</p>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl">
            {albumData.name}
          </h2>
          <h4>{albumData.desc}</h4>
          <p className="mt-1">
            <img
              src={assets.spotify_logo}
              alt="Logo"
              className="inline-block w-5"
            />
            <b> Spotify </b>• 1,323,858 likes •<b> 50 songs</b> about 2 hr 30
            min
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
        <p>
          <b className="mr-4">#</b>Title
        </p>
        <p>Album</p>
        <p className="hidden sm:block">Date Added</p>
        <img src={assets.clock_icon} alt="Clock" className="m-auto w-4" />
      </div>
      <hr />
      {songsData.map((eachSong, id) => (
        <div
          onClick={() => playWithId(id)}
          key={id}
          className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer"
        >
          <p className="text-white ">
            <b className="mr-4 text-[#a7a7a7] text-md">{id + 1}</b>
            <img src={eachSong.image} alt="Song" className="inline w-10 mr-5" />
            <span className="hidden sm:inline">{eachSong.name}</span>
          </p>
          <p className="text-[15px]">{albumData.name}</p>
          <p className="text-[15px] hidden sm:block">10 days ago</p>
          <p className="text-center text-[15px]">{eachSong.duration}</p>
        </div>
      ))}
    </>
  );
};

export default DisplayAlbum;
