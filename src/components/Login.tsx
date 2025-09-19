"use client";
import { login } from "@/utils/actions";
import Image from "next/image";
import { JSX } from "react";

interface Props {
  type: string;
  
}

export default function Login({ type }: Props): JSX.Element {
  if (type === "google") {
      return (
        <button onClick={() => login(type)} className="border border-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer">
            <Image src="/google.svg" alt="Google Logo" width={20} height={20} className="inline-block mr-2" />
            Sign in with Google
            </button>
      );
  } 
    return <div>Unsupported login type</div>;
}
