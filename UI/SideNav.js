import { useStateContext } from "@/HBOProvider";
import Link from "next/link";
import { useRouter } from "next/router";

export default function SideNav() {
  const router = useRouter();
  const globalState = useStateContext();
  const { setSideNav, sideNav } = globalState;

  let {genre_id:id} = router.query


  function closeSideNav() {
    setSideNav(false);
  }
  return (
    <div
      className={`side-nav ${
        sideNav ? "side-nav__active" : ""
      } w-[350px]   fixed top-0 left-0 bg-black min-h-screen p-[50px] z-[11] translate-x-[-350px] transition duration-400 ease-in-out `}
    >
      <div
        className="side-nav__close-btn h-[50px] absolute  left-[290px] top-0 w-[50px] text-2xl flex items-center justify-center cursor-pointer"
        onClick={closeSideNav}
      >
        <i className="fas fa-times" />
      </div>
      <div className="h-full absolute overflow-scroll">
        <ul className="side-nav__main">
          <li className="" onClick={closeSideNav}>
            <Link
              href="/"
              className={`${router.pathname === "/" ? "active" : ""}`}
            >
              Home
            </Link>
          </li>
          <li  onClick={closeSideNav}>
            <Link
              href="/tv"
              className={`${
                router.asPath.slice(0, 3) === "/tv" ? "active" : ""
              }`}
            >
              Series
            </Link>
          </li>
          <li  onClick={closeSideNav}>
            <Link
              href="/movie"
              className={`${
                router.asPath.slice(0, 6) === "/movie" ? "active" : ""
              }`}

            >
              Movies
            </Link>
          </li>
         
        </ul>

        <div className="side-nave__divider w-full bg-[rgb(80,80,80)] h-[2px] my-[20px]" />

        <ul className="side-nav__main w-[250px]">
          <li className="">
            <a href="/movie/genre/28" className={`${id == 28 ? "active" :''}`}>Action</a>
          </li>
          <li className="">
            <a href={`/movie/genre/16`}className={`${id == 16 ? "active" :''}`}>Animation</a>
          </li>
          <li className="">
            <a href="/movie/genre/35"className={`${id == 35 ? "active" :''}`}>Comedy</a>
          </li>
          <li className="">
            <a href="/movie/genre/80"className={`${id == 80 ? "active" :''}`}>Crime</a>
          </li>
          <li className="">
            <a href="/movie/genre/99" className={`${id == 99 ? "active" :''}`}>Documentaries</a>
          </li>
          <li className="">
            <a href="/movie/genre/18" className={`${id == 18 ? "active" :''}`}>Drama</a>
          </li>
          <li className="">
            <a href="/movie/genre/14" className={`${id == 14 ? "active" :''}`}>Fantasy</a>
          </li>
          <li className="">
            <a href="/movie/genre/27" className={`${id == 27 ? "active" :''}`}>Horror</a>
          </li>
          <li className="">
            <a href="/tv/genre/10766" className={`${id == 10766 ? "active" :''}`}>International</a>
          </li>
          <li className="">
            <a href="/movie/genre/10751" className={`${id == 10751 ? "active" :''}`}>Kids & Family</a>
          </li>
      
          <li className="">
            <a href="/movie/genre/10402" className={`${id == 10402 ? "active" :''}`}>Music</a>
          </li>
          <li className="">
            <a href="/tv/genre/10763"className={`${id == 10763 ? "active" :''}`}>News/Talk</a>
          </li>
          <li className="">
            <a href="/tv/genre/10764" className={`${id == 10764 ? "active" :''}`}>Reality</a>
          </li>
          <li >
            <a href="/movie/genre/10749" className={`${id == 10749 ? "active" :''}`}>Romance</a>
          </li>
  
          <li className="">
            <a href="/movie/genre/9648" className={`${id == 9648 ? "active" :''}`} >Suspence</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
