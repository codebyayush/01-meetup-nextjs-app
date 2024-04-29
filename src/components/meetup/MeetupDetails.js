import React from "react";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

const MeetupDetails = (props) => {
  return (
    <>
      <li className={classes.item}>
        <Card>
          <div className={classes.image}>
            <img src={props.dummyMeetups.image} alt={props.dummyMeetups.title} />
          </div>
          <div className={classes.content}>
            <h3>{props.dummyMeetups.title}</h3>
            <address>{props.dummyMeetups.address}</address>
          </div>
          <div className={classes.content}>
            <address>{props.dummyMeetups.description}</address>
          </div>
        </Card>
      </li>
    </>
  );
};

export default MeetupDetails;
