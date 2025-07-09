import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { posts } from "@/lib/utils";
import { useParams } from "react-router-dom";

export default function PostDetail() {
  const { postId } = useParams();
  const post = posts.find((post) => post.id === Number(postId));
  if (!post) {
    return <div>Post not found</div>;
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
      </CardHeader>
      <CardContent className="text-justify">{post.content}</CardContent>
    </Card>

    // <div className="mt-8 p-4 border rounded bg-gray-100">
    //   <h2 className="text-2xl font-semibold mb-2">Post Detail</h2>
    //   <p>
    //     Showing details for post ID: <span className="font-mono">{postId}</span>
    //   </p>
    // </div>
  );
}
