import client from '../client'

export const postUsersScrapsScrapIdTopicsTopicId = async (scrapId: number, topicId: number): Promise<void> => {
  try {
    await client.post(`/users/scraps/${scrapId}/topics/${topicId}`);
  } catch (error) {
    console.error('스크랩에 토픽 추가 오류:', error);
    throw error;
  }
}
