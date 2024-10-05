
import client from '../client';

interface TalkTopicTag {
  id: number;
  content: string;
}

interface TagsResponse {
  userId: number;
  talkTopicTags: TalkTopicTag[];
}

export const getUsersTags = async (): Promise<TalkTopicTag[]> => {
  try {
    const response = await client.get<TagsResponse>('/users/tags');
    return response.data.talkTopicTags;
  } catch (error) {
    console.error('태그 조회 중 오류 발생:', error);
    throw error;
  }
};


