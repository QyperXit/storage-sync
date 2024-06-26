"use client";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { SignInButton } from "@clerk/nextjs";
import { useMutation, useQuery } from "convex/react";
import Image from "next/image";

export default function Home() {
  const createFile = useMutation(api.files.createFile);
  const files = useQuery(api.files.getFiles);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {files?.map((file) => {
        return <div key={file._id}>{file.name}</div>;
      })}
      <Button>Hello</Button>
      <SignInButton mode="modal"></SignInButton>

      <Button onClick={() => createFile({ name: "hello chaun" })}>
        click me
      </Button>
    </main>
  );
}
