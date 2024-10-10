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
  nextCursorId: number;
  first: boolean;
  last: boolean;
}

export const getUsersScrapsScrapIdTopics = async (scrapId: number, nextCursorId: number = 0, size: number = 10): Promise<GetUsersScrapsScrapIdTopicsResponse> => {
  try {
    const response = await client.get<GetUsersScrapsScrapIdTopicsResponse>(`ex/users/scraps/${scrapId}/topics`, {
      params: {
        nextCursorId,
        size
      }
    });
    return response.data;
  } catch (error) {
    console.error('스크랩 토픽 정보 가져오기 오류:', error);
    throw error;
  }
}