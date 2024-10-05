import client from '../client'

interface TopicTag {
  id: number;
  content: string;
}

interface PatchUsersTagsResponse {
  userId: number;
  talkTopicTags: TopicTag[];
}

export const patchUsersTags = async (topicTagIds: number[]): Promise<PatchUsersTagsResponse> => {
  try {
    const response = await client.patch<PatchUsersTagsResponse>('/users/tags', {
      topicTagIds: topicTagIds
    });
    return response.data;
  } catch (error) {
    console.error('주제 태그 업데이트 오류:', error);
    throw error;
  }
}
