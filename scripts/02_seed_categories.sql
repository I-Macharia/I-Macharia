-- Seed categories for projects and photography
INSERT INTO categories (name, slug, description, color_from, color_to) VALUES
-- Project categories
('Web Design', 'web-design', 'Modern web design projects and user interfaces', '#3B82F6', '#8B5CF6'),
('Development', 'development', 'Full-stack development and programming projects', '#10B981', '#059669'),
('Branding', 'branding', 'Brand identity and visual design projects', '#F59E0B', '#EF4444'),
('Mobile', 'mobile', 'Mobile app design and development', '#8B5CF6', '#EC4899'),

-- Photography categories  
('Wedding', 'wedding', 'Wedding photography and ceremonies', '#EC4899', '#F43F5E'),
('Corporate', 'corporate', 'Corporate events and business photography', '#3B82F6', '#0EA5E9'),
('Portrait', 'portrait', 'Portrait and headshot photography', '#F59E0B', '#F97316'),
('Travel', 'travel', 'Travel and destination photography', '#10B981', '#14B8A6'),
('Nature', 'nature', 'Nature and landscape photography', '#22C55E', '#84CC16');
