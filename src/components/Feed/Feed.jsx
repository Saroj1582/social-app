import { Posts, Users } from "../../dummyData";
import Post from "../Post/Post";
import Share from "../Share/Share";

function Feed() {
  return (
    <>
      <div className="flex-[5.5]">
        <Share />
        {Posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}

export default Feed;
