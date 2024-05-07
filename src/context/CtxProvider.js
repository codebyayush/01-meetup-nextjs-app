"use client";
import React, { useState } from "react";
import ItemContext from "./ItemContext";

export const PostProvider = ({ children }) => {
  const [meetup, setMeetup] = useState([]);

  const addMeetup = (meetup) => {
    setMeetup((prevMeet) => [...prevMeet, meetup]);
  };

  const addAllMeetup = (meetups) => {
    setMeetup(meetups);
  };

  const context = {
    meetupArr: meetup,
    addMeetup: addMeetup,
    addAllMeetup: addAllMeetup,
  };

  return (
    <ItemContext.Provider value={context}>
      <div>{children}</div>
    </ItemContext.Provider>
  );
};
