import { FC } from "react";

type CourseProps = {
  name: string;
};

export const Course: FC<CourseProps> = ({ name }) => {
  return (
    <div className="w-screen p-4 lg:p-10">
      <div>
        <h1>{name}</h1>
      </div>
    </div>
  );
};
