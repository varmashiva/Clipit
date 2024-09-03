import back from "../assets/left-arrow.png";
import { Link } from "react-router-dom";
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
    <div className="recording-page">
      <div className="back-btn-container">
        <Link to="/">
          <img id="back-btn-img" src={back} alt="Back" />
        </Link>
      </div>

      <ReactMediaRecorder
        video
        audio
        screen
        render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
          <div className="media-recorder">
            <div className="controls-container">
              <button
                className="btn control-btn start-btn"
                onClick={() => {
                  rec();
                  startRecording();
                }}
              >
                Start Recording
              </button>

              <button
                className="btn control-btn stop-btn"
                onClick={() => {
                  stopRecording();
                  stop();
                }}
              >
                Stop Recording
              </button>

              <button className="btn control-btn share-btn" onClick={scre}>
                Share Screen
              </button>
            </div>

            <video src={mediaBlobUrl} controls autoPlay playsInline className="recording-video" />
          </div>
        )}
      />

      <video autoPlay ref={stream} className="stream-video" />
    </div>
  );
}

export default RecordingPage;
