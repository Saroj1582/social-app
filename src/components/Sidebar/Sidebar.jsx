import RssFeedIcon from "@mui/icons-material/RssFeed";
import ChatIcon from "@mui/icons-material/Chat";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import GroupIcon from "@mui/icons-material/Group";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import EventIcon from "@mui/icons-material/Event";
import SchoolIcon from "@mui/icons-material/School";
import "./sidebar.css";
import { Users } from "../../dummyData";
import Friend from "../Friend/Friend";

function Sidebar() {
  return (
    <>
      <div className="flex-[3] h-[calc(100vh-50px)] overflow-y-scroll scroll-smooth sidebar sticky top-[50px]">
        <div className="p-[20px]">
          <ul className="flex flex-col gap-5">
            <li className="sidebarListItem">
              <RssFeedIcon className="sidebarIcon" />
              <span className="sidebarListItemText">Feed</span>
            </li>
            <li className="sidebarListItem">
              <ChatIcon className="sidebarIcon" />
              <span className="sidebarListItemText">Chats</span>
            </li>
            <li className="sidebarListItem">
              <PlayCircleIcon className="sidebarIcon" />
              <span className="sidebarListItemText">Videos</span>
            </li>
            <li className="sidebarListItem">
              <GroupIcon className="sidebarIcon" />
              <span className="sidebarListItemText">Groups</span>
            </li>
            <li className="sidebarListItem">
              <BookmarkIcon className="sidebarIcon" />
              <span className="sidebarListItemText">Booksmarks</span>
            </li>
            <li className="sidebarListItem">
              <HelpOutlineIcon className="sidebarIcon" />
              <span className="sidebarListItemText">Questions</span>
            </li>
            <li className="sidebarListItem">
              <WorkOutlineIcon className="sidebarIcon" />
              <span className="sidebarListItemText">Jobs</span>
            </li>
            <li className="sidebarListItem">
              <EventIcon className="sidebarIcon" />
              <span className="sidebarListItemText">Events</span>
            </li>
            <li className="sidebarListItem">
              <SchoolIcon className="sidebarIcon" />
              <span className="sidebarListItemText">Courses</span>
            </li>
          </ul>
          <button className="border-none rounded-[5px] w-[150px] p-[10px] bg-gray-300 font-medium">
            Show More
          </button>
          <hr className="my-[20px]" />
          <ul className="m-0 p-0 flex flex-col gap-4">
            {Users.map((user) => (
              <Friend key={user.id} user={user} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
