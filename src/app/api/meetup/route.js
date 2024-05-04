import { MongoClient } from "mongodb";

export async function POST(request) {
  let client;
  try {
      const body = await request.json(); 
      const uri = 'mongodb+srv://ayush29:3zNrXN0oASCdCzLe@cluster0.anmczop.mongodb.net/?retryWrites=true&w=majority';
      
      client = new MongoClient(uri);
      await client.connect();  // Make sure to connect the client
     
      const db = client.db('meetupDB');  // Specify your database name explicitly
      const meetupCollection = db.collection('meetups');
      
      const result = await meetupCollection.insertOne(body);

      return new Response('OK');  // Make sure to use 'new' for creating a Response object
  } catch (error) {
      console.error('Error inserting data:', error);
      return new Response('Internal Server Error', { status: 500 });
  } finally {
      if (client) {
          await client.close();  // Ensure client closes in finally block
      }
  }
};

export async function GET() {
  let client;
  try {
    const uri =
      "mongodb+srv://ayush29:3zNrXN0oASCdCzLe@cluster0.anmczop.mongodb.net/?retryWrites=true&w=majority";

      const client = new MongoClient(uri);
      await client.connect();

    const db = client.db("meetupDB");
    const meetupCollection = db.collection("meetups");

    const result = await meetupCollection.find().toArray();
    console.log('ressultttt',result);
    
    const meetups = result.map((meets) => ({
        _id: meets._id.toString(),
        title: meets.title,
        address: meets.address,
        image: meets.image,
        description: meets.description,
    }))

    return new Response(JSON.stringify(meetups), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Error inserting data:", error);
    return new Response("Internal Server Error", { status: 500 });
  } finally {
    if (client) {
        await client.close();  // Ensure client closes in finally block
    }
}
}
