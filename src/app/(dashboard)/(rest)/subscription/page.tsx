"use client";

import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useTRPC } from "@/trpc/client";

const Page = () => {
  const trpc = useTRPC();
  const testAI = useMutation(
    trpc.testAi.mutationOptions({
      onSuccess: () => {
        toast.success("Succcesss");
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }),
  );

  return (
    <div>
      <Button onClick={() => testAI.mutate()}>Test AI</Button>
    </div>
  );
};

export default Page;
