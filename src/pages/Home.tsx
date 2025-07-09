import { Navbar } from "@/components/Navbar";

export function Home() {
  return (
    <div className="flex flex-col gap-10 items-center">
      <Navbar />
      <h2 className="text-4xl font-bold">Home Page</h2>
      <p>This is the Home page. Click on a post to see its details.</p>
    </div>
  );
}
