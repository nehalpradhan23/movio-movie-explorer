import React from "react";
import { useSelector } from "react-redux";

import "./style.scss";

const Genres = ({ data }) => {
  const { genres } = useSelector((state) => state.home); // get genres id from store
  return (
    <div className="genres">
      {data?.map((g) => {
        if (!genres[g]?.name) return;
        return (
          <div key={g} className="genre">
            {/* match movie genre id with genres id and display */}
            {genres[g]?.name}
          </div>
        );
      })}
    </div>
  );
};

export default Genres;
