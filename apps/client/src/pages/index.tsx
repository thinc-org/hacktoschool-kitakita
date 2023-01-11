import { MyPage } from "$core/@types";
import {
  Footer,
  SectionFour,
  SectionOne,
  SectionThree,
  SectionTwo,
} from "$modules/landing/components";
import { Navbar } from "$modules/navbar/components/Navbar";

const IndexPage: MyPage = () => {
  return (
    <main className="h-screen w-screen bg-gray-dark">
      <Navbar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <Footer />
    </main>
  );
};

export default IndexPage;
