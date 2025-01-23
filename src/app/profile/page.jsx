import React from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Profile = async () => {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div>
      <h1 className="mt-10">
        Hey, {user?.given_name}. Welcome to your profile!
      </h1>
    </div>
  );
};

export default Profile;
