import client from '../client'

export interface Topic {
  scrapTopicId: number;
  topicId: number;
  topicTitle: string;
  topicType: string;
  scraped: boolean;
}

export interface GetUsersScrapsScrapIdTopicsResponse {
  contents: Topic[];
  lastContentId: number;
  first: boolean;
  last: boolean;
}

export const getUsersScrapsScrapIdTopics = async (scrapId: number, lastContentId: number = 0, size: number = 10): Promise<GetUsersScrapsScrapIdTopicsResponse> => {
  try {
    const response = await client.get<GetUsersScrapsScrapIdTopicsResponse>(`/users/scraps/${scrapId}/topics`, {
      params: {
        lastContentId,
        size
      }
    });
    return response.data;
  } catch (error) {
    console.error('스크랩 토픽 정보 가져오기 오류:', error);
    throw error;
  }
}