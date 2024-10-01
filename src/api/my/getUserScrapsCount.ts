import client from '../client';

interface ScrapsCountResponse {
  count: number;
}

export const getUserScrapsCount = async (): Promise<number> => {
  try {
    const response = await client.get<ScrapsCountResponse>('/users/scraps/count');
    return response.data.count;
  } catch (error) {
    console.error('스크랩 수 조회 중 오류 발생:', error);
    throw error;
  }
};