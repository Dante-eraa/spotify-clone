import React, { useContext } from "react";
import { assets, songsData } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";

const Player = () => {
  const {
    seekBar,
    seekBg,
    playerStatus,
    play,
    pause,
    track,
    time,
    previous,
    next,
    seekSong,
  } = useContext(PlayerContext);
  return (
    <div className="h-[10%] bg-black flex justify-between items-center text-white px-4 ">
      <div className="hidden lg:flex items-center gap-4 ">
        <img src={track.image} alt="Song" className="w-12" />
        <div className="">
          <p className="">{track.name}</p>
          <p className="">{track.desc.slice(0, 12)}</p>
        </div>
      </div>
      <div className="flex flex-col  items-center gap-2 sm:gap-4 m-auto ">
        <div className="flex gap-4">
          <img
            src={assets.shuffle_icon}
            alt="Shuffle"
            className="w-4 cursor-pointer"
          />
          <img
            onClick={previous}
            src={assets.prev_icon}
            alt="Previous"
            className="w-4 cursor-pointer"
          />
          {playerStatus ? (
            <img
              onClick={pause}
              src={assets.pause_icon}
              alt="Pause"
              className="w-4 cursor-pointer"
            />
          ) : (
            <img
              onClick={play}
              src={assets.play_icon}
              alt="Play"
              className="w-4 cursor-pointer"
            />
          )}

          <img
            onClick={next}
            src={assets.next_icon}
            alt="Next"
            className="w-4 cursor-pointer"
          />
          <img
            src={assets.loop_icon}
            alt="Loop"
            className="w-4 cursor-pointer"
          />
        </div>
        <div className="flex items-center gap-5 ">
          <p className="block md:hidden xl:block">
            {time.currentTime.minute}:{time.currentTime.second}
          </p>
          <div
            ref={seekBg}
            onClick={seekSong}
            className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer"
          >
            <hr
              ref={seekBar}
              className="h-1 border-none w-10 bg-green-800 rounded-full"
            />
          </div>
          <p className="block md:hidden xl:block">
            {time.totalTime.minute}:{time.totalTime.second}
          </p>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-2 opacity-75">
        <img src={assets.plays_icon} alt="Plays" className="w-4" />
        <img src={assets.mic_icon} alt="Mic" className="w-4" />
        <img src={assets.queue_icon} alt="Queue" className="w-4" />
        <img src={assets.speaker_icon} alt="Speaker" className="w-4" />
        <img src={assets.volume_icon} alt="Volume" className="w-4" />
        <div className="w-20 bg-slate-50 h-1 rounded"></div>
        <img src={assets.mini_player_icon} alt="Mini Player" className="w-4" />
        <img src={assets.zoom_icon} alt="Zoom" className="w-4" />
      </div>
    </div>
  );
};

export default Player;
