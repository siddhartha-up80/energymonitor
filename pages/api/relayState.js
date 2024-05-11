import { connectToDB } from "@/utils/database";
import Relay from "@/models/relayState";

export default async function handler(req, res) {
  await connectToDB();

  if (req.method === "GET") {
    try {
      const relayState = await Relay.findOne().sort({ time: -1 });

      // Extract the state field
      const currentState = relayState ? relayState.state : 0;

      // Send only the state
      res.status(200).json(currentState);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
