import getAllPost from "@/lib/getAllPost";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function Home() {
  const data = await getAllPost();

  return (
    <div>
      <h1 className="text-center font-semibold text-2xl py-10">
        All Blog Posts
      </h1>
      <div className="grid grid-cols-5 gap-4 pb-16">
        {data.map((e) => (
          <Card
            key={e.id}
            className="hover:bg-[#212121] hover:text-white hover:shadow-2xl hover:scale-[1.05] duration-300"
          >
            <CardHeader>
              <CardTitle>{e.title}</CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
