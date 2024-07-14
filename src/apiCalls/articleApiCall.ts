import { Article } from '@prisma/client';
import { DOMAIN } from '@/utils/constants';
import { SingleArticle } from '@/utils/types';

export async function getArticles(pageNumber: string | undefined): Promise<Article[]> {
  try {
    console.log(`Fetching articles from: ${DOMAIN}/api/articles?pageNumber=${pageNumber}`);
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
  try {
    console.log(`Fetching articles count from: ${DOMAIN}/api/articles/count`);
    const response = await fetch(`${DOMAIN}/api/articles/count`, { cache: 'no-store' });

    if (!response.ok) {
      throw new Error("Failed to get articles count");
    }

    const { count } = await response.json() as { count: number };
    return count;
  } catch (error) {
    console.error('Error fetching articles count:', error);
    throw new Error('Failed to get articles count. Please try again later.');
  }
}

// Get articles based on searchText
export async function getArticlesBasedOnSearch(searchText: string): Promise<Article[]> {
  try {
    console.log(`Fetching articles based on search: ${DOMAIN}/api/articles/search?searchText=${searchText}`);
    const response = await fetch(`${DOMAIN}/api/articles/search?searchText=${searchText}`);

    if (!response.ok) {
      throw new Error("Failed to fetch articles");
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching articles based on search:', error);
    throw new Error('Failed to fetch articles based on search. Please try again later.');
  }
}

// Get single article by id
export async function getSingleArticle(articleId: string): Promise<SingleArticle> {
  try {
    console.log(`Fetching single article from: ${DOMAIN}/api/articles/${articleId}`);
    const response = await fetch(`${DOMAIN}/api/articles/${articleId}`, {
      cache: 'no-store'
    });

    if (!response.ok) {
      throw new Error("Failed to fetch article");
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching single article:', error);
    throw new Error('Failed to fetch article. Please try again later.');
  }
}
