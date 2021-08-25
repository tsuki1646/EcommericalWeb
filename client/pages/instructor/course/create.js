import axios from "axios";
import InstructorRoute from "../../../components/routes/InstructorRoute";

const CourseCreate = () => {
  return (
    <InstructorRoute>
      <h1 className="p-5 mb-4 bg-light rounded-3 text-center square">Create Course</h1>
    </InstructorRoute>
  );
};

export default CourseCreate;
