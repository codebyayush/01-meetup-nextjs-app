"use client";
import NewMeetupForm from "@/components/meetup/NewMeetupForm";

const MeetupForm = () => {
  const meetupHandler = async (meetupData) => {
    const response = await fetch("http://localhost:3000/api/meetup", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: { "Content-Type": "application/json" },
    });

    console.log(response);
    // if(response.ok){
    //     const resp = await response;
    //     console.log('posted',resp);
    // }else{
    //   const error = await response;
    //   console.log('failed to post',error)
    // }
  };

  return <NewMeetupForm onAddMeetup={meetupHandler} />;
};

export default MeetupForm;
