import client from '../client'

export interface RelatedTopic {
  topicId: number;
  type: string;
  title: string;
  scraped: boolean;
}

interface TopicRelatedResponse {
  talkTopics: RelatedTopic[];
}

export const getTopicsTopicIdRelated = async (topicId: number): Promise<TopicRelatedResponse> => {
  try {
    const response = await client.get<TopicRelatedResponse>(`/topics/${topicId}/related`);
    return response.data;
  } catch (error) {
    console.error('관련 토픽 정보 가져오기 오류:', error);
    throw error;
  }
}
