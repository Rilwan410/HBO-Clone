import Link from "next/link";
import { useRouter, } from "next/router";
import { gsap } from "gsap";
import { useState } from "react";

export default function GenreNav({genresData, featuredData, mediaType}) {
const [active, setActive] = useState(false)
  const router = useRouter();
console.log(mediaType)
console.log(genresData)
console.log(featuredData)


  setTimeout(() => {
    setActive(true)
  },50)

  return (
    <ul className={`genre-nav  ${active ? "active" : ''} flex mt-[120px] mb-[50px] px-[25px] justify-center flex-wrap`}>
    { genresData.genres.map(genres => {
        return (
            <li key = {genres.id}>
            <Link href="/" className={`${router.pathname === "/" ? "active" : ""}`}>
              {genres.name}
            </Link>
          </li>
        )
    })}
    </ul>
  );
}
