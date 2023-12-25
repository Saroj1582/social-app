function Friend({ user }) {
  return (
    <>
      <li className="flex items-center gap-2.5">
        <img
          className="w-[32px] h-[32px] rounded-[50%] object-cover"
          src={user.profilePicture}
          alt=""
        />
        <span>{user.username}</span>
      </li>
    </>
  );
}

export default Friend;
