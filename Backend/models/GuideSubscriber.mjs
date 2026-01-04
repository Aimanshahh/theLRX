import mongoose from "mongoose";

const guideSubscriberSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, trim: true },
  createdAt: { type: Date, default: Date.now },
});

const GuideSubscriber = mongoose.model("GuideSubscriber", guideSubscriberSchema);

export default GuideSubscriber;
