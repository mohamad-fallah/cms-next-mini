import CoursesItem from "@/components/modules/coursesItem/CoursesItem";
import styles from "@/styles/Course.module.css";

const Course = ({ courses }) => {
  return (
    <>
      <section className={styles.courses}>
        <div className={styles.courses_top}>
          <h2 className={styles.courses_title}>نتیجه جست و جو</h2>
        </div>
        <ul className={styles.courses_list}>
          {courses.map((course) => (
            <CoursesItem {...course} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default Course;
