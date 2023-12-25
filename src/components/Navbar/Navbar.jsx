import SearchIcon from "@mui/icons-material/Search";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
function Navbar() {
  return (
    <>
      <nav className="flex items-center h-[50px] w-[100%] bg-blue-500 sticky top-0 z-[999]">
        <div className="flex-[3]">
          <div className="text-[25px] font-semibold text-white ml-3 w-auto">
            Social App
          </div>
        </div>
        <div className="flex-[5]">
          <div className="bg-white w-[100%] rounded-[30px] py-1 flex items-center gap-1">
            <SearchIcon className="!text-[20px] ml-2" />
            <input
              className=" rounded-none outline-none w-[70%] placeholder:text-[13px] "
              type="text"
              placeholder="search for friend or posts or video"
            />
          </div>
        </div>
        <div className="flex-[4] flex justify-around items-center">
          <div className="flex gap-2 cursor-pointer text-white">
            <span>Homepage</span>
            <span>Timeline</span>
          </div>
          <div className="flex gap-4 text-white">
            <div className="relative cursor-pointer ">
              <PersonIcon />
              <span className="h-[15px] w-[15px] absolute bg-red-600 rounded-[50%] top-[-5px] right-[-5px] flex items-center justify-center text-[10px] font-semibold">
                2
              </span>
            </div>
            <div className="relative cursor-pointer ">
              <MessageIcon />
              <span className="h-[15px] w-[15px] absolute bg-red-600 rounded-[50%] top-[-5px] right-[-5px] flex items-center justify-center text-[10px] font-semibold">
                1
              </span>
            </div>
            <div className="relative cursor-pointer ">
              <NotificationsIcon />
              <span className="h-[15px] w-[15px] absolute bg-red-600 rounded-[50%] top-[-5px] right-[-5px] flex items-center justify-center text-[10px] font-semibold">
                2
              </span>
            </div>
          </div>
          <img
            className="h-[32px] w-[32px] rounded-[50%] object-cover cursor-pointer"
            src="src/assets/person/1.jpeg"
            alt=""
          />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
