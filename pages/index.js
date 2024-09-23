import Course from "@/components/templates/index/Course";
import coursesModel from "@/models/course";
import connectToDb from "@/utils/db";

const index = () => {
  return <Course />;
};

export async function getStaticProps(context) {
  connectToDb()
  const coursese = await coursesModel.find({})
  console.log(coursese);
  
  return {
    props: {

    },
  };
}

export default index;
