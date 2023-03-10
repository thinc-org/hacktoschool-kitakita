import { MyPage } from "$core/@types";
import { Register } from "$modules/layouts";

const RegisterPage: MyPage = () => {
  return (
    <main className="flex h-screen w-screen items-center justify-center bg-gray-light">
      <Register />
    </main>
  );
};

export default RegisterPage;
