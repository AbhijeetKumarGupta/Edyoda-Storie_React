import React, { Component } from "react";
import "../../App.css";

class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const mystyle = {
      width: "auto",
      fontSize: "0.75em",
      padding: "0.5em 2em",
      margin: "0px 0px 0px 0px",
      boxShadow: "none",
    };

    return (
      <div>
        <div className="TopbarOne TopbarTwo">
          <a className="TopbarThree" href="/index.html">
            <div>
              <div className="LogoOne LogoTwo">EDYODA</div>
              <p className="LogoThree">Stories</p>
            </div>
          </a>
          <div className="NavigationOne NavigationTwo">
            <ul className="NavigationThree NavigationFour">
              <div className="NavigationFive">
                <div className="Tooltip">
                  <div>
                    <li className="NavigationSix NavigationSeven">
                      <div>
                        <div className="NavigationEight">
                          Explore Categories
                          <span>
                            <img
                              className="NavigationNine"
                              alt="Dropdown Icon"
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAGCAYAAAD37n+BAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHhJREFUeNpiYGBguAPE/f///2fAh0FqgPguiBEDxC+BeDUQM2NRyAyVewlWCxW0B+L7QHwAiHmRFPNCxUBy9mAxJElVIL4MxBeBWB6KL0LFVOHq0KwXAuJDQHwPikFsIWQ1jFCFcMDIyMgGpFZAuRFA+V/I8gABBgD8EGd4shdx5wAAAABJRU5ErkJggg=="
                            />
                          </span>
                        </div>
                      </div>
                    </li>
                  </div>
                </div>
              </div>
            </ul>
            <ul className="BlogNavigationLinks__RightEndMenus__1VsW6">
              <div className="BlogNavigationLinks__NonMobileOnly__2Ki-o">
                <p className="BlogNavigationLinks__EdyodaText__11wl2">
                  EdYoda is free learning and knowledge
                  <br /> sharing platform for techies
                </p>
              </div>
              <div className="BlogNavigationLinks__SignupButton__1Y22p BlogNavigationLinks__NonMobileOnly__2Ki-o">
                <button className="Button__Button__QI7b2" style={mystyle}>
                  Go To Main Website
                </button>
              </div>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Topbar;
