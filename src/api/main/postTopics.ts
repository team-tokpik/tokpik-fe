import client from '../client'

export interface TopicRequestBody {
  includeFilterCondition: boolean;
  talkPurposes: string[];
  talkSituations: string[];
  talkMoods: string[];
  talkPartnerGender: boolean;
  talkPartnerAgeLowerBound: number;
  talkPartnerAgeUpperBound: number;
}

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

export const postTopics = async (requestBody: TopicRequestBody): Promise<TopicResponse> => {
  try {
    const response = await client.post<TopicResponse>('/topics', requestBody);
    return response.data;
  } catch (error) {
    console.error('토픽 가져오기 오류:', error);
    throw error;
  }
}
