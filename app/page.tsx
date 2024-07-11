import LeftBar from "./Pages/LeftBar/page";
import MainPage from "./Pages/MainPage/page";
import Navbar from "./Pages/Navbar/page";
import RightBar from "./Pages/RightBar/page";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-between">
      <Navbar></Navbar>
      <div className="flex flex-1 ">
        <div className="w-1/6 border border-green-500">
          <LeftBar></LeftBar>
        </div>
        <div className="flex-1 text-center">
          <MainPage></MainPage>
        </div>
        <div className="w-1/6 border border-blue-500">
          <RightBar></RightBar>
        </div>
      </div>
    </main>
  );
}
