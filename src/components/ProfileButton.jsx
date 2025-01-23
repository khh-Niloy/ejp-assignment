"use client";

import React from "react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useRouter } from "next/navigation";

const ProfileButton = () => {
  const { isAuthenticated } = useKindeBrowserClient();
  const router = useRouter();

  const handleClick = () => {
    if (!isAuthenticated) {
      return router.push("/api/auth/login?post_login_redirect_url=/");
    }
    router.push("/profile");
  };

  return (
    <div>
      <button onClick={handleClick}>Profile</button>
    </div>
  );
};

export default ProfileButton;
