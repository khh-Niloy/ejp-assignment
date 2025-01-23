import getAllPost from "@/lib/getAllPost";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default async function Home() {
  const data = await getAllPost();

  return (
    <div>
      <h1 className="text-center font-semibold text-2xl py-10">
        All Blog Posts
      </h1>
      <div className="grid grid-cols-5 gap-4 pb-16">
        {data.map((e) => (
          <Link href={`/blog/${e.id}`} key={e.id}>
            <Card
              key={e.id}
              className="h-full hover:bg-[#212121] hover:text-white hover:shadow-2xl hover:scale-[1.05] duration-300"
            >
              <CardHeader>
                <CardTitle>{e.title}</CardTitle>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
