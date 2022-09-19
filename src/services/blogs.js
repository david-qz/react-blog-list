import { client, checkError } from './client';

export async function getBlogs() {
  const response = await client
    .from('blogs')
    .select('*, author: authors(name)');

  return checkError(response);
}
