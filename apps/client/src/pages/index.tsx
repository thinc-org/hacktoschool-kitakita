import { MyPage } from "$core/@types";
import { Landing, NavBar } from "$modules/layouts";

const IndexPage: MyPage = () => {
  return (
    <main className="h-screen w-screen bg-gray-dark">
      <NavBar />
      <Landing />
    </main>
  );
};

export default IndexPage;
