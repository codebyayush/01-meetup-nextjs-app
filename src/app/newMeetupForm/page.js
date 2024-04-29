"use client"
import NewMeetupForm from '@/components/meetup/NewMeetupForm';

const MeetupForm = () => {
  const meetupHandler = (meetupData) => {
      console.log(meetupData);
  }

  return <NewMeetupForm onAddMeetup={meetupHandler}/>
}

export default MeetupForm;