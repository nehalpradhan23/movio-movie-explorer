import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./style.scss";

import useFetch from "../../../hooks/useFetch";

import Img from "../../../components/lazyLoadImage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

const HeroBanner = () => {
  const [background, setBackground] = useState(""); // background image
  const [query, setQuery] = useState(""); // store search input
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home); // get data from store for first part of url

  // get upcoming movies data
  const { data, loading } = useFetch("/movie/upcoming");

  // for setting background
  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  // function to get input from search bar
  const searchQueryHandler = (e) => {
    if (e.key == "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };
  const searchQueryHandlerClick = () => {
    if (query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className="heroBanner">
      {/* show bg image only when not loading */}
      {!loading && (
        <div className="backdrop-img">
          {/* display image using lazy loading */}
          <Img src={background} />
        </div>
      )}
      {/* blur bg image bottom */}
      <div className="opacity-layer"></div>

      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome</span>
          <span className="subTitle">Explore all the movies and tv shows</span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for a movie or TV show"
              onKeyUp={searchQueryHandler}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              disabled={query.length === 0}
              onClick={searchQueryHandlerClick}
            >
              Search
            </button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
