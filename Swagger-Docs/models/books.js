import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  id: String,
  name: {
    type: String,
  },
});

export default mongoose.model("Book", bookSchema);
