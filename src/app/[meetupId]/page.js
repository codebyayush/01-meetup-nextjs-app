"use client";
import MeetupDetails from '@/components/meetup/MeetupDetails';
import React from 'react';

function DetailPage({params}) {

  const dummyMeetups = [
    {
      id: 1,
      image: 'https://source.unsplash.com/N5Oqx-F-pxc',
      title: 'First Meetup',
      description: 'Join us for our first meetup where we will discuss the latest trends in technology.',
      address: '123 Main St, Montpellier, France',
    },
    {
      id: 2,
      image: 'https://source.unsplash.com/UMK1mwunTZ8',
      title: 'Second Meetup',
      description: 'Our second meetup is all about entrepreneurship and building successful startups.',
      address: '456 Elm St, Montpellier, France',
    },
    {
      id: 3,
      image: 'https://source.unsplash.com/rcCAgtVQQzE',
      title: 'Third Meetup',
      description: 'In this meetup, we will explore the future of artificial intelligence and its impact on society.',
      address: '789 Oak St, Zurich, Switzerland',
    },
  ];

  return (
  <>
  <ul>
    {params.meetupId == 1 && <MeetupDetails dummyMeetups={dummyMeetups[0]}/>}
    {params.meetupId == 2 && <MeetupDetails dummyMeetups={dummyMeetups[1]}/>}
    {params.meetupId == 3 && <MeetupDetails dummyMeetups={dummyMeetups[2]}/>}
  </ul>
  </>)
};

export default DetailPage;