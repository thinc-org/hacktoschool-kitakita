import { MyPage } from "$core/@types";
import { Navbar } from "$modules/navbar/components/Navbar";

const IndexPage: MyPage = () => {
  return (
    <main className="h-screen w-screen bg-gray-light">
      <Navbar />
    </main>
  );
};

export default IndexPage;
