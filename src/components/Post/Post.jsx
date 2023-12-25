import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Users } from "../../dummyData";
import { useState } from "react";

function Post({ post }) {
  const userDetail = Users.filter((user) => user.id === post.userId);

  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  function handleLikeClick() {
    setIsLiked(!isLiked);
    isLiked ? setLike(like - 1) : setLike(like + 1);
  }

  return (
    <>
      <div className="w-[100%] shadow-2xl rounded-[10px] my-[30px]">
        <div className="p-[10px]">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-[10px]">
              <img
                className="w-[32px] h-[32px] rounded-[50px] object-cover"
                src={userDetail[0].profilePicture}
                alt=""
              />
              <span className="text-[15px] font-medium">
                {" "}
                {userDetail[0].username}
              </span>
              <span className="text-[12px]">{post.date}</span>
            </div>
            <div>
              <MoreVertIcon />
            </div>
          </div>
          <div className="my-[20px] mx-0">
            <span>{post?.desc}</span>
            <img
              className="mt-[20px] w-[100%] max-h-[500px] object-contain"
              src={post.photo}
              alt=""
            />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-[2px]">
              <img
                onClick={handleLikeClick}
                className="w-[24px] h-[24px] cursor-pointer"
                src="src/assets/post/like.png"
                alt=""
              />
              <img
                onClick={handleLikeClick}
                className="w-[24px] h-[24px] cursor-pointer"
                src="src/assets/post/heart.png"
                alt=""
              />

              <span className="text-[15px]">{like}</span>
            </div>
            <div>
              <span className="text-[15px] cursor-pointer border-b-[1px] border-dashed border-gray-500">
                {post.comment} comments
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
