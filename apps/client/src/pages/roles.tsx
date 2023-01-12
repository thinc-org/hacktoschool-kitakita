import { MyPage } from "$core/@types";
import { Roles } from "$modules/layouts";

const RolesPage: MyPage = () => {
  return (
    <main className="h-screen w-screen bg-gray-light">
      <Roles />
    </main>
  );
};

export default RolesPage;
