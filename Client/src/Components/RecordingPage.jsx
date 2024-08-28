// import record from "../assets/facetime-button.png";
// import play from "../assets/play-button.png";
// import pause from "../assets/pause-button.png";
// import stop from "../assets/stop-button.png";
// import back from "../assets/left-arrow.png"
// import { Link } from "react-router-dom";
import { useRef } from "react";
import "../Components/RecordingCSS.css";
import { ReactMediaRecorder } from "react-media-recorder";

function RecordingPage() {
  const stream = useRef();
  function rec() {
    stream.current.style.display = "block";

    window.navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((strem) => {
        stream.current.srcObject = strem;
      });
  }
  function scre() {
    navigator.mediaDevices.getDisplayMedia({ video: true }).then((strm) => {
      stream.current.srcObject = strm;
    });
  }
  function stop() {
    window.navigator.mediaDevices
      .getUserMedia({ video: false, audio: false })
      .then((strem) => {
        stream.current.srcObject = strem;
      });
    stream.current.style.display = "none";
  }
  return (
    <div>
      <ReactMediaRecorder
        video
        audio
        screen
        render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
          <div>
            <p>{status}</p>
            <button
              onClick={() => {
                rec();
                startRecording();
              }}
            >
              Start Recording
            </button>
            <button
              onClick={() => {
                stopRecording();
                stop();
              }}
            >
              Stop Recording
            </button>
            <button onClick={scre}>Share Screen</button>
            <video src={mediaBlobUrl} controls autoPlay playsInline />
          </div>
        )}
      />
      <video autoPlay ref={stream} width="50%"/>
      {/* <div className="back-btn-container">
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
      </div> */}
    </div>
  );
}

export default RecordingPage;
