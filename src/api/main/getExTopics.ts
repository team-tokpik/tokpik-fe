import client from '../client'
import { TopicRequestBody } from '@/types/topicRequestBody';

interface Topic {
  topicId: number;
  title: string;
  subtitle: string;
  topicTag: string;
  placeTag: string;
  scraped: boolean;
}

interface TopicResponse {
  topics: Topic[];
}

export const getExTopics = async (): Promise<TopicResponse> => {
  try {
    const response = await client.get<TopicResponse>('/ex/topics');
    return response.data;
  } catch (error) {
    console.error('토픽 정보 가져오기 오류:', error);
    throw error;
  }
}
