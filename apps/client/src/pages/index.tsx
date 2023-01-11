import { MyPage } from "$core/@types";
import { NavBar } from "$modules/layouts";
import {
  Footer,
  SectionFour,
  SectionOne,
  SectionThree,
  SectionTwo,
} from "$modules/layouts";

const IndexPage: MyPage = () => {
  return (
    <main className="h-screen w-screen bg-gray-dark">
      <NavBar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <Footer />
    </main>
  );
};

export default IndexPage;
