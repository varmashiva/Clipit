import circle from "../assets/circle.png";
import back from "../assets/left-arrow.png";
import { Link } from "react-router-dom";
import "../App.css";

function Profile() {
  return (
    <div>
      <div className="back-btn-container">
        <Link to="/">
          <img id="back-btn-img" src={back} alt="" />
        </Link>
      </div>
      <div className="profile-details">
        <div>
          <img className="profile-icon" src={circle} alt="Profie_pic" />
        </div>
        <div className="user-name">
          <h2>Name</h2>
          <p>I am batman</p>
        </div>
        <div className="user-button">
          <button>Edit Profile</button>
        </div>
      </div>
      <hr />
      <div>
        <nav>
          <div className="user-collection-container">
            <div className="user-collection">
              <h2>Recordings</h2>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Profile;
