import record from "../assets/facetime-button.png";
import play from "../assets/play-button.png";
import pause from "../assets/pause-button.png";
import stop from "../assets/stop-button.png";
import back from "../assets/left-arrow.png"
import { Link } from "react-router-dom";
import "../Components/RecordingCSS.css";

function RecordingPage() {
  return (
    <div>
      <div className="back-btn-container">
        <Link to="/">
          <img id="back-btn-img" src={back} alt="" />
        </Link>
      </div>
      <div className="recording-container">
        <div className="recording-box">This is the recording page!!</div>
      </div>
      <div className="controls-container">
        <div className="controls ">
          <button className="btn" id="recordBtn">
            <img className="btnImage" src={record} alt="" />
          </button>
        </div>
        <div className="controls">
          <button id="playBtn" className="btn">
            <img className="btnImage" src={play} alt="" />
          </button>
        </div>
        <div className="controls">
          <button id="pauseBtn" className="btn">
            <img className="btnImage" src={pause} alt="" />
          </button>
        </div>
        <div className="controls">
          <button id="stopBtn" className="btn">
            <img className="btnImage" src={stop} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecordingPage;
