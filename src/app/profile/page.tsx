import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

const Page = async () => {
  return (
    <section className="py-24">
      <div className="container">
        <h1 className="text-2xl font-bold">Profile</h1>
      </div>
    </section>
  );
};

export default Page;
