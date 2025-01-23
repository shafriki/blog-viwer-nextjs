import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  // If user is not authenticated, redirect to login
  if (!user) {
    redirect("/api/auth/login");
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="bg-gradient-to-r my-56 from-[#1B1B1D] via-[#272730] to-[#6E2B4E] text-white shadow rounded-lg p-6">
        <div className="space-y-4">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl my-2">Hi,{user.given_name} {user.family_name} Welcome To Your Profile</h1>
            <h2 className="text-lg text-white font-semibold">Profile Information</h2>
            <p className="text-white">Email: {user.email}</p>
            <p className="text-white">
              Name: {user.given_name} {user.family_name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}