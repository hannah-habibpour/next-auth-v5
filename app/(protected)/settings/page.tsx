"use client";

import { useCurrentUser } from "@/hooks/use-current-user";
import { signOut } from "next-auth/react";

export default function SettingsPage() {
  const user = useCurrentUser();

  const onClick = () => {
    signOut();
  };

  return (
    <div className="bg-white p-10 rounded-xl">
      {/* {JSON.stringify(user)} */}
      <button onClick={onClick} type="submit">
        Sign out
      </button>
    </div>
  );
}
