import { useStateContext } from "@/HBOProvider";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function SearchModal() {
  const globalState = useStateContext();
  const { searchModal, setSearchModal } = globalState;
  const [popular, setPopular] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [text, setText] = useState("");

  // POPULAR DATA //
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?primary_release_year=2023&api_key=1418807822dc08d848a20722bb586c6f&language=en-US`
      )
      .then((data) => {
        // console.log(data.data.results)
        setPopular(data.data.results.slice(0, 15));
        setShowResults(false);
        // console.log('popdata', data.data.results)
      })
      .catch((error) => {
        console.log("ERROR:", error);
      });
  }, []);

  function handleInput(e) {
    new Promise((res, rej) => {
      res(setText(e.target.value));
      rej("ERROR : CANNOT HANDLE REQUEST");
    })
      .then(() => {
        return axios.get(
          `https://api.themoviedb.org/3/search/multi?query=${e.target.value}&api_key=1418807822dc08d848a20722bb586c6f&language=en-US`
        );
      })
      .then((data) => {
        console.log(data.data.results);
        setSearchData(
          data.data.results.filter((item, index) => {
            return item.media_type === "tv" || item.media_type === "movie";
          })
        );
        setShowResults(true);
      });
  }

  function closeSearchModal() {
    setSearchModal(false);
    setText("");
  }


  return (
    // search-modal__active
    <div
      className={`search-modal ${
        searchModal ? "search-modal__active" : ""
      }  items-center invisible flex  z-13 fixed bg-black h-screen w-full top-0 left-0  py-[20px] `}
    >
      <div className="search-modal__input-group flex justify-center items-center mb-[3rem] ">
        <input
          type="text"
          placeholder="Search For A Title"
          onChange={handleInput}
          value={text}
          className="search-modal__input bg-transparent text-[4rem] border-b-[2px] outline-none border-b-[rgb(132,0,255)]"
        />

        <div className="search-modal__close-btn ">
          <i
            className="fas fa-times absolute  top-6 right-0 text-[3rem] p-[15px] cursor-pointer"
            onClick={closeSearchModal}
          />
        </div>
      </div>

      <h3 className="  text-4xl  search-modal__title text-[2rem] mb-[1.5rem]">
        {`${showResults && searchData.length >= 1 ? "" : "Popular Searches"}`}
      </h3>

      <div className="search-modal__thumbnails   flex flow-wrap justify-center gap-[15px] h-full w-full overflow-y-scroll">
        {showResults && searchData.length >= 1 ? (
          <SearchResults
            searchData={searchData}
            closeModal={closeSearchModal}
          />
        ) : (
          <PopularResult
            popular={popular}
            closeModal={closeSearchModal}
          />
        )}
      </div>
    </div>
  );
}

function PopularResult({ popular, closeModal }) {
  return popular.map((item, index) => {
    console.log(item);
    // // console.log(item.media_type)
    // console.log(item.id)
    // console.log(item.poster_path)
    // https://image.tmdb.org/t/p/
    return (
      <Link href={`/${item.media_type}/${item.id}`} key={index}>
        <div className="search-modal__thumbnail opacity-0 flex-none w-[240px] h-[360px] relative">
          <img
            src={`https://image.tmdb.org/t/p/w185${item.poster_path}`}
            className="object-cover object-center w-[240px] h-[360px]"
          />
          <div className="search-modal__top-player bg-[linear-gradient(328deg,rgba(94,158,255,1)0%,rgba(119,30,135,1)100%,rgba(60,38,135,1)100%,rgba(60,38,184,1)100%,rgba(0,0,0,1)100%)] h-full w-full absolute top-0 left-0 z-2 flex justify-center items-center opacity-0 transition-opacity duration-400 ease-in-out hover:opacity-90 hover:cursor-pointer ">
            <i className="fas fa-play text-[4rem] translate-y-[100px] duration-300 ease-in-out delay-[.2s] opacity-0" />
          </div>
        </div>
      </Link>
    );
  });
}

function SearchResults({ searchData, closeModal, clearSearch }) {
  return searchData.map((item, index) => {
    // console.log(item)
    // console.log(item.media_type)
    // console.log(item.id)
    return (
      <Link
        href={`/${item.media_type}/${item.id}`}
        key={index}
        onClick={closeModal}
      >
        <div className="search-modal__thumbnail opacity-0 flex-none w-[240px] h-[360px] relative">
          <img
            src={`https://image.tmdb.org/t/p/w185${item.poster_path}`}
            className="object-cover object-center w-[240px] h-[360px]"
          />
          <div className="search-modal__top-player bg-[linear-gradient(328deg,rgba(94,158,255,1)0%,rgba(119,30,135,1)100%,rgba(60,38,135,1)100%,rgba(60,38,184,1)100%,rgba(0,0,0,1)100%)] h-full w-full absolute top-0 left-0 z-2 flex justify-center items-center opacity-0 transition-opacity duration-400 ease-in-out hover:opacity-90 hover:cursor-pointer ">
            <i className="fas fa-play text-[4rem] translate-y-[100px] duration-300 ease-in-out delay-[.2s] opacity-0" />
          </div>
        </div>
      </Link>
    );
  });
}
