import React from "react";

const Contact = () => {
  return (
    <div className="mt-[96px] flex flex-col items-center gap-14 py-14">
      <h1 className="text-center text-6xl md:text-7xl font-extrabold">Contact us</h1>
      <div className="grid grid-cols-2 grid-rows-2 gap-4 w-11/12 md:w-[500px] h-[400px] md:h-[500px]">
        <button className="flex flex-col justify-center items-center gap-4 bg-orange-200 hover:bg-orange-300 hover:rounded-full rounded-lg">
          <div className="font-bold">By Gmail</div>
          <img
            src="https://static.vecteezy.com/system/resources/previews/016/716/465/original/gmail-icon-free-png.png"
            alt=""
            className="w-3/5"
          />
        </button>
        <button className="flex flex-col justify-center items-center gap-4 bg-orange-200 hover:bg-orange-300 hover:rounded-full rounded-lg">
          <div className="font-bold">By Github</div>
          <img
            src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png"
            alt=""
            className="w-3/5"
          />
        </button>
        <button className="flex flex-col justify-center items-center gap-4 bg-orange-200 hover:bg-orange-300 hover:rounded-full rounded-lg">
          <div className="font-bold">By Linkedin</div>
          <img
            src="https://static-00.iconduck.com/assets.00/linkedin-icon-1024x1024-net2o24e.png"
            alt=""
            className="w-3/5"
          />
        </button>
        <button className="flex flex-col justify-center items-center gap-4 bg-orange-200 hover:bg-orange-300 hover:rounded-full rounded-lg">
          <div className="font-bold">By Twitter</div>
          <img
            src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png"
            alt=""
            className="w-3/5"
          />
        </button>
      </div>
    </div>
  );
};

export default Contact;
