import { React, useState } from "react";
import "./preview.scss";
import { Link } from "react-router-dom";

export default function Preview({ film }) {
  const { img, gif, url, title, date } = film;

  const [over, setOver] = useState(false);

  let className =
    "PreviewContent fs-body text-neutral-400 ff-body fw-bold text-shadow-halation";
  if (over) {
    className += " PreviewIsHovered";
  }

  return (
    <Link to={`/films/${url}`}>
      <div
        className="PreviewContainer"
        onMouseOver={() => setOver(true)}
        onMouseOut={() => setOver(false)}
      >
        <div className={className}>
          <div className="PreviewBanner" />
          <img
            className="PreviewBgImg"
            src={over ? gif : img}
            alt={title}
          />
          <div className="PreviewTitle">{title}</div>
          <div className="PreviewDate">{date}</div>
        </div>
      </div>
    </Link>
  );
}
