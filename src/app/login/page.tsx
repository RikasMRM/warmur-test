"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginButton() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {
    console.log("onLogin");
  };

  return (
    <div className="flex flex-col items-center justify-center py-2 w-full">
      <div className="mb-4 font-semibold">Login</div>
      <div data-prefix=">" className="text-warning">
        <input
          id="email"
          type="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Email..."
          className="input w-fit max-w-xs bg-transparent p-0 mb-2"
        />
      </div>
      <div data-prefix=">" className="text-success">
        <div>
          <input
            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="Password..."
            className="input w-fit max-w-xs bg-transparent p-0"
          />
        </div>
      </div>
      <div data-prefix="#" className="text-accent">
        <div>
          <button
            onClick={onLogin}
            className={`mt-2 p-1 pl-2 pr-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600`}
          >
            Login
          </button>
        </div>
      </div>
      <div
        data-prefix="~"
        className="bg-warning text-warning-content mt-5 text-sm"
      >
        <div>
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="cursor-pointer underline">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
