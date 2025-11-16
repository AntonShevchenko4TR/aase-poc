import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

import { useUserData } from "~/contexts";
import { paths } from "~/routes";

export default function ProtectedLayout() {
  const navigate = useNavigate();
  const { isLoggedIn } = useUserData();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate(paths.login);
    }
  }, [isLoggedIn, navigate]);

  if (!isLoggedIn) {
    return null;
  }

  return <Outlet />;
}
