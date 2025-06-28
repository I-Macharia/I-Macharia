-- Utility queries for portfolio management

-- Get all projects with their categories and technologies
SELECT 
    p.id,
    p.title,
    p.slug,
    p.short_description,
    c.name as category_name,
    p.technologies,
    p.year,
    p.status
FROM projects p
LEFT JOIN categories c ON p.category_id = c.id
ORDER BY p.year DESC, p.created_at DESC;

-- Get all photography events with image counts
SELECT 
    e.id,
    e.name,
    e.slug,
    c.name as category_name,
    e.event_date,
    e.location,
    e.client,
    COUNT(i.id) as image_count
FROM events e
LEFT JOIN categories c ON e.category_id = c.id
LEFT JOIN images i ON e.id = i.event_id AND i.status = 'published'
GROUP BY e.id, e.name, e.slug, c.name, e.event_date, e.location, e.client
ORDER BY e.event_date DESC;

-- Get images by event with details
SELECT 
    i.id,
    i.title,
    i.description,
    i.filename,
    i.file_path,
    i.aspect_ratio,
    e.name as event_name,
    c.name as category_name,
    i.taken_at
FROM images i
JOIN events e ON i.event_id = e.id
JOIN categories c ON i.category_id = c.id
WHERE i.status = 'published'
ORDER BY e.event_date DESC, i.taken_at ASC;

-- Get featured images for homepage
SELECT 
    i.id,
    i.title,
    i.file_path,
    e.name as event_name,
    c.name as category_name
FROM images i
JOIN events e ON i.event_id = e.id
JOIN categories c ON i.category_id = c.id
WHERE i.is_featured = true AND i.status = 'published'
ORDER BY i.created_at DESC
LIMIT 6;

-- Get project statistics
SELECT 
    c.name as category,
    COUNT(p.id) as project_count,
    MIN(p.year) as earliest_year,
    MAX(p.year) as latest_year
FROM categories c
LEFT JOIN projects p ON c.id = p.category_id AND p.status = 'published'
WHERE c.slug IN ('web-design', 'development', 'branding', 'mobile')
GROUP BY c.id, c.name
ORDER BY project_count DESC;

-- Get photography statistics
SELECT 
    c.name as category,
    COUNT(DISTINCT e.id) as event_count,
    COUNT(i.id) as image_count,
    MIN(e.event_date) as earliest_event,
    MAX(e.event_date) as latest_event
FROM categories c
LEFT JOIN events e ON c.id = e.category_id AND e.status = 'published'
LEFT JOIN images i ON e.id = i.event_id AND i.status = 'published'
WHERE c.slug IN ('wedding', 'corporate', 'portrait', 'travel', 'nature')
GROUP BY c.id, c.name
ORDER BY image_count DESC;

-- Search projects by technology
SELECT 
    p.title,
    p.slug,
    p.technologies,
    c.name as category
FROM projects p
LEFT JOIN categories c ON p.category_id = c.id
WHERE 'React' = ANY(p.technologies)
ORDER BY p.year DESC;

-- Get recent uploads
SELECT 
    'project' as type,
    p.title as name,
    p.created_at,
    c.name as category
FROM projects p
LEFT JOIN categories c ON p.category_id = c.id
WHERE p.status = 'published'

UNION ALL

SELECT 
    'image' as type,
    i.title as name,
    i.created_at,
    c.name as category
FROM images i
LEFT JOIN categories c ON i.category_id = c.id
WHERE i.status = 'published'

ORDER BY created_at DESC
LIMIT 10;
