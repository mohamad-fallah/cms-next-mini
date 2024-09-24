import Course from "@/components/templates/search/courses";
import coursesModel from "@/models/course";
import connectToDb from "@/utils/db";

const index = ({ courses }) => {
  return <Course courses={courses} />;
};

export async function getServerSideProps(context) {
  connectToDb();
  const { query } = context;
  const courses = await coursesModel.find({ title: { $regex: query.q } });
  return {
    props: {
      courses: JSON.parse(JSON.stringify(courses)),
    },
  };
}

export default index;
