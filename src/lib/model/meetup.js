import mongoose from "mongoose";

const meetupModel = new mongoose.Schema({
    title:String,
    image:String,
    address:String,
    description:String
})

export const Meetup = mongoose.models.meetups || mongoose.model('meetups', meetupModel);