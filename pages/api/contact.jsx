import { MongoClient } from "mongodb";

async function formHandler(req, res) {
  if (req.method === "POST") {
    const { email, name, message, phoneNumber } = req.body;

    // Backend Validation check...

    if (
      !email ||
      !name ||
      !message ||
      !email.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      ) ||
      name.trim === "" ||
      message.trim === "" ||
      !phoneNumber ||
      !phoneNumber.match(/^[6-9]\d{9}$/)
    ) {
      res.status(422).json({ message: "Invalid Input" });
      return;
    }

    // If we pass the above check then we have a valid data and we store it in a database...

    const newMessage = {
      email,
      name,
      message,
      phoneNumber,
    };

    let client;

    try {
      client = await MongoClient.connect(
        `mongodb+srv://${process.env.blog_app_username}:${process.env.blog_app_password}@${process.env.blog_app_cluster}.rcblahe.mongodb.net/${process.env.blog_app_database}?retryWrites=true&w=majority`
      );
    } catch (error) {
      res.status(500).json({ message: "Could not connect to DB" });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "storing messages failed!" });
      return;
    }

    client.close();

    res.status(201).json({ message: "Success", message: newMessage });
  }
}

export default formHandler;
