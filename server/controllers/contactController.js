export const handleContact = (req, res) => {
    const { name, email, message } = req.body;
  
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }
  
    // Simulate saving to DB or sending an email
    console.log("📬 New contact message:");
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
  
    res.status(200).json({ message: "Message sent successfully!" });
  };
  