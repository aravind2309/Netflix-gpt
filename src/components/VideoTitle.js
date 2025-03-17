const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-full aspect-video pt-[20%] px-24 absolute bg-gradient-to-r from-black text-white">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>

      <div className="flex">
        <div>
          <button className="bg-white text-black text-xl p-4 px-12  rounded-lg flex items-center justify-center gap-1 hover:bg-opacity-80">
            <img
              className="w-6 h-6"
              src="https://www.pngall.com/wp-content/uploads/5/Black-Play-Button-PNG-Free-Download.png"
              alt="play-icon"
            />
            Play
          </button>
        </div>
        <button className="bg-gray-500  mx-2 text-white text-xl p-4 px-12 bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
