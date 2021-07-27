import { Component } from "react";
import "./App.css";
import Topbar from "./Components/Topbar";
import Filter from "./Components/Filter";
import Card from "./Components/Card";
import Footer from "./Components/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fliterData: [],
      storiesData: [],
    };
  }

  componentDidMount() {
    fetch("https://api.edyoda.com/v1/blog/postcategories/")
      .then((res) => res.json())
      .then((result) => this.setState({ fliterData: result }));
    fetch("https://api.edyoda.com/v1/blog/")
      .then((res) => res.json())
      .then((result) => this.setState({ storiesData: result }));
  }

  render() {
    return (
      <div>
        {/*TOPBAR START*/}
        <Topbar />
        {/*TOPBAR END*/}
        {/*FILTER START*/}
        <div className="HomepageContainer">
          <div className="LatestPostContainer"></div>
          <div>
            <h3 className="latestPost">Latest Posts</h3>
            <div>
              <div className="FilterSection">
                <div className="FilterIconContainer">
                  <div className="FilterIcon">
                    <img
                      alt="Filter Icon"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAbFBMVEUAAAA1gME1gME1f8A1gME1gMExd7Q0f8AxeLYzfb00fr80f8Aze7oze7o1gMA0fr4zfLwzfb0zfb0yerg0fb00f8AzfLszfLwzfr40f780f8Azfb00f8A0f8AzfLwzfr81gME0fr4zfLs1gMEkRxAZAAAAI3RSTlMAHOP9f/oT1RAO281OROfhFaSUSkCwnpmOcTfFim9YB/AmGRclE4kAAAF9SURBVGje7dfrboJAEAXgA7jLXRAExRu2vP87No1NJjYpexm3SZv5/vgD9QB7mCwQQggh/rI2YtCwUpUxw7mGhTZdWMoWZlHMC4kjmL0Xv3Al8zHhZCQTbOid159/fRwyWIlK+p2rQcPSvnBLoa+mJ1jrG7+bVdRwcLsvHpoeLuaLepxh4nAd9xvc5F1ityx0Juoyw5EeXZely2DAL/JOw8M+NafQ4TKCl7pxeED28FRtrctbw9uk1u4YHdhW8Jd39LislXcCRzZalEt1OVj0YF76MQPTyVjkQYOtprlvmO4cfbysoOnOc6UiG6Y7Q36kIn8v7xWvkh1+mPvqmIPBtIExb0385z5/ups3MM+2b3ixi3nXy7eREAmREAmREAmRkPWQsw4Xkiz05hMqJEkoI0wIZTQVEC7k8VH0CGDztB5pDRKkXfTWHjJkOMGAX+Fdi0CowqMGCROiDpQRKkR1GcLZ0PtbODf1OUquOULKpzQ+VwitjTIIIYQQ/9wHYyfu5wm8dM0AAAAASUVORK5CYII="
                    />
                  </div>
                  <p className="FilterText">Filter by Category</p>
                </div>
                <div className="CategoryList">
                  <div className="CategoryItem Active">All</div>
                  {this.state.fliterData.map(({ id, title }, index) => (
                    <Filter id={id} title={title} key={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/*FILTER ENDS*/}
          {/*STORIES START*/}
          <div className="CardSection">
            {this.state.storiesData.map(
              ({ id, small_image, title, description, posted_on }, index) => (
                <Card
                  id={id}
                  imageUrl={small_image}
                  datePosted={posted_on}
                  title={title}
                  description={description}
                  key={index}
                />
              )
            )}
          </div>
          {/*STORIES ENDS*/}
        </div>
        {/*FOOTER STARTS*/}
        <Footer />
        {/*FOOTER ENDS*/}
      </div>
    );
  }
}

export default App;
