import { MyPage } from "$core/@types";
import { NavBar } from "$modules/layouts";

const IndexPage: MyPage = () => {
  return (
    <main className="h-screen w-screen bg-gray-light">
      <NavBar />
    </main>
  );
};

export default IndexPage;
