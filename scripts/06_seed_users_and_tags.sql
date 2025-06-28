-- Seed user information
INSERT INTO users (name, email, bio, website, social_links) VALUES
(
    'Alex Johnson',
    'alex@portfolio.com',
    'Passionate photographer and web developer with over 8 years of experience capturing life''s precious moments and creating digital experiences. Specializing in wedding photography, corporate events, and modern web development.',
    'https://alexjohnson.photography',
    '{
        "instagram": "https://instagram.com/alexjohnsonphoto",
        "twitter": "https://twitter.com/alexjohnsondev",
        "linkedin": "https://linkedin.com/in/alexjohnson",
        "github": "https://github.com/alexjohnson"
    }'
);

-- Seed tags for flexible categorization
INSERT INTO tags (name, slug) VALUES
('React', 'react'),
('Next.js', 'nextjs'),
('TypeScript', 'typescript'),
('Node.js', 'nodejs'),
('PostgreSQL', 'postgresql'),
('MongoDB', 'mongodb'),
('Tailwind CSS', 'tailwind-css'),
('Vue.js', 'vuejs'),
('Python', 'python'),
('JavaScript', 'javascript'),
('Figma', 'figma'),
('Adobe Creative Suite', 'adobe-creative-suite'),
('Wedding Photography', 'wedding-photography'),
('Corporate Events', 'corporate-events'),
('Portrait Photography', 'portrait-photography'),
('Travel Photography', 'travel-photography'),
('Nature Photography', 'nature-photography'),
('Street Photography', 'street-photography'),
('Landscape Photography', 'landscape-photography'),
('Event Photography', 'event-photography');

-- Link projects to tags
INSERT INTO project_tags (project_id, tag_id) VALUES
-- E-commerce Platform
((SELECT id FROM projects WHERE slug = 'ecommerce-platform'), (SELECT id FROM tags WHERE slug = 'react')),
((SELECT id FROM projects WHERE slug = 'ecommerce-platform'), (SELECT id FROM tags WHERE slug = 'nextjs')),
((SELECT id FROM projects WHERE slug = 'ecommerce-platform'), (SELECT id FROM tags WHERE slug = 'tailwind-css')),
((SELECT id FROM projects WHERE slug = 'ecommerce-platform'), (SELECT id FROM tags WHERE slug = 'postgresql')),

-- Task Management App
((SELECT id FROM projects WHERE slug = 'task-management-app'), (SELECT id FROM tags WHERE slug = 'typescript')),
((SELECT id FROM projects WHERE slug = 'task-management-app'), (SELECT id FROM tags WHERE slug = 'nodejs')),
((SELECT id FROM projects WHERE slug = 'task-management-app'), (SELECT id FROM tags WHERE slug = 'mongodb')),
((SELECT id FROM projects WHERE slug = 'task-management-app'), (SELECT id FROM tags WHERE slug = 'react')),

-- Brand Identity System
((SELECT id FROM projects WHERE slug = 'brand-identity-system'), (SELECT id FROM tags WHERE slug = 'figma')),
((SELECT id FROM projects WHERE slug = 'brand-identity-system'), (SELECT id FROM tags WHERE slug = 'adobe-creative-suite')),

-- Creative Agency Website
((SELECT id FROM projects WHERE slug = 'creative-agency-site'), (SELECT id FROM tags WHERE slug = 'vuejs')),
((SELECT id FROM projects WHERE slug = 'creative-agency-site'), (SELECT id FROM tags WHERE slug = 'javascript')),

-- Analytics Dashboard
((SELECT id FROM projects WHERE slug = 'analytics-dashboard'), (SELECT id FROM tags WHERE slug = 'react')),
((SELECT id FROM projects WHERE slug = 'analytics-dashboard'), (SELECT id FROM tags WHERE slug = 'python')),
((SELECT id FROM projects WHERE slug = 'analytics-dashboard'), (SELECT id FROM tags WHERE slug = 'postgresql'));
