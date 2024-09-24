const mongoose = require("mongoose")

const connectToDb = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      return false;
    } else {
      await mongoose.connect("mongodb://localhost:27017/next-cms");
      console.log("connect to DB :)");
    }
  } catch (err) {
    console.log("not connect for:", err);
  }
};
export default connectToDb;
