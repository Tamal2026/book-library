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
          <div className="p-1 rounded-lg bg-blue-500 text-white">
            <FaHome />
          </div>
          <h1>Discover</h1>
        </div>
        <div className="flex gap-3 items-center">
          <div className="p-1 rounded-lg bg-blue-500 text-white">
            <MdOutlineCategory />
          </div>
          <h1>Category</h1>
        </div>
        <div className="flex gap-3 items-center">
          <div className="p-1 rounded-lg bg-blue-500 text-white">
            <LuBookOpenCheck />
          </div>
          <h1>My Library</h1>
        </div>
        <div className="flex gap-3 items-center">
          <div className="p-1 rounded-lg bg-blue-500 text-white">
            <FaDownload />
          </div>
          <h1>Download</h1>
        </div>
        <div className="flex gap-3 items-center">
          <div className="p-1 rounded-lg bg-blue-500 text-white">
            <MdSpatialAudioOff />
          </div>
          <h1>Audio Books</h1>
        </div>
        <div className="flex gap-3 items-center">
          <div className="p-1 rounded-lg bg-blue-500 text-white">
            <FaRegHeart />
          </div>
          <h1>Favourite</h1>
        </div>

        <hr />
        <div className="flex gap-3 items-center">
          <div className="p-1 rounded-lg bg-blue-500 text-white">
            <IoSettingsOutline />
          </div>
          <h1>Setting</h1>
        </div>
        <div className="flex gap-3 items-center">
          <div className="p-1 rounded-lg bg-blue-500 text-white">
            <MdOutlineSupportAgent />
          </div>
          <h1>Support</h1>
        </div>
        <div className="flex gap-3 items-center">
          <div className="p-1 rounded-lg bg-blue-500 text-white">
            <IoIosLogOut />
          </div>
          <h1>Logout</h1>
        </div>
      </div>
    </main>
  );
}
