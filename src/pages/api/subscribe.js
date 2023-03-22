import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    try {
      await axios.post(
        "https://api.sendinblue.com/v3/contacts",
        {
          email: email,
        },
        {
          headers: {
            "api-key": process.env.YOUR_SENDINBLUE_API_KEY,
            "Content-Type": "application/json",
          },
        }
      );

      res.status(200).json({ message: "Subscription successful" });
    } catch (error) {
      console.error("Error occurred while subscribing:", error);
      res.status(500).json({ message: "An error occurred. Please try again." });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
