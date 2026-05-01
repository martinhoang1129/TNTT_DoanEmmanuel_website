import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type HomeContent = {
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    caption: string;
    primaryCta: {
      label: string;
      href: string;
    };
    secondaryCta: {
      label: string;
      href: string;
    };
  };
  about: {
    headline: string;
    description: string;
    cards: Array<{ title: string; description: string; href: string }>;
  };
  divisionsIntro: {
    eyebrow: string;
    headline: string;
    description: string;
  };
  eventsIntro: {
    eyebrow: string;
    headline: string;
    description: string;
  };
  join: {
    eyebrow: string;
    headline: string;
    description: string;
  };
};

export type EventItem = {
  slug: string;
  title: string;
  date: string;
  type: string;
  description: string;
};

export type DivisionItem = {
  slug: string;
  title: string;
  subtitle: string;
  color: string;
  motto: string;
  description: string;
  details: string;
};

const contentRoot = path.join(process.cwd(), 'content');

export function getHomeContent(): HomeContent {
  const filePath = path.join(contentRoot, 'site.json');
  const raw = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(raw) as HomeContent;
}

export function getEvents(): EventItem[] {
  const eventsDir = path.join(contentRoot, 'events');
  const files = fs.readdirSync(eventsDir).filter((file) => file.endsWith('.md'));
  const events = files.map((file) => {
    const raw = fs.readFileSync(path.join(eventsDir, file), 'utf8');
    const { data } = matter(raw);

    return {
      slug: file.replace(/\.md$/, ''),
      title: String(data.title),
      date: String(data.date),
      type: String(data.type),
      description: String(data.description)
    };
  });

  return events.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getDivisions(): DivisionItem[] {
  const divisionsDir = path.join(contentRoot, 'divisions');
  const files = fs.readdirSync(divisionsDir).filter((file) => file.endsWith('.md'));
  return files.map((file) => {
    const raw = fs.readFileSync(path.join(divisionsDir, file), 'utf8');
    const { data, content } = matter(raw);

    return {
      slug: file.replace(/\.md$/, ''),
      title: String(data.title),
      subtitle: String(data.subtitle),
      color: String(data.color),
      motto: String(data.motto),
      description: String(data.description),
      details: String(content).trim()
    };
  });
}

export function getDivisionBySlug(slug: string): DivisionItem | null {
  const divisions = getDivisions();
  return divisions.find((division) => division.slug === slug) ?? null;
}

export function getDivisionSlugs(): string[] {
  return getDivisions().map((division) => division.slug);
}
