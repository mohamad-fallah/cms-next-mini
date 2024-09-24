import coursesModel from "@/models/course";
import connectToDb from "@/utils/db";
import { isValidObjectId } from "mongoose";

const handler = async (req, res) => {
  connectToDb();

  if (req.method === "DELETE") { // Delete course api
    const { id } = req.query;
    if (isValidObjectId(id)) {
      try {
        await coursesModel.findOneAndDelete({ _id: id });
        return res.json({ message: "course Deleted" });
      } catch (err) {
        return res.status(500).json({ message: "erorr server" });
      }
    } else {
      return res.status(422).json({ message: "course id id not valid" });
    }
  } else if (req.method === "PUT") { // Edit course api
    const { id } = req.query;
    const { title } = req.body;

    if (isValidObjectId(id)) {
      try {
        await coursesModel.findOneAndUpdate({ _id: id }, { title: title });
        return res.json({ message: "course updated" });
      } catch (err) {
        return res.status(500).json({ message: "erorr server" });
      }
    } else {
      return res.status(422).json({ message: "course id id not valid" });
    }
  }
};

export default handler;
