
import MeetupList from '@/components/meetup/MeetupList';
import React from 'react'

export default function Home() {
  
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
    // Add more meetups with descriptions as needed
  ];

  return (
    <>
        <MeetupList meetups={dummyMeetups}/>
    </>
  );
}