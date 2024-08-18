import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineHeart } from "react-icons/ai";
import { CgScreen } from "react-icons/cg";
import { BiShuffle } from "react-icons/bi";
import { AiOutlineStepForward } from "react-icons/ai";
import { AiOutlineStepBackward } from "react-icons/ai";
import { FaPause, FaPlay } from 'react-icons/fa';
import { IoMdRepeat } from "react-icons/io";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { PiMicrophoneStage } from "react-icons/pi";
import { HiQueueList } from "react-icons/hi2";
import { MdDevices } from "react-icons/md";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { HiOutlineSpeakerXMark } from "react-icons/hi2";
import { BsArrowsAngleContract } from "react-icons/bs";
 import { playMaster, pauseMaster, playSong } from '../states/Actors/SongActor';
import { useGlobalContext } from '../states/Context';
import "./SongBar.css";



const SongBar = () => {
const {masterSong, isPlaying} = useSelector((state) => state.mainSong);
const { progress, setProgress, resetEverything,
     duration, setDuration, currTime, setCurrTime, songIdx, setSongIdx} = useGlobalContext();
  const dispatch = useDispatch()

  const handleMaster = () =>{
  if(isPlaying){
    dispatch(pauseMaster());
  }
else{
    dispatch(playMaster());
    }
};
useEffect(() =>{
    if(masterSong.mp3){
        setDuration(formatTime(masterSong?.mp3?.duration));
        if(isPlaying){
            masterSong?.mp3?.play();
         } else {
        masterSong?.mp3?.pause();
    }
}
if(isPlaying){
    setInterval(() =>{
        if(progress ===100){
            dispatch(pauseMaster());
            resetEverything();
        }else{
            setProgress(
                Math.round(
                    (masterSong.mp3.currentTime /
                        masterSong.mp3.duration) *
                        100
                )
            );
        
        setCurrTime(formatTime(masterSong.mp3.currentTime));
    }
    }, 1000);

     }
}, [masterSong, isPlaying]);

const changeProgress = (e) =>{
    setProgress(e.target.value);
    masterSong.mp3.currentTime =  e.target.value/100 * masterSong.mp3.duration;
    console.log(progress);
};

const [volume, setVolume] = useState(50);
const changeVolume = (e) =>{
    setVolume(e.target.value);
    console.log(e.target.value);
    masterSong.mp3.volume = e.target.value /100;
};

const formatTime = (durationInSeconds) =>{
    let minutes = Math.floor(durationInSeconds / 60);
    let seconds = Math.round(durationInSeconds % 60);
    let formattedDuration = `${minutes < 10 ? "0" + minutes : minutes}:${seconds <9 ? "0" + seconds : seconds}`;
    return formattedDuration;
};
const mouseEnter = () => {
    document.querySelector(".active_progress").style.background = "green";
};
const mouseLeave = () => {
    document.querySelector(".active_progress").style.background = "#fff";
};
const enterVolume = () => {
    document.querySelector("#volume").style.background = "#fff";
};
const leaveVolume = () => {
    document.querySelector("#volume").style.background = "#fff";
};

const backwardSong = () =>{
    console.log("backward");
    if(masterSong.mp3){
        masterSong?.mp3?.pause();
        masterSong.mp3.currentTime = 0;
    }
    resetEverything();
    setSongIdx((prevstate) => prevstate -1);
    dispatch(playSong(songs[songIdx-1]));
};

const  forwardSong =() =>{
    if(masterSong.mp3){
        masterSong?.mp3?.pause();
        masterSong.mp3.currentTime =0;
    }
    resetEverything();
    console.log("forward");
    setSongIdx((prevstate) => prevstate +1);
    dispatch(playSong(songs[songIdx+1]));

};
  return (
   <div className="bottom-0 w-full px-2 fixed justify-between left-0 h-20 flex items-center bg-black">

    <div className="w-2/12">
    <div className="flex items-center gap-2">
    <img src="/assets/Arijit-1.jpg" alt="" className="h-12" />
<div>
        
        <h3 className="text-[12px] font-semibold mb-1">
            {masterSong?.title || "Tum Se"}
            </h3>
        <span className="text-[10px]">{masterSong?.artist  || "Arijit Singh"}</span>
        </div>
        <AiOutlineHeart  className="ml-3"/>
        <CgScreen className="ml-3" />

        </div>
        </div>
        <div className="w-5/12">
        <div className="flex justify-center items-center mb-2 gap-4">
        <BiShuffle />
        <AiOutlineStepBackward  onClick={backwardSong}/>
        {isPlaying ? (<button onClick={handleMaster} className="flex items-center rounded-[50%] bg-white justify-center p-1.5" >
         <FaPause className="text-black text-lg" />
        </button>
     ) : ( 
     <button onClick={handleMaster} className="flex items-center rounded-[50%] bg-white justify-center p-1.5" >
         <FaPlay className="text-black text-lg" />
        </button>)}
        <AiOutlineStepForward onClick={forwardSong}/>
        <IoMdRepeat />
        </div>
        <div className="flex items-center gap-2">
            <span className="text-xs"> {currTime} </span>

<div className="relative w-full flex items-center">

        <input type="range"
         value={progress} 
         onChange={changeProgress}
          disabled={!masterSong.mp3}
         name=""
         onMouseEnter={mouseEnter}
         onMouseLeave={mouseLeave}
          min={0}
          id="progress_bar"
           max={100}
            className="w-full block" />

<div className={`active_progress w-[${progress}%]`}>

</div>

</div>

        <span className="text-xs">{duration}</span>
        </div>
        </div>
        <div className="w-2/12 flex items-center gap-2">
        <AiOutlinePlaySquare  className="text-l"/>
        <PiMicrophoneStage className="text-l"/>
        <HiQueueList className="text-l"/>
        <MdDevices className="text-l"/>
          

       { volume <=0 && <HiOutlineSpeakerXMark /> }
       { volume > 0 && <HiOutlineSpeakerWave className="text-l"/>  }

        <div className="relative w-full">
        <input type="range"
         value={volume} 
         onChange={changeVolume}
          disabled={!masterSong.mp3}
         name=""
         onMouseEnter={enterVolume}
         onMouseLeave={leaveVolume}
          min={0}
           max={100}
            className="w-full block" />
            <div id="volume"
             className={`active_progress w-[${volume}]`}>

             </div>
         </div>
        <BsArrowsAngleContract />


        </div>
        <div className="hidden">
 <div className="w-[1%]"></div>
 <div className="w-[2%]"></div>
 <div className="w-[3%]"></div>
 <div className="w-[4%]"></div>
 <div className="w-[5%]"></div>
 <div className="w-[6%]"></div>
 <div className="w-[7%]"></div>
 <div className="w-[8%]"></div>
 <div className="w-[9%]"></div>
 <div className="w-[10%]"></div>
 <div className="w-[11%]"></div>
 <div className="w-[12%]"></div>
 <div className="w-[13%]"></div>
 <div className="w-[14%]"></div>
 <div className="w-[15%]"></div>
 <div className="w-[16%]"></div>
 <div className="w-[17%]"></div>
 <div className="w-[18%]"></div>
 <div className="w-[19%]"></div>
 <div className="w-[20%]"></div>
 <div className="w-[21%]"></div>
 <div className="w-[22%]"></div>
 <div className="w-[23%]"></div>
 <div className="w-[24%]"></div>
 <div className="w-[25%]"></div>
 <div className="w-[26%]"></div>
 <div className="w-[27%]"></div>
 <div className="w-[28%]"></div>
 <div className="w-[29%]"></div>
 <div className="w-[30%]"></div>
 <div className="w-[31%]"></div>
 <div className="w-[32%]"></div>
 <div className="w-[33%]"></div>
 <div className="w-[34%]"></div>
 <div className="w-[35%]"></div>
 <div className="w-[36%]"></div>
 <div className="w-[37%]"></div>
 <div className="w-[38%]"></div>
 <div className="w-[39%]"></div>
 <div className="w-[40%]"></div>
 <div className="w-[41%]"></div>
 <div className="w-[42%]"></div>
 <div className="w-[43%]"></div>
 <div className="w-[44%]"></div>
 <div className="w-[45%]"></div>
 <div className="w-[46%]"></div>
 <div className="w-[47%]"></div>
 <div className="w-[48%]"></div>
 <div className="w-[49%]"></div>
 <div className="w-[50%]"></div>
 <div className="w-[51%]"></div>
 <div className="w-[52%]"></div>
 <div className="w-[53%]"></div>
 <div className="w-[54%]"></div>
 <div className="w-[55%]"></div>
 <div className="w-[56%]"></div>
 <div className="w-[57%]"></div>
 <div className="w-[58%]"></div>
 <div className="w-[59%]"></div>
 <div className="w-[60%]"></div>
 <div className="w-[61%]"></div>
 <div className="w-[62%]"></div>
 <div className="w-[63%]"></div>
 <div className="w-[64%]"></div>
 <div className="w-[65%]"></div>
 <div className="w-[66%]"></div>
 <div className="w-[67%]"></div>
 <div className="w-[68%]"></div>
 <div className="w-[69%]"></div>
 <div className="w-[70%]"></div>
 <div className="w-[71%]"></div>
 <div className="w-[72%]"></div>
 <div className="w-[73%]"></div>
 <div className="w-[74%]"></div>
 <div className="w-[75%]"></div>
 <div className="w-[76%]"></div>
 <div className="w-[77%]"></div>
 <div className="w-[78%]"></div>
 <div className="w-[79%]"></div>
 <div className="w-[80%]"></div>
 <div className="w-[81%]"></div>
 <div className="w-[82%]"></div>
 <div className="w-[83%]"></div>
 <div className="w-[84%]"></div>
 <div className="w-[85%]"></div>
 <div className="w-[86%]"></div>
 <div className="w-[87%]"></div>
 <div className="w-[88%]"></div>
 <div className="w-[89%]"></div>
 <div className="w-[90%]"></div>
 <div className="w-[91%]"></div>
 <div className="w-[92%]"></div>
 <div className="w-[93%]"></div>
 <div className="w-[94%]"></div>
 <div className="w-[95%]"></div>
 <div className="w-[96%]"></div>
 <div className="w-[97%]"></div>
 <div className="w-[98%]"></div>
 <div className="w-[99%]"></div>
 <div className="w-[100%]"></div>
        </div>
  </div>
  )
};
for(let i =1; i <=100; i++){


console.log(`<div className="w-[${i}%]"></div>`)};
export default SongBar
