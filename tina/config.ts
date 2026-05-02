import { defineConfig } from 'tinacms';

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  'main';

export default defineConfig({
  branch,

  // When you set up Tina Cloud, paste your client ID and token here.
  // Get these at https://app.tina.io after creating a project.
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || '',
  token: process.env.TINA_TOKEN || '',

  build: {
    outputFolder: 'admin',
    publicFolder: 'public'
  },

  media: {
    tina: {
      mediaRoot: 'uploads',
      publicFolder: 'public'
    }
  },

  schema: {
    collections: [
      // ─── Site Content (home page hero, about, join section) ───
      {
        name: 'site',
        label: 'Site Content',
        path: 'content',
        format: 'json',
        ui: {
          allowedActions: {
            create: false,
            delete: false
          },
          global: true
        },
        match: {
          include: 'site'
        },
        fields: [
          {
            type: 'object',
            name: 'hero',
            label: 'Hero Section',
            fields: [
              { type: 'string', name: 'eyebrow', label: 'Eyebrow Text' },
              { type: 'string', name: 'title', label: 'Title' },
              { type: 'string', name: 'subtitle', label: 'Subtitle', ui: { component: 'textarea' } },
              { type: 'string', name: 'caption', label: 'Caption' }
            ]
          },
          {
            type: 'object',
            name: 'about',
            label: 'About Section',
            fields: [
              { type: 'string', name: 'headline', label: 'Headline' },
              { type: 'string', name: 'description', label: 'Description', ui: { component: 'textarea' } }
            ]
          },
          {
            type: 'object',
            name: 'divisionIntro',
            label: 'Division Intro',
            fields: [
              { type: 'string', name: 'headline', label: 'Headline' },
              { type: 'string', name: 'description', label: 'Description', ui: { component: 'textarea' } }
            ]
          },
          {
            type: 'object',
            name: 'eventIntro',
            label: 'Events Intro',
            fields: [
              { type: 'string', name: 'headline', label: 'Headline' },
              { type: 'string', name: 'description', label: 'Description', ui: { component: 'textarea' } }
            ]
          },
          {
            type: 'object',
            name: 'join',
            label: 'Join Section',
            fields: [
              { type: 'string', name: 'headline', label: 'Headline' },
              { type: 'string', name: 'description', label: 'Description', ui: { component: 'textarea' } }
            ]
          }
        ]
      },

      // ─── Events ───
      {
        name: 'event',
        label: 'Events',
        path: 'content/events',
        format: 'md',
        fields: [
          { type: 'string', name: 'title', label: 'Event Title', isTitle: true, required: true },
          { type: 'datetime', name: 'date', label: 'Event Date', required: true },
          {
            type: 'string',
            name: 'type',
            label: 'Event Type',
            options: ['meeting', 'celebration', 'retreat', 'service', 'training', 'other'],
            required: true
          },
          { type: 'string', name: 'description', label: 'Description', ui: { component: 'textarea' }, required: true },
          { type: 'image', name: 'image', label: 'Event Image (optional)' },
          { type: 'rich-text', name: 'body', label: 'Full Details', isBody: true }
        ]
      },

      // ─── Divisions ───
      {
        name: 'division',
        label: 'Divisions (Ngành)',
        path: 'content/divisions',
        format: 'md',
        fields: [
          { type: 'string', name: 'title', label: 'Division Name', isTitle: true, required: true },
          { type: 'string', name: 'subtitle', label: 'Subtitle (e.g. age range)' },
          {
            type: 'string',
            name: 'color',
            label: 'Theme Color',
            options: ['green', 'blue', 'yellow', 'brown', 'red'],
            required: true
          },
          { type: 'string', name: 'motto', label: 'Motto' },
          { type: 'string', name: 'description', label: 'Short Description', ui: { component: 'textarea' }, required: true },
          { type: 'string', name: 'details', label: 'Detailed Description', ui: { component: 'textarea' } },
          { type: 'image', name: 'image', label: 'Division Photo (optional)' },
          { type: 'rich-text', name: 'body', label: 'Additional Content', isBody: true }
        ]
      },

      // ─── Resources / Training ───
      {
        name: 'resource',
        label: 'Resources & Training',
        path: 'content/resources',
        format: 'md',
        fields: [
          { type: 'string', name: 'title', label: 'Resource Title', isTitle: true, required: true },
          {
            type: 'string',
            name: 'category',
            label: 'Category',
            options: ['training', 'document', 'guide', 'media', 'link'],
            required: true
          },
          { type: 'string', name: 'description', label: 'Description', ui: { component: 'textarea' } },
          { type: 'string', name: 'externalUrl', label: 'External Link (Google Drive, etc.)' },
          { type: 'image', name: 'file', label: 'Uploaded File (optional)' },
          { type: 'rich-text', name: 'body', label: 'Content', isBody: true }
        ]
      },

      // ─── Announcements ───
      {
        name: 'announcements',
        label: 'Announcements',
        path: 'content',
        format: 'json',
        ui: {
          allowedActions: {
            create: false,
            delete: false
          },
          global: true
        },
        match: {
          include: 'announcements'
        },
        fields: [
          {
            type: 'object',
            name: 'items',
            label: 'Announcements',
            list: true,
            ui: {
              itemProps: (item: Record<string, string>) => ({ label: item?.title || 'Announcement' })
            },
            fields: [
              { type: 'string', name: 'title', label: 'Title', required: true },
              { type: 'string', name: 'message', label: 'Message', ui: { component: 'textarea' }, required: true },
              { type: 'datetime', name: 'date', label: 'Date' },
              { type: 'boolean', name: 'pinned', label: 'Pin to Top' }
            ]
          }
        ]
      },

      // ─── Pope's Monthly Prayer Intention ───
      {
        name: 'popeIntention',
        label: "Pope's Prayer Intention",
        path: 'content',
        format: 'json',
        ui: {
          allowedActions: {
            create: false,
            delete: false
          },
          global: true
        },
        match: {
          include: 'pope-intention'
        },
        fields: [
          { type: 'string', name: 'month', label: 'Month & Year (e.g. May 2026)', required: true },
          { type: 'string', name: 'title', label: 'Intention Title', required: true },
          { type: 'string', name: 'text', label: 'Intention Text', ui: { component: 'textarea' }, required: true },
          { type: 'string', name: 'source', label: 'Source (e.g. Pope Leo XIV — USCCB Monthly Intentions)' },
          { type: 'string', name: 'sourceUrl', label: 'Source URL (e.g. https://www.usccb.org/...)' }
        ]
      },

      // ─── Instagram Gallery ───
      {
        name: 'gallery',
        label: 'Instagram Gallery',
        path: 'content',
        format: 'json',
        ui: {
          allowedActions: {
            create: false,
            delete: false
          },
          global: true
        },
        match: {
          include: 'gallery'
        },
        fields: [
          { type: 'string', name: 'instagramHandle', label: 'Instagram Handle (without @)' },
          {
            type: 'object',
            name: 'posts',
            label: 'Featured Instagram Posts',
            list: true,
            ui: {
              itemProps: (item: Record<string, string>) => ({ label: item?.caption || 'Instagram Post' })
            },
            fields: [
              { type: 'string', name: 'url', label: 'Instagram Post URL (e.g. https://www.instagram.com/p/ABC123/)' },
              { type: 'string', name: 'caption', label: 'Caption (optional — for your reference)' }
            ]
          }
        ]
      }
    ]
  }
});
