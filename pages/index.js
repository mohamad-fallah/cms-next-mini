import Course from "@/components/templates/index/Course";
import coursesModel from "@/models/course";
import connectToDb from "@/utils/db";

const index = ({courses}) => {
  return <Course datas={courses}/>;
};

export async function getStaticProps(context) {
  connectToDb();
  const courses = await coursesModel.find({});

  return {
    props: {
      courses: JSON.parse(JSON.stringify(courses))
    },
    revalidate: 60 * 60 * 12,
  };
}

export default index;
