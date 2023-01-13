import { FC } from "react";

type CourseProps = {
  name: string;
  description: string;
};

export const Course: FC<CourseProps> = ({ description, name }) => {
  return (
    <div className="h-full w-3/5 flex-none rounded-xl bg-white p-4 lg:p-10">
      <div>
        <h1 className="text-2xl">{name}</h1>
        <h3 className="mt-4 text-lg">{description}</h3>
      </div>
    </div>
  );
};
