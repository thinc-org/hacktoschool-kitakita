import { FC } from "react";

type DashboardProps = {
  role: string;
};

export const Dashboard: FC<DashboardProps> = ({ role }) => {
  return (
    <div className="w-screen p-4 lg:p-10">
      {role === "student" ? (
        <div>
          <h1>Enroll in courses</h1>
        </div>
      ) : (
        <div>
          <h1>Your Courses</h1>
        </div>
      )}
    </div>
  );
};
