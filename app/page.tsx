import HomePageClient from './HomePageClient';
import { getDivisions, getEvents, getHomeContent, getGallery } from '@/lib/content';

export default async function Home() {
  const homeContent = getHomeContent();
  const divisions = getDivisions();
  const events = getEvents();
  const gallery = getGallery();

  return <HomePageClient homeContent={homeContent} divisions={divisions} events={events} gallery={gallery} />;
}
