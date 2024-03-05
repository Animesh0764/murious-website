import React, { Component } from "react";
import "./Countdown.css";

import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

class Completed extends Component {
  render() {
    return (
      <span
        className="completed-text"
      >
        Murious is on!
      </span>
    );
  }
}

class RenderByUsingReactChild extends Component {
  render() {
    // Set target date to March 8, 2024, 09:00
    const targetDate = new Date(2024, 2, 8, 14, 0).getTime();

    return (
      <FlipClockCountdown
        to={targetDate}
        labels={["DAYS", "HOURS", "MINUTES", "SECONDS"]}
        labelStyle={{
          fontSize: 40,
          fontWeight: 500,
          textTransform: "uppercase",
        }}
        digitBlockStyle={{ width: 150, height: 200, fontSize: 100 }}
        dividerStyle={{ color: "#df4adf", height: 1 }}
        separatorStyle={{ color: "#df4adf", size: "6px" }}
        duration={0.5}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "40vh",
          width: "100%",
          marginTop: "5rem",
        }}
      >
        <Completed />
      </FlipClockCountdown>
    );
  }
}

export default RenderByUsingReactChild;
