import Login from "@/components/Login";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import MainLayout from "@/components/mainLayout";
import FeaturedMedia from "@/UI/FeaturedMedia";
import AuthCheck from "@/components/AuthCheck";
import MediaRow from "@/UI/MediaRow";
import GenreNav from "@/UI/GenreNav";
// import LazyLoad from "react-lazyload";
import Placeholder from "@/UI/Placeholder";
import axios from "axios";
import { useStateContext } from "@/HBOProvider";
import shuffleArray from "@/components/utilities";

export default function Home({ genresData, featuredData, context }) {
  const router = useRouter();
  const { mediaType } = context;

  const globalState = useStateContext();
  const { thumbnailSizes } = globalState;


  function showRandomMedia() {
    let thumbnailSize;
    return genresData.genres.map((genre) => {
      thumbnailSize =
        thumbnailSizes[Math.floor(Math.random() * thumbnailSizes.length)];
      return (
        <MediaRow
          category={mediaType}
          title={genre.name}
          linkURL={`movie/id`}
          size={thumbnailSize}
          endpoint={`discover/${mediaType}?with_genres=${genre.id}&primary_release_year=2023&api_key=1418807822dc08d848a20722bb586c6f&language=en-US%22`}
        />
      );
    });
  }

  // console.log(featuredData);
  // console.log(genresData);
  // console.log(mediaType);

  return AuthCheck(
    <MainLayout>
       <GenreNav
        mediaType={mediaType}
        genresData={genresData}
        featuredData={featuredData}
      />
      <FeaturedMedia
      
        genre={mediaType}
        dataID = {featuredData.id}
        type={"genre"}
        linkURL={`${mediaType}/${featuredData.id}`}
        mediaURL={`https://image.tmdb.org/t/p/original/${featuredData.backdrop_path}`}
        title={`${mediaType === "tv" ? featuredData.name : featuredData.title}`}
        location={featuredData.overview}
      />
     
      {showRandomMedia()}
    </MainLayout>
  );
}

export async function getServerSideProps(context) {
  // Fetch data from external API
  let genresData;
  let featuredData;
  try {
    genresData = await axios.get(
      `https://api.themoviedb.org/3/genre/${context.query.mediaType}/list?api_key=1418807822dc08d848a20722bb586c6f&language=en-US%22`
    );

    featuredData = await axios.get(
      `https://api.themoviedb.org/3/discover/${context.query.mediaType}?primary_release_year=2023&api_key=1418807822dc08d848a20722bb586c6f&language=en-US%22`
    );

    console.log("success", genresData.data);
    console.log("success", featuredData.data);
  } catch (error) {
    console.log("error:", error);
  }

  return {
    props: {
      context: context.query,
      genresData: genresData.data,
      featuredData: shuffleArray(featuredData.data.results)[0],
    },
  };
}
