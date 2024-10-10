import client from '../client'

export interface DetailItem {
  itemTitle: string;
  itemContent: string;
}

interface TopicDetailsResponse {
  details: DetailItem[];
  scraped: boolean;
}

export const getTopicsTopicIdDetails = async (topicId: number): Promise<TopicDetailsResponse> => {
  try {
    const response = await client.get<TopicDetailsResponse>(`ex/topics/${topicId}/details`);
    return response.data;
  } catch (error) {
    console.error('토픽 상세 정보 가져오기 오류:', error);
    throw error;
  }
}
