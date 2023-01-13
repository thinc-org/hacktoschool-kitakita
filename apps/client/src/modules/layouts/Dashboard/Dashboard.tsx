import { FC } from "react";

import { Course } from "./components/Course";
import { courses } from "./courses";

type DashboardProps = {
  role: string;
};

export const Dashboard: FC<DashboardProps> = ({ role }) => {
  return (
    <div className="h-[90vh] w-screen p-4 lg:p-10">
      {role === "student" ? (
        <div className="h-full">
          <h1 className="mb-4 font-sans text-4xl">Enroll in courses</h1>
          <div className="flex h-4/5 space-x-6 overflow-auto">
            {courses.map((course) => (
              <Course
                key={course.id}
                description={course.description}
                name={course.name}
              />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h1>Your Courses</h1>
        </div>
      )}
    </div>
  );
};
