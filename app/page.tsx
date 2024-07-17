import Blog from "@/components/ui/blog";
import Jumbotron from "@/components/ui/jumbotron"
import { Projects } from "@/components/ui/projects";

export default function Home() {
  return (
    <main className="min-h-screen max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <Jumbotron />
      <Projects />
      <Blog />
    </main>
  );
}
