import type { FormEvent } from "react";
import { useNavigate } from "react-router";

import { appTitle, userFields } from "~/constants";
import { paths } from "~/routes";
import { useUserData } from "~/contexts";
import type { IUserData } from "~/types";
import type { Route } from "./+types";
import { Input, Label, Select, Button } from "~/components";

export function meta({}: Route.MetaArgs) {
  return [
    { title: `${appTitle} | Health & Activity Recommendations` },
    {
      name: "description",
      content: "Provide details for Health and Activity Recommender",
    },
  ];
}

export default function Details() {
  const navigate = useNavigate();
  const { setUserData } = useUserData();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.values(userFields).reduce(
      (acc, { name }) => ({
        ...acc,
        [name]: formData.get(name),
      }),
      {}
    );

    setUserData(data as IUserData);
    navigate(paths.recommendations);
  };

  return (
    <section>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Personal Details
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <Label field={userFields.height} />
              <div className="flex gap-4">
                <Input field={userFields.height} />
                <Select field={userFields.heightUnit} />
              </div>
              <Label field={userFields.weight} />
              <div className="flex gap-4">
                <Input field={userFields.weight} />
                <Select field={userFields.weightUnit} />
              </div>
              <Label field={userFields.birthDate} />
              <Input field={userFields.birthDate} />
              <Button type="submit">Get recommendations</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
