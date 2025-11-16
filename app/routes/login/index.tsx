import type { FormEvent } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";

import { appTitle } from "~/constants";
import { paths } from "~/routes";
import { useUserData } from "~/contexts";
import { Input, Label } from "~/components";
import type { Route } from "./+types";
import type { IUserField } from "~/types";

export function meta({}: Route.MetaArgs) {
  return [
    { title: appTitle },
    {
      name: "description",
      content: "Login to Health and Activity Recommender",
    },
  ];
}

const loginFields: Record<string, IUserField> = {
  username: {
    name: "username",
    title: "Login",
    settings: {
      type: "text",
      required: true,
      placeholder: "Enter your login",
    },
  },
  password: {
    name: "password",
    title: "Password",
    settings: {
      type: "password",
      required: true,
      placeholder: "Enter your password",
    },
  },
};

export default function Login() {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useUserData();
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    const formData = new FormData(e.currentTarget);
    const username = formData.get(loginFields.username.name);
    const password = formData.get(loginFields.password.name);

    const authUsername = import.meta.env.VITE_AUTH_USERNAME;
    const authPassword = import.meta.env.VITE_AUTH_PASSWORD;

    if (username === authUsername && password === authPassword) {
      setIsLoggedIn(true);
      navigate(paths.details);
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <section>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <Label field={loginFields.username} />
                <Input field={loginFields.username} />
              </div>
              <div>
                <Label field={loginFields.password} />
                <Input field={loginFields.password} />
              </div>
              {error && (
                <div className="text-red-600 text-sm font-medium">{error}</div>
              )}
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
