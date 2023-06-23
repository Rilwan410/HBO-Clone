import Link from "next/link";
import { useRouter } from "next/router";
import { gsap } from "gsap";
import { useState } from "react";

export default function GenreNav({
  genresData,
  featuredData,
  mediaType,
  genre_id,
}) {
  const [active, setActive] = useState(false);
  const router = useRouter();

  function findGenre(e) {
e.target.closest('.genre-nav').childNodes.forEach(each => {
  each.classList.value = ''
})

// console.log(e.target.parentNode)
    e.target.parentNode.classList.value = "current";
  }

  setTimeout(() => {
    setActive(true);
  }, 50);

  return (
    <ul
      className={`genre-nav  ${
        active ? "active" : ""
      } flex mt-[120px] mb-[50px]  gap-[10px] px-[25px] justify-center flex-wrap`}
    >
      {genresData.genres.map((genres, index) => {
        let id = genres.id;
        return (
          <li key={genres.id} onClick={findGenre}>
            <Link
              className="hi"
              
              href={`/${mediaType}/genre/${id}`}
              // className={`${router.pathname === "/" ? "active" : ""} `}
            >
              {genres.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
