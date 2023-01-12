import { FC, useState } from "react";

import Link from "next/link";

import { Button, InputRadio, InputText } from "@kitakita/design";

interface IInput {
  username: string;
  password: string;
  passwordConfirm: string;
  role: string;
}

const initialState: IInput = {
  username: "",
  password: "",
  passwordConfirm: "",
  role: "",
};

export const Register: FC = () => {
  const updateInput = (name: string, value: string) => {
    setInput({ ...input, [name]: value });
  };
  const [input, setInput] = useState<IInput>(initialState);

  return (
    <>
      <div className="w-4/5 rounded-2xl bg-white p-8 lg:w-2/5">
        <h2 className="text-2xl font-bold">Register</h2>
        <div className="flex flex-col justify-center">
          <InputText
            handleChange={(e) => updateInput("username", e.target.value)}
            name="username"
            type="text"
            value={input.username}
          >
            Username
          </InputText>
          <InputText
            handleChange={(e) => updateInput("password", e.target.value)}
            name="password"
            type="password"
            value={input.password}
          >
            Password
          </InputText>
          <InputText
            handleChange={(e) => updateInput("passwordConfirm", e.target.value)}
            name="passwordConfirm"
            type="password"
            value={input.passwordConfirm}
          >
            Confirm Password
          </InputText>
          <div className="ml-4 w-1/2 lg:mt-6">
            <Button
              backgroundColor="bg-cyan-light"
              textColor="text-cyan-dark"
              onClick={() => console.log(input)}
            >
              Register &#10132;
            </Button>
          </div>
          <div className="mt-4 lg:mt-10 xl:mt-10">
            <Link
              className="font-bold text-black hover:text-cyan-dark hover:underline"
              href="/login"
            >
              Already have an account? Login here
            </Link>
          </div>
          <div className="mt-4">
            <Link
              className="font-bold text-black hover:text-cyan-dark hover:underline"
              href="/"
            >
              Go back to Home Page &#10132;
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
