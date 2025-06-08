-- Seed photography images
INSERT INTO images (title, description, filename, file_path, aspect_ratio, event_id, category_id, alt_text, taken_at) VALUES
-- Sarah & John's Wedding
(
    'Ceremony Moments',
    'Beautiful ceremony moments at Lakeside Gardens with natural lighting and emotional expressions',
    'sarah-john-ceremony-01.jpg',
    '/images/weddings/sarah-john/ceremony-01.jpg',
    'portrait',
    (SELECT id FROM events WHERE slug = 'sarah-john-wedding'),
    (SELECT id FROM categories WHERE slug = 'wedding'),
    'Bride and groom exchanging vows during outdoor wedding ceremony',
    '2023-06-15 15:30:00'
),
(
    'Reception Dance',
    'First dance and celebration moments during the evening reception',
    'sarah-john-reception-01.jpg',
    '/images/weddings/sarah-john/reception-01.jpg',
    'landscape',
    (SELECT id FROM events WHERE slug = 'sarah-john-wedding'),
    (SELECT id FROM categories WHERE slug = 'wedding'),
    'Couple dancing during wedding reception with guests watching',
    '2023-06-15 20:15:00'
),

-- Emma & Mike's Beach Wedding
(
    'Beach Ceremony',
    'Intimate beach wedding ceremony at sunset with ocean backdrop',
    'emma-mike-ceremony-01.jpg',
    '/images/weddings/emma-mike/ceremony-01.jpg',
    'landscape',
    (SELECT id FROM events WHERE slug = 'emma-mike-beach-wedding'),
    (SELECT id FROM categories WHERE slug = 'wedding'),
    'Beach wedding ceremony at sunset with ocean waves in background',
    '2023-08-12 18:45:00'
),
(
    'Sunset Portraits',
    'Golden hour couple portraits on the beach with dramatic sunset lighting',
    'emma-mike-portraits-01.jpg',
    '/images/weddings/emma-mike/portraits-01.jpg',
    'portrait',
    (SELECT id FROM events WHERE slug = 'emma-mike-beach-wedding'),
    (SELECT id FROM categories WHERE slug = 'wedding'),
    'Romantic couple portrait silhouetted against sunset on beach',
    '2023-08-12 19:20:00'
),

-- Tech Summit 2023
(
    'Keynote Speaker',
    'Opening keynote presentation with dynamic stage lighting and engaged audience',
    'tech-summit-keynote-01.jpg',
    '/images/corporate/tech-summit/keynote-01.jpg',
    'landscape',
    (SELECT id FROM events WHERE slug = 'tech-summit-2023'),
    (SELECT id FROM categories WHERE slug = 'corporate'),
    'Keynote speaker presenting on stage at technology conference',
    '2023-03-10 09:15:00'
),
(
    'Networking Session',
    'Attendees networking during conference break with natural interactions',
    'tech-summit-networking-01.jpg',
    '/images/corporate/tech-summit/networking-01.jpg',
    'portrait',
    (SELECT id FROM events WHERE slug = 'tech-summit-2023'),
    (SELECT id FROM categories WHERE slug = 'corporate'),
    'Conference attendees networking and discussing during break',
    '2023-03-10 11:30:00'
),

-- Innovation Expo 2023
(
    'Product Showcase',
    'New product launch presentation with interactive displays and demonstrations',
    'innovation-expo-showcase-01.jpg',
    '/images/corporate/innovation-expo/showcase-01.jpg',
    'landscape',
    (SELECT id FROM events WHERE slug = 'innovation-expo-2023'),
    (SELECT id FROM categories WHERE slug = 'corporate'),
    'Product demonstration at innovation expo with interactive displays',
    '2023-09-05 14:20:00'
),
(
    'Demo Station',
    'Interactive product demonstration with engaged visitors and hands-on experience',
    'innovation-expo-demo-01.jpg',
    '/images/corporate/innovation-expo/demo-01.jpg',
    'portrait',
    (SELECT id FROM events WHERE slug = 'innovation-expo-2023'),
    (SELECT id FROM categories WHERE slug = 'corporate'),
    'Visitors trying interactive product demo at expo booth',
    '2023-09-05 16:45:00'
),

