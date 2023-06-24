import { useStateContext } from "@/HBOProvider";
import { v4 } from "uuid";
import Link from "next/link";


export default function Account() {
const globalState = useStateContext()
const {accountOpen, setAccountOpen, watchlist, removeFromList} = globalState


function showWatchList(){
  if (watchlist != null){
    return watchlist.map((video, index) => {
      console.log(video)
    return(
      
      <div className="account__watch-watch-video relative w-[220px] h-[220px] mr-[20px] rounded-[6px] overflow-hidden">
      <img src={video.img} className="w-[220px] h-[220px] rounded-[6px] " />
      <div className = "account__watch-overlay absolute top-0 left-0 bg-[linear-gradient(328deg,rgba(94,158,255,1)0%,rgba(119,30,135,1)100%,rgba(60,38,135,1)100%,rgba(60,38,184,1)100%,rgba(0,0,0,1)100%)] w-full h-full transition-opacity duration-[.4s] ease-in-out flex justify-center items-center opacity-0 hover:opacity-90">
          <div className = "account__watch-buttons flex gap-[15px] ">
            <Link href = {`/${video.genre? video.genre : 'movie'}/${video.id}`}>
              <div className = "account__watch-circle cursor-pointer w-[50px] h-[50px] rounded-[50%] border-white border-[3px] flex justify-center items-center " onClick = {() => setAccountOpen(false)}>
                  <i className = "fas fa-play"/>
              </div>
              </Link>
              <div className = "account__watch-circle cursor-pointer w-[50px] h-[50px] rounded-[50%] border-white border-[3px] flex justify-center items-center "  onClick={() => removeFromList(video.id)}>
                  <i className = "fas fa-times"/>
              </div>
          </div>
      </div>
    </div>
    )
    })
  }

}

  return (
    // account--active
    <div className={`account absolute ${accountOpen ? "account--active" : ''} top-0 right-0 h-[calc(100vh-60px)] mt-[60px] bg-[rgba(0,0,0,0.3)] flex backdrop-blur-[70px] translate-x-[100%] transition duration-400 ease-in-out overflow-scroll`}>
      <div className="account__details  p-[20px]">
        <div className="account__title  text-5xl mb-8">My List</div>
        <div className="account__watch-list  overflow-scroll  grid grid-cols-3 lg:gap-x-[0px] gap-y-[20px] min-w-[550px] sm:gap-x-[40px] ">
       

        {showWatchList()}
      
        </div>
      </div>

      <div className = "account__menu min-w-[250px]  bg-black w-[300px] h-[100vh] p-[20px]">

        <ul className = "account__main">
            <li>
                <a className="active" href="/">My List</a>
            </li>
        </ul>

        
        <div className = "side-nav__divider  w-full bg-[rgb(80,80,80)] h-[2px] my-[20px]"/>

        <ul className = "account__main">
            <li>
                <a className="" href="/login">Account</a>
            </li>
            <li>
                <a className="" href="/create">Sign Out</a>
            </li>
        </ul>

      </div>
    </div>
  );
}
