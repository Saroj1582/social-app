import PermMediaIcon from "@mui/icons-material/PermMedia";
import LabelIcon from "@mui/icons-material/Label";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

function Share() {
  return (
    <>
      <div className="w-[100%] h-[170px] shadow-md rounded-md">
        <div className="p-[10px]">
          <div className="flex gap-3 items-center">
            <img
              className="w-[50px] h-[50px] rounded-[50%] object-cover"
              src="src/assets/person/1.jpeg"
              alt=""
            />
            <input
              className="w-[80%] border-none outline-none"
              type="text"
              placeholder="share image or video"
            />
          </div>
          <hr className="m-[20px]" />
          <div className="flex items-center justify-between">
            <div className="flex gap-4 ml-5">
              <div className="flex items-center gap-1 cursor-pointer">
                <PermMediaIcon htmlColor="tomato" className="text-[18px]" />
                <span className="text-[14px] font-medium">Image or Video</span>
              </div>
              <div className="flex items-center gap-1 cursor-pointer">
                <LabelIcon htmlColor="blue" className="text-[18px]" />
                <span className="text-[14px] font-medium">Tag</span>
              </div>
              <div className="flex items-center gap-1 cursor-pointer">
                <LocationOnIcon htmlColor="green" className="text-[18px]" />
                <span className="text-[14px] font-medium">Location</span>
              </div>
              <div className="flex items-center gap-1 cursor-pointer">
                <EmojiEmotionsIcon htmlColor="orange" className="text-[18px]" />
                <span className="text-[14px] font-medium">Feelings</span>
              </div>
            </div>
            <button className="bg-green-700 text-white text-[14px] px-3 py-1 mr-[20px] rounded">
              Share
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Share;
