import Image from "next/image";
import { FaDownload, FaHome, FaRegHeart } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { LuBookOpenCheck } from "react-icons/lu";
import {
  MdOutlineCategory,
  MdOutlineSupportAgent,
  MdSpatialAudioOff,
} from "react-icons/md";

export default function Home() {
  return (
    <main>
      <div className="space-y-6">
        <div className="flex gap-3 items-center">
          <Image
            src="https://i.ibb.co/smP8h8b/booknest-removebg-preview.png"
            alt="Booknest"
            width={50} // Adjust the width as needed
            height={50} // Adjust the height as needed
          />
          <h1>Discover</h1>
        </div>
        <div className="flex gap-3 items-center">
          <FaHome className=""></FaHome>
          <h1>Discover</h1>
        </div>
        <div className="flex gap-3 items-center">
          <MdOutlineCategory />
          <h1>Category</h1>
        </div>
        <div className="flex gap-3 items-center">
          <LuBookOpenCheck />
          <h1>My Library</h1>
        </div>
        <div className="flex gap-3 items-center">
          <FaDownload />
          <h1>Download</h1>
        </div>
        <div className="flex gap-3 items-center">
          <MdSpatialAudioOff />
          <h1>Audio Books</h1>
        </div>
        <div className="flex gap-3 items-center">
          <FaRegHeart />
          <h1>Favourite</h1>
        </div>

        <hr />
        <div className="flex gap-3 items-center">
          <IoSettingsOutline />
          <h1>Setting</h1>
        </div>
        <div className="flex gap-3 items-center">
          <MdOutlineSupportAgent />
          <h1>Support</h1>
        </div>
        <div className="flex gap-3 items-center">
          <IoIosLogOut />
          <h1>Logout</h1>
        </div>
      </div>
    </main>
  );
}
