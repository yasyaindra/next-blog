import { getPostsMeta } from "@/lib/posts";
import ListItem from "./ListItem";

export default async function Posts() {
  const posts = await getPostsMeta();

  if (!posts) {
    return <p className="mt-10 text-center">Sorry, no Posts</p>;
  }

  return (
    <section className="mt-6">
      <ul className="w-full list-none p-0"></ul>
    </section>
  );
}
