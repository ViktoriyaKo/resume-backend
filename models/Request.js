import mongoose from 'mongoose';

const RequestSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Request', RequestSchema);
