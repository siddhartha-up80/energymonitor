import { Schema, model, models } from "mongoose";

const RelayStateSchema = new Schema({
  time: {
    type: Date,
    default: Date.now,
  },
  state: {
    type: String,
  },
});

const Relay = models.Relay || model("Relay", RelayStateSchema);

export default Relay;
