import { FC } from "react";

import { Footer } from "./components/Footer";
import { SectionFour } from "./components/SectionFour";
import { SectionOne } from "./components/SectionOne";
import { SectionThree } from "./components/SectionThree";
import { SectionTwo } from "./components/SectionTwo";

export const Landing: FC = () => {
  return (
    <>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <Footer />
    </>
  );
};
