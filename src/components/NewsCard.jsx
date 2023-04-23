import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-hot-toast";

//my modules
import "../css/news-card.css";
import placeholderImage from "../assets/images/newsx-placeholder.png";
import {
  generateAxiosConfigHeader,
  generateLikeURL,
} from "../utilities/UtilityFunctions";

const axios = require("axios").default;

function NewsCard(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLiked, setIsLiked] = useState(props.newsItem.isLiked);
  const [likes, setLikes] = useState(props.newsItem.likes);

  function toggleIsExpanded() {
    setIsExpanded((isExpanded) => !isExpanded);
  }

  if (!props.newsItem.urlToImage) {
    props.newsItem.urlToImage = placeholderImage;
  }

  const handleLikeClick = async () => {
    setIsLiked((prevIsLiked) => {
      return !prevIsLiked;
    });

    try {
      const response = await axios.post(
        generateLikeURL(props.newsItem.url),
        null,
        generateAxiosConfigHeader(localStorage.getItem("token"))
      );
      // console.log(response.data);

      setLikes(response.data.likes);

      toast.success(response.data.statusText);
    } catch (error) {
      console.log(error.response.data.statusText);
      toast.error(error.response.data.statusText);

      // recover previous state
      setIsLiked((prevIsLiked) => {
        return !prevIsLiked;
      });
    }
  };

  return (
    <div className="news-card-div">
      <div>
        <img
          className="news-card-img"
          src={props.newsItem.urlToImage}
          alt={props.newsItem.title}
        />

        <div onClick={toggleIsExpanded}>
          <p className="common-text news-card-title">{props.newsItem.title}</p>

          {!isExpanded ? (
            <p className="common-text news-card-desc">
              {props.newsItem.description}
            </p>
          ) : (
            <p className="common-text news-card-desc">
              {props.newsItem.content}
            </p>
          )}
        </div>

        {/* {!isExpanded ? null : (
          <a href={props.newsItem.url}>
            <button className="news-card-btn">Visit source</button>
          </a>
        )} */}

        {isExpanded ? (
          <div className="news-card-btn">
            {likes}{" "}
            <span
              onClick={handleLikeClick}
              style={{
                marginRight: "10px",
                color: isLiked ? "black" : "var(--light)",
                cursor: "pointer",
              }}
            >
              <FontAwesomeIcon icon={faHeart} />
            </span>{" "}
            <span style={{ marginLeft: "10px", cursor: "pointer" }}>
              Visit source
            </span>
          </div>
        ) : (
          <div className="news-card-btn">
            {likes}{" "}
            <span
              onClick={handleLikeClick}
              style={{
                marginRight: "10px",
                color: isLiked ? "black" : "var(--light)",
                cursor: "pointer",
              }}
            >
              <FontAwesomeIcon icon={faHeart} />
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default NewsCard;
