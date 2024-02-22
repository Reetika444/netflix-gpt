const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="flex">
        {/* <img
          className="w-1/12  h-1/12"
          src="data:image/png;base64,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"
          alt="play-button"
        /> */}
        <button className="bg-white text-black p-4  px-16 w-10 text-xl rounded-lg hover:bg-opacity-80">
          Play
        </button>
        <button className="mx-2 bg-gray-500 text-white p-4  px-16 w-10 text-lg bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
