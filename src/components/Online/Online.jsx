function Online({ user }) {
  return (
    <>
      <li className="flex items-center mb-[15px]">
        <div className="relative mr-[10px]">
          <img
            className="w-[40px] h-[40px] rounded-[50%] object-cover"
            src={user.profilePicture}
            alt=""
          />
          <span className="w-[12px] h-[12px] rounded-[50%] bg-green-500 absolute top-0 right-0 border-2"></span>
        </div>
        <span className="font-medium">{user.username}</span>
      </li>
    </>
  );
}

export default Online;
