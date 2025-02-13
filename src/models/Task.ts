import mongoose, { Schema, Document } from "mongoose";

interface ITask extends Document {
  title: string;
  description: string;
  completed: boolean;
  user: mongoose.Schema.Types.ObjectId;
  createdAt: Date;
}

const TaskSchema = new Schema<ITask>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    completed: { type: Boolean, default: false },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },

  },
  { versionKey: false }
);

export default mongoose.model<ITask>("Task", TaskSchema);
