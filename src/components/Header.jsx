const Header = () => {
  return (
    <>
      <div className="  flex justify-start items-center  z-10 absolute w-full ">
        <div className=" px-2 mx-2 py-2 my-2 shrink-0">
          <img
            className=" px-2 py-2 mx-2 my-2 h-40 w-40 self-auto bg-auto "
            src="https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAchJje9GUBJ_ehbO0uOApH8QmRyuvK0LQI9obzFeGtfkpfLyh4FdolMZR4PtvyNoOomDcY7BzTbhFC3gJinH0UadYBg807AKDSPyfsUDm9T3CZKn9OSZN3II7060MZESFcb6YOS9jvzh.svg"
            alt="logo" 
          />
        </div>
        <div className=" flex items-center ml-auto   ">
          <select
            name="language"
            id="lang "
            className="px-2 py-2 mx-2 my-2 text-center border-2 rounded-2xl  ml-auto bg-amber-50 "
          >
            <option value="hindi">Hindi</option>
            <option value="marathi">Marathi</option>
          </select>

          <button className="px-2 py-2 mx-2 my-2 border-2 bg-red-500 rounded-2xl ">
            Sign In
          </button>
        </div>
        
      </div>
    </>
  );
};

export default Header;
