import React from "react";

const About = () => {
  return (
    <div className="mt-[96px] flex flex-col items-center gap-14 md:gap-20 py-6 md:py-14 px-4 md:px-0">
      <div className="md:w-2/5 flex flex-col gap-5">
        <h1 className="font-bold text-5xl text-center ">
          Welcome to the top movie database
        </h1>
        <img src="https://m.media-amazon.com/images/I/71OadBU0qqL.png" alt="" />
        <h3 className="text-center text-3xl font-semibold">
          The international database where you can find the top rated, most
          popular and now playing movies
        </h3>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-14 md:gap-9">
        <div className="flex flex-col gap-9 md:w-1/3">
          <img
            src="https://www.joomshaper.com/images/2023/05/09/moviedb-banner.jpeg"
            alt=""
            className="md:h-[300px]"
          />
          <p className="text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            ducimus, possimus maxime exercitationem voluptates rerum et, neque
            quasi, fuga deleniti explicabo quibusdam! Dolorum quidem facere quia
            repellat et fuga placeat dignissimos temporibus voluptatibus sint.
          </p>
        </div>

        <div className="flex flex-col md:flex-col-reverse gap-9 md:w-1/3">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgmVKfzy9FeaH5aW4vTDqPMQKJCn0cislS8w&usqp=CAU"
            alt=""
            className="md:h-[300px]"
          />
          <p className="text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            ducimus, possimus maxime exercitationem voluptates rerum et, neque
            quasi, fuga deleniti explicabo quibusdam! Dolorum quidem facere quia
            repellat et fuga placeat dignissimos temporibus voluptatibus sint.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
