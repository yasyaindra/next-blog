import { Metadata } from "next";
import getAllUsers from "@/lib/getAllUsers";
import Link from "next/link";

export const metadata: Metadata = {
  title: "All Users",
};

export default async function Users() {
  const usersData: Promise<User[]> = await getAllUsers();

  const users = await usersData;

  const content = (
    <>
      <section>
        <ul>
          {users.map((user) => {
            return (
              <li className="hover:underline">
                <Link href={`/users/${user.id}`}>{user.name}</Link>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );

  return content;
}
