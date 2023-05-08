function formHandler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    // Backend Validation check...

    if (
      !email ||
      !name ||
      !message ||
      !email.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      ) ||
      name.trim === "" ||
      message.trim === ""
    ) {
      res.status(422).json({ message: "Invalid Input" });
      return;
    }

    // If we pass the above check then we have a valid data and we store it in a database...

    const newMessage = {
      email,
      name,
      message,
    };

    console.log(newMessage);

    res.status(201).json({ message: "Success", message: newMessage });
  }
}

export default formHandler;
