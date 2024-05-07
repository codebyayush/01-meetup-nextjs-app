'use client'
import MeetupDetails from '@/components/meetup/MeetupDetails';
import ItemContext from '@/context/ItemContext';
import { useParams } from 'next/navigation';
import React, { useContext } from 'react';


const findMeetup = () => {
    const ctx = useContext(ItemContext)
    const id = useParams();

    const findMeetup = ctx.meetupArr.find((meet) => meet._id == id.meetupId)
    return findMeetup;
}

export default function DetailPage() {
  const meetup = findMeetup();
  return (
  <>
  <ul>
    <MeetupDetails dummyMeetups={meetup}/>
  </ul>
  </>)
};