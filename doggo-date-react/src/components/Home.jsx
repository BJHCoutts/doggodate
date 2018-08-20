import React, { Component } from "react";
import "../style/index.css";

import eyes from "../images/doggos/wide-eyed-dog.jpg";
import cuddletime from "../images/doggos/group/cuddletime.jpg";
import Square from "./DoggoSquare";

class Home extends Component {
  //make function?
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <main>
        <div
          className="parallax bgimg-1 cover-image"
          style={{
            backgroundImage: `url(${eyes})`
          }}
        />
        <div className="home__title_bar">
          <div className="bar" />
          <h1 className="titlebanner"> Doggo Date</h1>
        </div>
        <div className="bar" />
        <div
          className="parallax"
          style={{ backgroundImage: `url(${cuddletime})` }}
        >
          <Square style={{ padding: "5em 0em" }} />
        </div>
        {/* <div
          className="parallax bgimg-1"
          style={{
            backgroundImage: `url(${parkImages[1]})`
          }}
        > */}
        <div className="bar" />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
          velit rerum veritatis in eum ducimus cum aliquid fugit dolores
          repellendus voluptate tempora, placeat nostrum excepturi sit odit
          necessitatibus accusantium voluptatem animi laborum aspernatur fuga
          assumenda. Cumque dolores dolorum itaque atque asperiores eveniet
          odit. Atque quisquam nulla mollitia aliquam debitis iste ipsa dolorum
          molestiae earum, aut officia repudiandae! In fugit ipsum quidem. Eius
          quam odit maiores hic modi distinctio fuga deserunt culpa cumque,
          reiciendis rem assumenda ab optio odio aspernatur placeat doloribus
          necessitatibus vero doloremque voluptatum ratione ipsa? Soluta tempore
          quidem reprehenderit est voluptas, quam eveniet quae aspernatur harum,
          vel sapiente?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
          velit rerum veritatis in eum ducimus cum aliquid fugit dolores
          repellendus voluptate tempora, placeat nostrum excepturi sit odit
          necessitatibus accusantium voluptatem animi laborum aspernatur fuga
          assumenda. Cumque dolores dolorum itaque atque asperiores eveniet
          odit. Atque quisquam nulla mollitia aliquam debitis iste ipsa dolorum
          molestiae earum, aut officia repudiandae! In fugit ipsum quidem. Eius
          quam odit maiores hic modi distinctio fuga deserunt culpa cumque,
          reiciendis rem assumenda ab optio odio aspernatur placeat doloribus
          necessitatibus vero doloremque voluptatum ratione ipsa? Soluta tempore
          quidem reprehenderit est voluptas, quam eveniet quae aspernatur harum,
          vel sapiente?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
          velit rerum veritatis in eum ducimus cum aliquid fugit dolores
          repellendus voluptate tempora, placeat nostrum excepturi sit odit
          necessitatibus accusantium voluptatem animi laborum aspernatur fuga
          assumenda. Cumque dolores dolorum itaque atque asperiores eveniet
          odit. Atque quisquam nulla mollitia aliquam debitis iste ipsa dolorum
          molestiae earum, aut officia repudiandae! In fugit ipsum quidem. Eius
          quam odit maiores hic modi distinctio fuga deserunt culpa cumque,
          reiciendis rem assumenda ab optio odio aspernatur placeat doloribus
          necessitatibus vero doloremque voluptatum ratione ipsa? Soluta tempore
          quidem reprehenderit est voluptas, quam eveniet quae aspernatur harum,
          vel sapiente?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
          velit rerum veritatis in eum ducimus cum aliquid fugit dolores
          repellendus voluptate tempora, placeat nostrum excepturi sit odit
          necessitatibus accusantium voluptatem animi laborum aspernatur fuga
          assumenda. Cumque dolores dolorum itaque atque asperiores eveniet
          odit. Atque quisquam nulla mollitia aliquam debitis iste ipsa dolorum
          molestiae earum, aut officia repudiandae! In fugit ipsum quidem. Eius
          quam odit maiores hic modi distinctio fuga deserunt culpa cumque,
          reiciendis rem assumenda ab optio odio aspernatur placeat doloribus
          necessitatibus vero doloremque voluptatum ratione ipsa? Soluta tempore
          quidem reprehenderit est voluptas, quam eveniet quae aspernatur harum,
          vel sapiente?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
          velit rerum veritatis in eum ducimus cum aliquid fugit dolores
          repellendus voluptate tempora, placeat nostrum excepturi sit odit
          necessitatibus accusantium voluptatem animi laborum aspernatur fuga
          assumenda. Cumque dolores dolorum itaque atque asperiores eveniet
          odit. Atque quisquam nulla mollitia aliquam debitis iste ipsa dolorum
          molestiae earum, aut officia repudiandae! In fugit ipsum quidem. Eius
          quam odit maiores hic modi distinctio fuga deserunt culpa cumque,
          reiciendis rem assumenda ab optio odio aspernatur placeat doloribus
          necessitatibus vero doloremque voluptatum ratione ipsa? Soluta tempore
          quidem reprehenderit est voluptas, quam eveniet quae aspernatur harum,
          vel sapiente?
        </p>
        {/* </div> */}
      </main>
    );
  }
}

export default Home;
