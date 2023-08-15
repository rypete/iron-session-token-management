import { useAuth } from "@/features/auth/contexts/AuthContext";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { Children } from "react";

const Profile = () => {
  const auth = useAuth();

  const profile = useQuery({
    enabled: auth.loggedIn,
    queryKey: ["profile"],
    queryFn: () =>
      axios
        .get<{ email: string; phone: string }>("/api/user")
        .then((res) => res.data),
  });

  if (profile.isLoading) return <p>loading</p>;
  if (profile.isError) return <p>error</p>;

  return (
    <div>
      <h2>Profile</h2>
      <p>Email: {profile.data.email}</p>
      <p>Phone: {profile.data.phone}</p>
      <button onClick={auth.logout}>logout</button>
    </div>
  );
};

const Login = () => {
  const auth = useAuth();

  return <button onClick={auth.login}>login</button>;
};

const AuthorizedOnlyContent = () => {
  const auth = useAuth();

  if (auth.loading) return <p>loading</p>;
  if (!auth.loggedIn) return <Login />;

  return <Profile />;
};

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <AuthorizedOnlyContent />
    </main>
  );
}
