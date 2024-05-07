import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { Meetup } from "@/lib/model/meetup";
import { connectionSrt } from "@/lib/db";

//post using mongo client
// export async function POST(request) {
//   let client;
//   try {
//       const body = await request.json(); 

//       client = new MongoClient(connectionSrt);
//       await client.connect();  // Make sure to connect the client
     
//       const db = client.db('meetupDB');  // Specify your database name explicitly
//       const meetupCollection = db.collection('meetups');
      
//       await meetupCollection.insertOne(body);

//       return new Response('OK');  // Make sure to use 'new' for creating a Response object
//   } catch (error) {
//       console.error('Error inserting data:', error);
//       return new Response('Internal Server Error', { status: 500 });
//   } finally {
//       if (client) {
//           await client.close();  // Ensure client closes in finally block
//       }
//   }
// };
//post using mongoose
export async function POST(request){
    const body = await request.json();
    await mongoose.connect(connectionSrt)
    let meetups = new Meetup(body);
    const result = await meetups.save();
    
    return new NextResponse(JSON.stringify(result), {success:true})
}

export async function GET() {
  
  let data = [];
  
  try {
    await mongoose.connect(connectionSrt)
    data = await Meetup.find()
    //always use JSON.stingify() otherwise you don't get the response object
    return new NextResponse(JSON.stringify(data),{status: 200} );
  } catch (error) {
    data = {success: false}
    return new NextResponse('Error fetching meetups'+ error, {status: 500})
  } finally {
    mongoose.connection.close();
  }
}
