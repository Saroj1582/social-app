import { Users } from "../../dummyData";
import Online from "../Online/Online";

function Rightbar({ profile }) {
  function HomeRightSidebar() {
    return (
      <>
        <div className="p-[20px]">
          <div className="flex gap-[10px]">
            <img
              className="w-[40px] h-[40px]"
              src="src/assets/post/gift.png"
              alt=""
            />
            <span className="text-[15px] font-light">
              <b>Amit Kumar</b> and <b>3 other friends </b>have birthdays today
            </span>
          </div>
          <img
            className="my-[10px] rounded w-[100%]"
            src="src/assets/post/ad.png"
            alt=""
          />
          <h4 className="mb-[20px] font-medium">Online Friends</h4>
          <ul className="m-0 p-0">
            {Users.map((user) => (
              <Online key={user.id} user={user} />
            ))}
          </ul>
        </div>
      </>
    );
  }

  function ProfileRightSidebar() {
    return (
      <>
        <div className="p-[20px]">
          <h4 className="text-[18px] font-medium mb-[10px]">User Infomation</h4>
          <div className="mb-[30px]">
            <div>
              <span className="mr-[15px] text-[#555] font-medium">City:</span>
              <span className="font-[300]">Ranchi</span>
            </div>
            <div>
              <span className="mr-[15px] text-[#555] font-medium">From:</span>
              <span className="font-[300]">Jharkhand</span>
            </div>
            <div>
              <span className="mr-[15px] text-[#555] font-medium">
                Relationship:
              </span>
              <span className="font-[300]">Single</span>
            </div>
          </div>
          <h4 className="text-[18px] font-medium mb-[10px]">User Friends</h4>
          <div className="flex flex-wrap justify-between">
            <div className="flex flex-col mb-5 cursor-pointer">
              <img
                className="w-[100px] h-[100px] object-cover rounded-[5px]"
                src="src/assets/person/1.jpeg"
                alt=""
              />
              <span>Mike Hussey</span>
            </div>
            <div className="flex flex-col mb-5 cursor-pointer">
              <img
                className="w-[100px] h-[100px] object-cover rounded-[5px]"
                src="src/assets/person/1.jpeg"
                alt=""
              />
              <span>Mike Hussey</span>
            </div>
            <div className="flex flex-col mb-5 cursor-pointer">
              <img
                className="w-[100px] h-[100px] object-cover rounded-[5px]"
                src="src/assets/person/1.jpeg"
                alt=""
              />
              <span>Mike Hussey</span>
            </div>
            <div className="flex flex-col mb-5 cursor-pointer">
              <img
                className="w-[100px] h-[100px] object-cover rounded-[5px]"
                src="src/assets/person/1.jpeg"
                alt=""
              />
              <span>Mike Hussey</span>
            </div>
            <div className="flex flex-col mb-5 cursor-pointer">
              <img
                className="w-[100px] h-[100px] object-cover rounded-[5px]"
                src="src/assets/person/1.jpeg"
                alt=""
              />
              <span>Mike Hussey</span>
            </div>
            <div className="flex flex-col mb-5 cursor-pointer">
              <img
                className="w-[100px] h-[100px] object-cover rounded-[5px]"
                src="src/assets/person/1.jpeg"
                alt=""
              />
              <span>Mike Hussey</span>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="flex-[3.5]">
        {profile ? <ProfileRightSidebar /> : <HomeRightSidebar />}
      </div>
    </>
  );
}

export default Rightbar;
