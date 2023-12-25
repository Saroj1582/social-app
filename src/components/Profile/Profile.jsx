import Feed from "../Feed/Feed";
import Navbar from "../Navbar/Navbar";
import Rightbar from "../Rightbar/Rightbar";
import Sidebar from "../Sidebar/Sidebar";

function Profile() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-[9]">
          <div>
            <div className="h-[320px] relative">
              <img
                className="w-[100%] h-[250px] object-cover"
                src="src/assets/post/2.jpeg"
                alt=""
              />
              <img
                className="w-[150px] h-[150px] rounded-[50%] object-cover absolute left-0 right-0 top-[180px] mx-auto border-[3px] border-solid"
                src="src/assets/person/7.jpeg"
                alt=""
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h4 className="text-[24px] font-semibold">John Kart</h4>
              <span className="text=-center font-light">Hello There</span>
            </div>
          </div>
          <div className="flex">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
