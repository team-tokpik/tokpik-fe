import client from '../client';

interface TalksCountResponse {
  count: number;
}

export const getUserTalksCount = async (): Promise<number> => {
  try {
    const response = await client.get<TalksCountResponse>('/users/scraps/topics/count');
    return response.data.count;
  } catch (error) {
    console.error('스크랩 수 조회 중 오류 발생:', error);
    throw error;
  }
};