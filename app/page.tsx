import Blog from "@/components/ui/blog";
import Jumbotron from "@/components/ui/jumbotron";
import { Projects } from "@/components/ui/projects";
import { CareerTimeline } from "@/components/ui/timeline";

export default function Home() {
  return (
    <main className="min-h-screen max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-4">
      <Jumbotron />
      <CareerTimeline />
      {/* <Projects /> */}
      <Blog />
    </main>
  );
}
