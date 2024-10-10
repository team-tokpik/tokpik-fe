
import client from '../client'

export interface TopicType {
  topicTypeId: number;
  topicTypeContent: string;
}

export interface Scrap {
  scrapId: number;
  scrapName: string;
  recentTopicTypes: TopicType[];
}

export interface GetUsersScrapsResponse {
  scraps: Scrap[];
}

export const getUsersScraps = async (): Promise<GetUsersScrapsResponse> => {
  try {
    const response = await client.get<GetUsersScrapsResponse>('ex/users/scraps');
    return response.data;
  } catch (error) {
    console.error('사용자 스크랩 정보 가져오기 오류:', error);
    throw error;
  }
}

