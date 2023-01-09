import { MyPage } from "$core/@types";
import { Navbar } from "$modules/navbar/components/Navbar";

const IndexPage: MyPage = () => {
  return (
    <main>
      <Navbar />
    </main>
  );
};

export default IndexPage;
