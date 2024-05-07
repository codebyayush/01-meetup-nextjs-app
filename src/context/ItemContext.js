'use client'
import React from 'react'

const ItemContext = React.createContext({
    meetupArr: [],
    addMeetup: (meetup) => {},
    addAllMeetup: (meetups) => {},
})

export default ItemContext;