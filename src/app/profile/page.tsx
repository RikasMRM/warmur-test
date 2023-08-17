import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { options } from "@/lib/auth";

const SIGN_OUT_URL = `https://${process.env.NEXT_PUBLIC_AZURE_AD_B2C_TENANT_NAME}.b2clogin.com/${process.env.NEXT_PUBLIC_AZURE_AD_B2C_TENANT_NAME}.onmicrosoft.com/${process.env.NEXT_PUBLIC_AZURE_AD_B2C_PRIMARY_USER_FLOW}/oauth2/v2.0/logout?post_logout_redirect_uri=${process.env.NEXT_PUBLIC_POST_LOGOUT_REDIRECT_URI}`;

const Page = async () => {
  const session = await getServerSession(options);

  return (
    <>
      {session ? (
        <section className="py-24 flex flex-col items-center">
          <h1 className="text-2xl font-bold  mb-10">Profile</h1>

          <div className="flex flex-col items-center justify-center mb-10 py-5 max-w-xs w-full bg-white shadow-lg rounded-lg font-bold text-xl">
            <div className="mb-2">Name : {session?.user?.name}</div>
            <div>Email : {session?.user?.email}</div>
          </div>
          <div>
            <a className="bg-white py-3 px-5 bg-opacity-80 backdrop-blur-[0.5rem] text-red-500 border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950" href={SIGN_OUT_URL}>
              Sign Out
            </a>
          </div>
        </section>
      ) : (
        redirect("/login")
      )}
    </>
  );
};

export default Page;
