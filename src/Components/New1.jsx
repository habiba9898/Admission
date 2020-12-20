import React, { Component } from "react";
import { render } from "react-dom";
import moment from "moment";
import Timetable from "react-timetable-events";

class Time1 extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      timetableProps: {
        events: {
          monday: [
            {
              id: 1,
              name: "Custom Event 1",
              type: "custom",
              startTime: moment("2018-02-23T11:30:00"),
              endTime: moment("2018-02-23T13:30:00"),
            },
          ],
          tuesday: [
            {
              id: 2,
              name: "Custom Event 2",
              type: "custom",
              startTime: moment("2018-02-22T12:30:00"),
              endTime: moment("2018-02-22T14:30:00"),
            },
            {
              id: 3,
              name: "Custom Event 3",
              type: "custom",
              startTime: moment("2018-02-22T16:30:00"),
              endTime: moment("2018-02-22T18:45:00"),
            },
          ],
          wednesday: [],
          thursday: [
            {
              id: 2,
              name: "Custom Event 4",
              type: "custom",
              startTime: moment("2018-02-22T01:30:00"),
              endTime: moment("2018-02-22T02:30:00"),
            },
            {
              id: 3,
              name: "Custom Event 3",
              type: "custom",
              startTime: moment("2018-02-22T16:30:00"),
              endTime: moment("2018-02-22T18:45:00"),
            },
            {
              id: 3,
              name: "Custom Event 3",
              type: "custom",
              startTime: moment("2018-02-22T06:00:00"),
              endTime: moment("2018-02-22T09:00:00"),
            },
          ],
          friday: [],
        },
        hoursInterval: [1, 24],
        timeLabel: "Time :)",
        renderHour(hour, defaultAttributes, styles) {
          return (
            <div
              {...defaultAttributes}
              key={hour}
              style={{
                ...defaultAttributes.style,
                textAlign: "center",
                textDecoration: "underline",
              }}
            >
              {hour}
            </div>
          );
        },
        renderEvent(event, defaultAttributes, styles) {
          return (
            <div
              {...defaultAttributes}
              title={event.name}
              key={event.id}
              style={{
                ...defaultAttributes.style,
                background: "#BF112B",
                borderRadius: "50px",
              }}
            >
              <span className={styles.event_info}>[ {event.name} ]</span>
              <span className={styles.event_info}>
                {event.startTime.format("HH:mm")} -{" "}
                {event.endTime.format("HH:mm")}
              </span>
            </div>
          );
        },
      },
    };
  }

  render() {
    return <Timetable {...this.state.timetableProps} />;
  }
}
export default Time1;
