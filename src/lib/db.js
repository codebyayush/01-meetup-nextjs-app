const password = process.env.password;
//or
// const {username, password} = process.env;

export const connectionSrt = `mongodb+srv://ayush29:${password}@cluster0.anmczop.mongodb.net/meetupDB?retryWrites=true&w=majority&appName=Cluster`