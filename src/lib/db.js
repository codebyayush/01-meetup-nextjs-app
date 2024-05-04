const username = process.env.username;
const password = process.env.password;
//or
// const {username, password} = process.env;


export const connectionSrt = `mongodb+srv://${username}:${password}@cluster0.anmczop.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0`