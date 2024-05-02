"use client";
import MeetupDetails from '@/components/meetup/MeetupDetails';
import { useParams, useSearchParams } from 'next/navigation';
import React from 'react';


const dummyMeetups = [
  {
    id: 'm1',
    image: 'https://source.unsplash.com/N5Oqx-F-pxc',
    title: 'First Meetup',
    description: 'Join us for our first meetup where we will discuss the latest trends in technology.',
    address: '123 Main St, Montpellier, France',
  },
  {
    id: 'm2',
    image: 'https://source.unsplash.com/UMK1mwunTZ8',
    title: 'Second Meetup',
    description: 'Our second meetup is all about entrepreneurship and building successful startups.',
    address: '456 Elm St, Montpellier, France',
  },
  {
    id: 'm3',
    image: 'https://source.unsplash.com/rcCAgtVQQzE',
    title: 'Third Meetup',
    description: 'In this meetup, we will explore the future of artificial intelligence and its impact on society.',
    address: '789 Oak St, Zurich, Switzerland',
  },
];


const fetchMeetups = () => {
    const id = useParams();

    const findMeetup = dummyMeetups.find((meet) => meet.id == id.meetupId)
    return findMeetup;
}

function DetailPage() {
  const resp = fetchMeetups();
  return (
  <>
  <ul>
    <MeetupDetails dummyMeetups={resp}/>
  </ul>
  </>)
};

// export async function getStaticProps(context){

//     const id = context.params.meetupId;

//     const findMeetup = dummyMeetups.find((meet) => meet.id == id)

//     return{
//         props:{
//           meetupData: findMeetup
//         }
//     }
// }

export default DetailPage;