import HomePageClient from './HomePageClient';
import { getDivisions, getEvents, getHomeContent } from '@/lib/content';

export default async function Home() {
  const homeContent = getHomeContent();
  const divisions = getDivisions();
  const events = getEvents();

  return <HomePageClient homeContent={homeContent} divisions={divisions} events={events} />;
}
