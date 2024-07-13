import { Article } from '@prisma/client';
import { DOMAIN } from '@/utils/constants';
import { SingleArticle } from '@/utils/types';


export async function getArticles(pageNumber: string | undefined): Promise<Article[]> {
  try {
    const response = await fetch(`${DOMAIN}/api/articles?pageNumber=${pageNumber}`, { cache: 'no-store' });

    if (!response.ok) {
      throw new Error(`Failed to fetch articles - Status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw new Error('Failed to fetch articles. Please try again later.'); // Optional: Customize error message as needed
  }
}

// Get articles count
export async function getArticlesCount(): Promise<number> {
  const response = await fetch(`${DOMAIN}/api/articles/count`, { cache: 'no-store' });

  if (!response.ok) {
    throw new Error("Failed to get articles count");
  }

  const { count } = await response.json() as { count: number };
  return count;
}

// Get articles based on searchText
export async function getArticlesBasedOnSearch(searchText: string): Promise<Article[]> {
  const response = await fetch(`${DOMAIN}/api/articles/search?searchText=${searchText}`);

  if (!response.ok) {
    throw new Error("Failed to fetch articles");
  }

  return response.json();
}

// Get single article by id
export async function getSingleArticle(articleId: string): Promise<SingleArticle> {
  const response = await fetch(`${DOMAIN}/api/articles/${articleId}`, {
    cache: 'no-store'
  });

  if (!response.ok) {
    throw new Error("Failed to fetch article");
  }

  return response.json();
}