import Form from "@/components/form";
import { getServerSession } from "next-auth/next";
import { options } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Login() {
  const session = await getServerSession(options);
  return (
    <main className="flex min-h-[75vh] items-center justify-center">
      {session ? redirect("/profile") : <Form />}
    </main>
  );
}
