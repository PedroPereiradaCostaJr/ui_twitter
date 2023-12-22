import { ArrowsClockwise, ChatCircle, Heart } from "phosphor-react";
import { Link } from "react-router-dom";
import "./Tweet.css";

interface TweetProps {
  contend: string;
}

export function Tweet(props: TweetProps) {
  return (
    <Link to="/status" className="tweet">
      <img
        src="https://github.com/PedroPereiradaCostaJr.png"
        alt="Pedro Pereira"
      />
      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Pedro Pereira</strong>
          <span>@pedroju90563801</span>
        </div>
        <p>{props.contend}</p>
        <div className="tweet-content-footer">
          <button type="button">
            <ChatCircle />
            20
          </button>
          <button type="button">
            <ArrowsClockwise />
            20
          </button>
          <button type="button">
            <Heart />
            20
          </button>
        </div>
      </div>
    </Link>
  );
}
