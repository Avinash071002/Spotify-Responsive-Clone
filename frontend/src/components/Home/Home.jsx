import Layout from "../Layout/Layout";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import SongBar from "../MasterBar/SongBar";
import { useSelector } from "react-redux";
const songs = [
    {
        id: Math.random() * Date.now(),
        title: "Tum Hi Ho",
        artist: "Arijit Singh",
        mp3: new Audio("/assets/mp3/Tum Hi Ho.mp3"),
        img: "/assets/Arijit-1.jpg",
    },
    {
        id: Math.random() * Date.now(),
        title: "Ae Dil Hai Mushkil",
        artist: "Arijit Singh",
        mp3: new Audio("/assets/mp3/Ae Dil Hai Mushkil Title Track.mp3"),
        img: "/assets/Arijit-2.jpg",
    },
    {
        id: Math.random() * Date.now(),
        title: "Aayat",
        artist: "Arijit Singh",
        mp3: new Audio("/assets/mp3/Aayat.mp3"),
        img: "/assets/Arijit-3.jpg",
    },
    {
        id: Math.random() * Date.now(),
        title: "Bin Tere",
        artist: "Arijit Singh",
        mp3: new Audio("/assets/mp3/Bin Tere.mp3"),
        img: "/assets/Arijit-4.jpg",
    },
    {
        id: Math.random() * Date.now(),
        title: "Tum Se",
        artist: "Darshan Raval",
        mp3: new Audio("/assets/mp3/Tum Se.mp3"),
        img :"/assets/darshan raval.webp",
        
        

    },
    {
        id: Math.random() * Date.now(),
        title: "Tu Hi Meri Shab Hai",
        artist: "KK",
        mp3: new Audio("/assets/mp3/Tu Hi Meri Shab Hai.mp3"),
        img:"/assets/KK-1.webp",
    },
    {
        id: Math.random() * Date.now(),
        title: "Kabhi Kabhi Aditi",
        artist: "A. R. Rahman",
        mp3: new Audio("/assets/mp3/Kabhi Kabhi Aditi.mp3"),
        img: "/assets/Kabhi-Kabhi-Aditi.jpg",
    },
];
const Home = () => {
    const { user, isAuthenticated } = useSelector((state) => state.account);
    return (
      <Layout>
        <div className="flex justify-between ml-4  py-4 rounded-[2px] mt-2 px-8 secondary_bg items-center border-b border-b-gray-50">
          <div className="flex gap-2 items-center  ">
            <FaLessThan className="bg-white/10 text-3xl p-1  rounded-[50%] " />
            <FaGreaterThan className="bg-white/10 text-3xl p-1  rounded-[50%] " />
          </div>
          <div>
            {!isAuthenticated ? (
              <div>
                <Link
                  to={"/signup"}
                  className="rounded-full  mt-4 px-8 text-base  py-2 text-white- font-semibold"
                >
                  Sign Up
                </Link>
  
                <Link
                  to={"/login"}
                  className="rounded-full text-black mt-4 px-8 text-base  py-3 bg-white font-semibold"
                >
                  Log in
                </Link>
              </div>
            ) : (
              <FaUser />
            )}
          </div>
        </div>
        <div className="tertiary_bg mx-4 px-4 py-4 ">
          <div className="flex justify-between my-4 items-center">
            <span className="text-xl font-bold hover:underline cursor-pointer">
              Focus
            </span>
            <span>Show All</span>
          </div>
          <div className="grid  gap-6 grid-cols-5">
            {songs.map((song, i) => {
              return <Card key={song.id} idx={i} song={song} />;
            })}
          </div>
          <div className="flex justify-between my-4 items-center">
            <span className="text-xl font-bold hover:underline cursor-pointer">
              Spotify List
            </span>
            <span>Show All</span>
          </div>
          <div className="grid  gap-6 grid-cols-5">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <SongBar />
      </Layout>
    );
  };

export default Home;
