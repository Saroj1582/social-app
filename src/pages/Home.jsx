import Feed from "../components/Feed/Feed";
import Navbar from "../components/Navbar/Navbar";
import Rightbar from "../components/Rightbar/Rightbar";
import Sidebar from "../components/Sidebar/Sidebar";

function Home() {
  return (
    <>
      <Navbar />
      <div className="flex w-[100%]">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
}

export default Home;
