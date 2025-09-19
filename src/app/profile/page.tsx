import { auth } from "@/auth";
import { SignOutButton } from "@/components/SignoutButton";
import Image from "next/image";

export default async function UserInfo() {
  const session = await auth();

  if (!session?.user) {
    return (
      <div className="max-w-md mx-auto mt-12 p-6 bg-gray-900 text-gray-200 rounded-2xl shadow-lg border border-gray-800 text-center">
        <h1 className="text-xl font-semibold mb-2">Not Signed In</h1>
        <p className="text-gray-400">Please sign in to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800">
      <div className="flex items-center gap-4">
        {session.user.image && (
          <Image
            src={session.user.image}
            width={64}
            height={64}
            alt={session.user.name ?? "Avatar"}
            className="rounded-full border-2 border-purple-500 shadow-sm"
          />
        )}
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            {session.user.name}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            {session.user.email}
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-2">
        <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Signed in with
          </span>
          <p className="text-gray-800 dark:text-gray-200 font-medium">
            Google Account
          </p>
        </div>
      </div>
      <SignOutButton />
    </div>
  );
}
