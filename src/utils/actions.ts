"use server";

import { signIn, signOut } from "@/auth";

export const login = async (type: string) => {
  await signIn(type, { redirectTo: "/profile" });
};

export const logout = async () => {
  await signOut({ redirectTo: "/" });
};