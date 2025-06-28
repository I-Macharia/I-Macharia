-- Seed photography events
INSERT INTO events (name, slug, category_id, description, event_date, location, client) VALUES
(
    'Sarah & John''s Wedding',
    'sarah-john-wedding',
    (SELECT id FROM categories WHERE slug = 'wedding'),
    'Elegant summer wedding ceremony and reception at the beautiful Lakeside Gardens venue. The celebration featured outdoor ceremony, cocktail hour, and dancing under the stars.',
    '2023-06-15',
    'Lakeside Gardens, Seattle, WA',
    'Sarah & John Miller'
),
(
    'Emma & Mike''s Beach Wedding',
    'emma-mike-beach-wedding',
    (SELECT id FROM categories WHERE slug = 'wedding'),
    'Intimate beach wedding ceremony at sunset with close family and friends. The celebration continued with a beachside reception featuring local cuisine and live music.',
    '2023-08-12',
    'Cannon Beach, OR',
    'Emma & Mike Johnson'
),
(
    'Tech Summit 2023',
    'tech-summit-2023',
    (SELECT id FROM categories WHERE slug = 'corporate'),
    'Annual technology conference featuring keynote speakers, panel discussions, networking sessions, and product demonstrations. Over 500 attendees from the tech industry.',
    '2023-03-10',
    'Convention Center, San Francisco, CA',
    'TechEvents Inc.'
),
(
    'Innovation Expo 2023',
    'innovation-expo-2023',
    (SELECT id FROM categories WHERE slug = 'corporate'),
    'Product launch event showcasing the latest innovations in technology. Featured interactive demonstrations, media interviews, and networking opportunities.',
    '2023-09-05',
    'Innovation Hub, Austin, TX',
    'InnovateCorp'
),
(
    'Corporate Portraits - Johnson & Co',
    'corporate-portraits-johnson-co',
    (SELECT id FROM categories WHERE slug = 'portrait'),
    'Professional executive portrait session for Johnson & Co leadership team. Studio and environmental portraits for website, marketing materials, and press releases.',
    '2023-04-18',
    'Downtown Studio, Portland, OR',
    'Johnson & Co Law Firm'
),
(
    'Miller Family Reunion',
    'miller-family-reunion',
    (SELECT id FROM categories WHERE slug = 'portrait'),
    'Multi-generation family portrait session capturing three generations of the Miller family. Outdoor session in a beautiful park setting with natural lighting.',
    '2023-10-14',
    'Laurelhurst Park, Portland, OR',
    'Miller Family'
),
(
    'Tokyo Adventure 2023',
    'tokyo-adventure-2023',
    (SELECT id FROM categories WHERE slug = 'travel'),
    'Street photography expedition through Tokyo capturing the vibrant city life, neon-lit streets, traditional markets, and modern architecture. A week-long photography journey.',
    '2023-11-08',
    'Tokyo, Japan',
    'Personal Project'
),
(
    'Tuscany Photography Tour',
    'tuscany-photography-tour',
    (SELECT id FROM categories WHERE slug = 'travel'),
    'Landscape photography tour through the rolling hills of Tuscany, capturing vineyard landscapes, historic villages, and golden hour countryside views.',
    '2023-05-20',
    'Tuscany, Italy',
    'Photography Workshop'
),
(
    'Mount Rainier Expedition',
    'mount-rainier-expedition',
    (SELECT id FROM categories WHERE slug = 'nature'),
    'Nature photography expedition to Mount Rainier National Park capturing alpine landscapes, wildflower meadows, glacial views, and wildlife in their natural habitat.',
    '2023-07-22',
    'Mount Rainier National Park, WA',
    'National Geographic Workshop'
);
