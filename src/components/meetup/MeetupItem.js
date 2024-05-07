'use client'
import Link from "next/link";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

function MeetupItem(props) {
  const {newMeetup} = props
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={newMeetup.image} alt={newMeetup.title} />
        </div>
        <div className={classes.content}>
          <h3>{newMeetup.title}</h3>
          <address>{newMeetup.address}</address>
        </div>
        <div className={classes.actions}>
          <Link href={{pathname:`/${newMeetup._id}`}} >
            <button>Show Details</button>
          </Link>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;