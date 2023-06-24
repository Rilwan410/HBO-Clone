import { useStateContext } from "@/HBOProvider";
import { useRouter } from "next/router";

export default function FeaturedMedia({
  type,
  title,
  dataID,
  featuredID,
  genre,
  location,
  mediaURL,
  linkURL,
  mediaID,
}) {
  const globalState = useStateContext();
  const { addToList, watchlist, setAccountOpen,accountOpen, setSideNav } = globalState;
  const router = useRouter();

  // console.log(mediaID)

  function clickedAdd() {
    if (type === "genre") addToList({ id: dataID, genre, img: mediaURL });
    if (type === "single") addToList({ id: mediaID, img: mediaURL, genre });
    // console.log(watchlist);
  }

  function clickedPlay() {
    if (type === "front") {
      router.push("/movie/460465");
    } else {
      router.push(linkURL);
    }
  }

  function hideButtons() {
    if (type === "front") {
      return (
        <div className="feaured-media__buttons flex items-center mb-20">
          <div
            className="featured-media__play-btn bg-white text-black w-[50px] flex h-[50px] rounded-[50%] justify-center items-center mr-[20px] transition-[background] duration-300 ease-in-out hover:bg-[linear-gradient(328deg,rgba(94,158,255,1)0%,rgba(119,30,135,1)100%,rgba(60,38,255,1)0%,rgba(0,0,0,1)100%)] hover:text-white hover:cursor-pointer"
            onClick={clickedPlay}
          >
            <i className="fas fa-play" />
          </div>
          <div
            className="featured-media__info-btn bg-[gray] text-[.8rem] text-white font-bold w-[100px] h-[40px] flex justify-center items-center rounded-[20px] cursor-pointer"
            onClick={clickedPlay}
          >
            MORE INFO
          </div>
        </div>
      );
    } else if (type === "genre") {
      return (
        <div className="feaured-media__buttons flex items-center mb-10 gap-[20px]">
          <div
            className="featured-media__info-btn bg-[rgba(0,0,0,0.8)] hover:bg-[rgba(0,0,0,0.6)]  duration-[.3s] transition text-[.8rem] text-white font-bold w-[100px]  h-[40px] flex justify-center items-center rounded-[20px] cursor-pointer"
            onClick={clickedPlay}
          >
            MORE INFO
          </div>
          <div
            className="featured-media__play-btn bg-white text-black w-[50px] flex h-[50px] rounded-[50%] justify-center items-center mr-[20px] transition-[background] duration-300 ease-in-out hover:bg-[linear-gradient(328deg,rgba(94,158,255,1)0%,rgba(119,30,135,1)100%,rgba(60,38,255,1)0%,rgba(0,0,0,1)100%)] hover:text-white hover:cursor-pointer"
            onClick={clickedAdd}
          >
            <i className="fas fa-add" />
          </div>
        </div>
      );
    } else if (type === "single") {
      return (
        <div className="feaured-media__buttons flex items-center mb-10 gap-[20px]">
          <div
            className="featured-media__play-btn bg-white text-black w-[50px] flex h-[50px] rounded-[50%] justify-center items-center mr-[20px] transition-[background] duration-[.5s] ease-in-out hover:bg-[linear-gradient(328deg,rgba(94,158,255,1)0%,rgba(119,30,135,1)100%,rgba(60,38,255,1)0%,rgba(0,0,0,1)100%)] hover:text-white hover:cursor-pointer"
            onClick={clickedAdd}
          >
            <i className="fas fa-add" />
          </div>
        </div>
      );
    } else return;
  }

  function showMedia() {
    if (type === "front") {
      return (
        <iframe
          className="featured-media__video w-full h-full absolute z-1 scale-[2]"
          src={mediaURL}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      );
    } else if (type === "single" || type === "genre") {
      return (
        <img src={mediaURL} className=" absolute opacity-95 w-full h-full  " />
      );
    }
  }
  return (
    <>
      <div
        className={`featured-media bg-black w-full ${
          type === "front"
            ? "h-screen"
            : type === "genre"
            ? "min-h-[550px] mb-[40px]"
            : type === "single"
            ? "min-h-[700px]"
            : ""
        } relative overflow-hidden`}
      >
        {/* Media Player */}
        {showMedia()}

        {/* Featured Media Description */}
        <div
          className="featured-media__bg bg-[linear-gradient(180deg,rgba(94,158,255,0)60%,rgba(68,61,156,.8)100%)] absolute w-full h-full z-2 flex px-[50px] items-end transition-opacity duration-500 opacity-0 ease-in-out hover:opacity-100"
          // onClick={() =>  setAccountOpen(false) } 
        >
          <div className={`featured-media__container `}>
            <div
              className={`featured-media__title ${
                type === "genre" ? "text-[5rem]" : "text-[7rem]"
              } font-bold text-white mb-4 ${
                type === "single" ? "" : "cursor-pointer"
              }`}
              // onClick={`${ type === "single" ? '' : () => clickedPlay}`}
              onClick = {() =>  setAccountOpen(false)}
            >
              {title}
            </div>
            <div
              className={`featured-media__playing  ${
                type === "genre" ? "text-[1rem]" : "text-[1.2rem]"
              } font-bold text-white mb-[.5rem]`}
              onClick = {() =>  setAccountOpen(false)}
            >
              NOW PLAYING
            </div>
            <div
              className={`featured-media__location ${
                type === "genre" ? "text-[1rem]" : "text-[1.2rem]"
              } font-light text-white mb-8`}
              onClick = {() =>  setAccountOpen(false)}
            >
              {location}
            </div>

            {/* Featured Media Buttons */}
            {hideButtons()}
          </div>
        </div>
      </div>
    </>
  );
}
