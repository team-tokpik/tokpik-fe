import client from '../client'

interface PostUsersScrapRequest {
  scrapName: string;
}

interface PostUsersScrapResponse {
  scrapId: number;
}

export const postUsersScrap = async (scrapName: string): Promise<PostUsersScrapResponse> => {
  try {
    const response = await client.post<PostUsersScrapResponse>('/users/scraps', {
      scrapName: scrapName
    });
    return response.data;
  } catch (error) {
    console.error('새 스크랩 생성 오류:', error);
    throw error;
  }
}
