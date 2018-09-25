import React from "react";
import { Link, Redirect } from "react-router-dom";
import "../style/doggoDetails.css";
// import Doggo from "../requests/doggo.js";

const DoggoDetails = props => {
  function handleRedirect(id) {
    return <Redirect to={`./${id}`} />;

    console.log("inside doggo details");
  }
  return (
    <main>
      <div className="profile__doggo_img_container">
        <div className="profile__doggo_img_box ">
          <div
            className="profile__doggo_img_content"
            style={{
              backgroundImage: `url(../${props.image})`
            }}
          />
        </div>
      </div>

      <div className="doggo__details_container baseDiv">
        <h1>{props.name}</h1>
        <h2> "{props.meme_phrase}"</h2>
        <div className="doggo__details_container_info">
          <div className="col_one">
            <div className="doggo__display_text">Breed</div>
            <div className="doggo__body_text">{props.breed}</div>
            <div className="doggo__display_text">Sound</div>
            <div className="doggo__body_text">{props.sound}</div>
            <div className="doggo__display_text">Age</div>
            <div className="doggo__body_text">{props.age}</div>
            <div className="doggo__display_text">Gender</div>
            <div className="doggo__body_text">{props.gender}</div>
          </div>
          <div className="col_two">
            <div className="doggo__display_text">Coat Length</div>
            <div className="doggo__body_text">{props.coat_length}</div>
            <div className="doggo__display_text">Size</div>
            <div className="doggo__body_text">{props.size}</div>
            <div className="doggo__display_text">Category</div>
            <div className="doggo__body_text">{props.category}</div>
            <div className="doggo__display_text">Owner</div>
            <div className="doggo__body_text">{props.user.first_name}</div>
          </div>
        </div>

        {/* <div className="doggo__details_container_info_sp">
          <div className="info__col_one">
            <div className="doggo__display_text">Breed</div>
            <div className="doggo__body_text">{props.breed}</div>
            <div className="doggo__display_text">Sound</div>
            <div className="doggo__body_text">{props.sound}</div>
            <div className="doggo__display_text">Age</div>
            <div className="doggo__body_text">{props.age}</div>
            <div className="doggo__display_text">Gender</div>
            <div className="doggo__body_text">{props.gender}</div>
          </div>
          <div className="info__col_three">
            <div className="doggo__display_text">Coat Length</div>
            <div className="doggo__body_text">{props.coat_length}</div>
            <div className="doggo__display_text">Size</div>
            <div className="doggo__body_text">{props.size}</div>
            <div className="doggo__display_text">Category</div>
            <div className="doggo__body_text">{props.category}</div>
            <div className="doggo__display_text">Owner</div>
            <div className="doggo__body_text">{props.user.first_name}</div>
          </div>
          <div className="info__col_four">
            <div className="doggo__display_text">Breed</div>
            <div className="doggo__body_text">{props.breed}</div>
            <div className="doggo__display_text">Sound</div>
            <div className="doggo__body_text">{props.sound}</div>
            <div className="doggo__display_text">Age</div>
            <div className="doggo__body_text">{props.age}</div>
            <div className="doggo__display_text">Gender</div>
            <div className="doggo__body_text">{props.gender}</div>
          </div>
          <div className="info__col_two">
            <div className="doggo__display_text">Coat Length</div>
            <div className="doggo__body_text">{props.coat_length}</div>
            <div className="doggo__display_text">Size</div>
            <div className="doggo__body_text">{props.size}</div>
            <div className="doggo__display_text">Category</div>
            <div className="doggo__body_text">{props.category}</div>
            <div className="doggo__display_text">Owner</div>
            <div className="doggo__body_text">{props.user.first_name}</div>
          </div>
        </div> */}

        <div className="doggo__display_text">Favourite Park</div>
        <div className="doggo__body_text">{props.park}</div>
      </div>
      <div className="baseDiv">
        <h2>Doggo Partners</h2>

        <div className="user__doggo_container">
          {props.friends.map(d => (
            <div key={d.id} className="friend__single">
              <Link
                to={`./${d.id}`}
                onClick={() => this.props.history.push(`./${d.id}`)}
              >
                <div
                  className="friend__image"
                  style={{
                    backgroundImage: `url(../${d.image})`
                  }}
                />
              </Link>
              <Link
                to={`./${d.id}`}
                className="link"
                onClick={() => handleRedirect(d.id)}
              >
                {d.name}
              </Link>
              <Link to={`./${d.id}`} className="link">
                No refresh
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default DoggoDetails;

{
  /* Match.first.doggo.name
  Match.first.friend.name */
}

// <div className="user__doggo_single">
//   <Link to={`./${match.id}`}>
//     <div
//       key={index}
//       style={{
//         backgroundImage: `url(${match.image})`
//       }}
//       className="user__doggo_image"
//     />
//   </Link>

//   <p style={{ margin: "0 0 1em 0" }}>
//     <Link to={`/${match.id}`}>{match.friend_id}</Link>
//     <p>{match.friend}</p>
//     <p>
//       Match State:
//       {match.state}
//     </p>
//     <p>{match.friended_at.toLocaleString()}</p>
//   </p>
// </div>
