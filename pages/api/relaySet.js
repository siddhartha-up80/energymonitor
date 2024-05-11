import Relay from "@/models/relayState";
import { connectToDB } from "@/utils/database";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await connectToDB();

      // Extract relay state data from the request body
      const { state } = req.body;

      // Create a new relay state document
      const newRelayState = new Relay({ state });

      // Save the relay state to the database
      await newRelayState.save();

      // Respond with a success message
      res.status(201).json({ message: "Relay state saved successfully" });
    } catch (error) {
      // Handle errors
      console.error("Error saving relay state:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    // Return a 405 Method Not Allowed error for non-POST requests
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
