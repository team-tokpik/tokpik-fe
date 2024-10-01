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

export const postTopics = async (requestBody: TopicRequestBody) => {
 
    const response = await client.post<TopicResponse>('/topics', requestBody);
    return response.data;
  
}
