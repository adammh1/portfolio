import HomeContent from '@/components/HomeContent';
import { getAllProjects } from '@/lib/projects';

export default function Home() {
  return <HomeContent projects={getAllProjects()} />;
}