-- Corporate Portraits - Johnson & Co
(
    'Executive Headshot',
    'Professional executive portrait with clean studio lighting and corporate styling',
    'johnson-co-executive-01.jpg',
    '/images/portraits/johnson-co/executive-01.jpg',
    'portrait',
    (SELECT id FROM events WHERE slug = 'corporate-portraits-johnson-co'),
    (SELECT id FROM categories WHERE slug = 'portrait'),
    'Professional headshot of company executive in business attire',
    '2023-04-18 10:30:00'
),
(
    'Team Photo',
    'Executive team group portrait with professional lighting and composition',
    'johnson-co-team-01.jpg',
    '/images/portraits/johnson-co/team-01.jpg',
    'landscape',
    (SELECT id FROM events WHERE slug = 'corporate-portraits-johnson-co'),
    (SELECT id FROM categories WHERE slug = 'portrait'),
    'Group portrait of executive team in professional business setting',
    '2023-04-18 11:15:00'
),

-- Miller Family Reunion
(
    'Family Gathering',
    'Multi-generation family portrait in beautiful park setting with natural lighting',
    'miller-family-reunion-01.jpg',
    '/images/portraits/miller-family/reunion-01.jpg',
    'landscape',
    (SELECT id FROM events WHERE slug = 'miller-family-reunion'),
    (SELECT id FROM categories WHERE slug = 'portrait'),
    'Large family group portrait with multiple generations in park setting',
    '2023-10-14 15:00:00'
),

-- Tokyo Adventure 2023
(
    'Street Markets',
    'Bustling street markets in Tokyo with vibrant colors and authentic atmosphere',
    'tokyo-street-markets-01.jpg',
    '/images/travel/tokyo/markets-01.jpg',
    'landscape',
    (SELECT id FROM events WHERE slug = 'tokyo-adventure-2023'),
    (SELECT id FROM categories WHERE slug = 'travel'),
    'Busy street market scene in Tokyo with vendors and shoppers',
    '2023-11-08 12:30:00'
),
(
    'Neon Nights',
    'Nighttime neon street photography capturing Tokyo''s electric atmosphere',
    'tokyo-neon-nights-01.jpg',
    '/images/travel/tokyo/neon-01.jpg',
    'portrait',
    (SELECT id FROM events WHERE slug = 'tokyo-adventure-2023'),
    (SELECT id FROM categories WHERE slug = 'travel'),
    'Neon-lit street scene in Tokyo at night with colorful signs',
    '2023-11-08 21:45:00'
),

-- Tuscany Photography Tour
(
    'Countryside Views',
    'Rolling hills and vineyard landscapes in golden hour lighting',
    'tuscany-countryside-01.jpg',
    '/images/travel/tuscany/countryside-01.jpg',
    'landscape',
    (SELECT id FROM events WHERE slug = 'tuscany-photography-tour'),
    (SELECT id FROM categories WHERE slug = 'travel'),
    'Rolling hills and vineyards in Tuscany countryside during golden hour',
    '2023-05-20 18:30:00'
),

-- Mount Rainier Expedition
(
    'Mountain Vista',
    'Sunrise at Mount Rainier with alpine glow and pristine wilderness',
    'mount-rainier-vista-01.jpg',
    '/images/nature/mount-rainier/vista-01.jpg',
    'landscape',
    (SELECT id FROM events WHERE slug = 'mount-rainier-expedition'),
    (SELECT id FROM categories WHERE slug = 'nature'),
    'Mount Rainier peak at sunrise with alpine glow and clear sky',
    '2023-07-22 06:15:00'
),
(
    'Alpine Lake',
    'Crystal clear alpine lake with mountain reflections and pristine wilderness',
    'mount-rainier-lake-01.jpg',
    '/images/nature/mount-rainier/lake-01.jpg',
    'portrait',
    (SELECT id FROM events WHERE slug = 'mount-rainier-expedition'),
    (SELECT id FROM categories WHERE slug = 'nature'),
    'Alpine lake reflecting mountain peaks with crystal clear water',
    '2023-07-22 14:20:00'
);
