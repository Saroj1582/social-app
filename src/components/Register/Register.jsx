function Register() {
  return (
    <>
      <div className="flex items-center justify-center h-[100vh] w-[100vw] bg-slate-100">
        <div className="flex w-[70%] h-[70%]">
          <div className="flex-1 flex flex-col justify-center">
            <span className="text-[50px] font-extrabold text-[#1775ee] mb-[10px]">
              Social App
            </span>
            <span className="text-[24px]">
              Connect with friends and the world around you on Social App
            </span>
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <div className="h-[400px] p-5 bg-white rounded-xl flex flex-col justify-between">
              <input
                className="h-[50px] rounded-[10px] border border-solid border-gray-400 text-[18px] pl-[20px] outline-none"
                type="text"
                placeholder="Name"
              />
              <input
                className="h-[50px] rounded-[10px] border border-solid border-gray-400 text-[18px] pl-[20px] outline-none"
                type="text"
                placeholder="Email"
              />
              <input
                className="h-[50px] rounded-[10px] border border-solid border-gray-400 text-[18px] pl-[20px] outline-none"
                type="text"
                placeholder="Password"
              />
              <input
                className="h-[50px] rounded-[10px] border border-solid border-gray-400 text-[18px] pl-[20px] outline-none"
                type="text"
                placeholder="Confirm Password"
              />
              <button className="h-[50px] rounded-[10px] bg-[#1775ee] text-white text-[20px] font-medium">
                Register
              </button>

              <button className="h-[50px] w-[60%] self-center rounded-[10px] bg-[#42b72a] text-white text-[20px] font-medium">
                Log In Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
