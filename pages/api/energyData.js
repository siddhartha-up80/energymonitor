// pages/api/energyData.js
import Energy from "@/models/energydata";
import { connectToDB } from "@/utils/database";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      let { voltage, current, power, energy } = req.body;

      // Process the incoming data as needed
      console.log("Received data from ESP32:");
      console.log(
        `Voltage: ${voltage}V, Current: ${current}A, Power: ${power}W, Energy: ${energy}kWh`
      );

      // generate random values
      // voltage = Math.random() * (222 - 220) + 220;
      // current = Math.random() * (0.07 - 0.05) + 0.05;
      // power = Math.random() * (13.2 - 13) + 13;

      // const bulbPower = 0.013; // Convert watts to kilowatts

      // // Generate random value for time in hours (e.g., between 0.5 and 2 hours)
      // const timeInHours = Math.random() * (2 - 0.5) + 0.5;

      // // Calculate energy consumption
      // energy = bulbPower * timeInHours;


      // You can store the data in a database, perform additional calculations, etc.
      await connectToDB();

      const energydata = new Energy({
        voltage,
        current,
        power,
        energy,
      });
  
      await energydata.save();

      // Respond with a success message
      res.status(200).json({ message: "Data received successfully" });
    } catch (error) {
      console.error("Error processing data:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    // Return a method not allowed error for non-POST requests
    res.status(405).json({ error: "Method Not Allowed" });
  }
}