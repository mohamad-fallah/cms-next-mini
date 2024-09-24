import connectToDb from "@/utils/db";
import coursesModel from "@/models/course";

const handler = async (req, res) => {
  connectToDb();
  if (req.method === "GET") {
    if (req.query.q) {
      const { q } = req.query;
      const courses = await coursesModel.find({ title: { $regex: q } });
      res.json(courses)
    } else {
      const courses = await coursesModel.find({});
      return res.json(courses);
    }
  } else if (req.method === "POST") {
    try {
      const { title } = req.body;

      if (!title.trim() || title.length < 4) {
        return res.status(422).json({ message: "title is not valid 422" });
      } else {
        await coursesModel.create({ title: title });
        return res.status(201).json({ message: "coure created successfuly" });
      }
    } catch (err) {
      return res.status(500).json({ message: "server erorr" });
    }
  }
};
export default handler;
