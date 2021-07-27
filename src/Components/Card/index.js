import React, { Component } from "react";
import "../../App.css";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      imgUrl: props.imageUrl,
      title: props.title,
      postedDate: new Date(props.datePosted),
      description: props.description,
    };
  }
  render() {
    return (
      <div className="CardContainer HomepageCard">
        <a className="RemoveTextDecoration" href="/index.html">
          <div className="BlogImgContainer">
            <img
              className="BlogImg"
              src={this.state.imgUrl}
              alt={this.state.title}
            />
          </div>
          <div className="BlogDetails">
            <h3 className="BlogTitle">{this.state.title}</h3>
            <p className="AuthorName">
              EdYoda
              <span className="PublishDate">
                {" "}
                | {this.state.postedDate.toUTCString().substr(4, 12)}
              </span>
            </p>
            <div className="BlogDescription">
              <div className="description">
                <p className="desc">{this.state.description}</p>
              </div>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default Card;
