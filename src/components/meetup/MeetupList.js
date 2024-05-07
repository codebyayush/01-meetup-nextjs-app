'use client'
import ItemContext from '@/context/ItemContext';
import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';
import { useContext } from 'react';


function MeetupList(props) {
  const ctx = useContext(ItemContext)
  const {meetups} = props;

  ctx.addAllMeetup(meetups)

  return (
    <ul className={classes.list}>
      {meetups.map((meetup) => (
        <MeetupItem
          newMeetup={meetup}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
