"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

const SignoutButton = () => {
  return <Button onClick={() => authClient.signOut()}>Sign out</Button>;
};

export default SignoutButton;
