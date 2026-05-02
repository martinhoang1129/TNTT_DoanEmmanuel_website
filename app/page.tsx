import HomePageClient from './HomePageClient';
import { getDivisions, getEvents, getHomeContent, getGallery, getAnnouncements, getPopeIntention } from '@/lib/content';

export default async function Home() {
  const homeContent = getHomeContent();
  const divisions = getDivisions();
  const events = getEvents();
  const gallery = getGallery();
  const announcements = getAnnouncements();
  const popeIntention = getPopeIntention();

  return <HomePageClient homeContent={homeContent} divisions={divisions} events={events} gallery={gallery} announcements={announcements} popeIntention={popeIntention} />;
}
