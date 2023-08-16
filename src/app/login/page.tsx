import Card from "@/components/card";
import Form from "@/components/form";
import { getServerSession } from "next-auth/next";
import { options } from "@/lib/auth";

export default async function Login() {
  const session = await getServerSession(options);
  return (
    <main className="flex min-h-[75vh] items-center justify-center">
      {session ? <Card user={session.user?.name} /> : <Form />}
    </main>
  );
}
