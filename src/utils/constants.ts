export const ARTICLE_PER_PAGE = 6;

const PRODUCTION_DOMAIN = process.env.PRODUCTION_DOMAIN; // استخدم متغير البيئة للدومين في الإنتاج
const DEVELOPMENT_DOMAIN = "http://localhost:3000";

export const DOMAIN = process.env.NODE_ENV === 'production' 
    ? PRODUCTION_DOMAIN
    : DEVELOPMENT_DOMAIN;
