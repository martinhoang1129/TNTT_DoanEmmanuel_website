import type { HomeContent } from '@/lib/content';

export const homeContentSchema = {
  label: 'Home Page Content',
  name: 'homeContent',
  fields: [
    {
      name: 'hero.eyebrow',
      label: 'Hero eyebrow text',
      component: 'text'
    },
    {
      name: 'hero.title',
      label: 'Hero title',
      component: 'text'
    },
    {
      name: 'hero.subtitle',
      label: 'Hero subtitle',
      component: 'text'
    },
    {
      name: 'hero.caption',
      label: 'Hero caption',
      component: 'text'
    },
    {
      name: 'about.headline',
      label: 'About headline',
      component: 'text'
    },
    {
      name: 'about.description',
      label: 'About description',
      component: 'textarea'
    }
  ]
};

export const eventSchema = {
  label: 'Event',
  name: 'event',
  fields: [
    { name: 'title', label: 'Title', component: 'text' },
    { name: 'date', label: 'Date', component: 'text' },
    { name: 'type', label: 'Event type', component: 'text' },
    { name: 'description', label: 'Description', component: 'textarea' }
  ]
};

export const divisionSchema = {
  label: 'Division',
  name: 'division',
  fields: [
    { name: 'title', label: 'Title', component: 'text' },
    { name: 'subtitle', label: 'Subtitle', component: 'text' },
    { name: 'motto', label: 'Motto', component: 'text' },
    { name: 'description', label: 'Short description', component: 'textarea' },
    { name: 'details', label: 'Details', component: 'textarea' }
  ]
};

export type TinaHomeContent = HomeContent;
