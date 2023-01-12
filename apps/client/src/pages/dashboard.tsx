import { MyPage } from "$core/@types";
import { Dashboard, NavBar } from "$modules/layouts";

const DashboardPage: MyPage = () => {
  const role = "student";
  return (
    <main className="h-screen w-screen bg-gray-light">
      <NavBar />
      <Dashboard role={role} />
    </main>
  );
};

export default DashboardPage;
