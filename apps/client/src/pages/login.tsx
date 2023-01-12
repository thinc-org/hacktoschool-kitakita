import { MyPage } from "$core/@types";
import { Login } from "$modules/layouts";

const IndexPage: MyPage = () => {
  return (
    <main className="flex h-screen w-screen items-center justify-center bg-gray-light">
      <Login />
    </main>
  );
};

export default IndexPage;
