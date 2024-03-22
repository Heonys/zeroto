import { connectDB } from "@/db/connectdb";
import { getServerSession } from "next-auth";
import authOption from "../api/auth/[...nextauth]/authOptions";
import LoadingSpinner from "../components/LoadingSpinner";
import LikesButton from "./LikesButton";

const SettingPage = async () => {
  const session = await getServerSession(authOption);
  const username = session?.user?.username;

  if (!username) return <LoadingSpinner />;

  const client = await connectDB;
  const db = client.db("test");
  let result = await db.collection("users").find({ username }).toArray();

  return (
    <div>
      <LikesButton />
      <ul>
        {result.map((v) => {
          return <li key={v.email}>{v.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default SettingPage;
