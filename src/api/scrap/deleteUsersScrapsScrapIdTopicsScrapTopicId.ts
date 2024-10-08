import client from '../client'

export interface DeleteUsersScrapsScrapIdTopicsScrapTopicIdResponse {
  message: string;
}

export const deleteUsersScrapsScrapIdTopicsScrapTopicId = async (scrapId: string, scrapTopicId: string): Promise<DeleteUsersScrapsScrapIdTopicsScrapTopicIdResponse> => {
  try {
    const response = await client.delete<DeleteUsersScrapsScrapIdTopicsScrapTopicIdResponse>(`/users/scraps/${scrapId}/topics/${scrapTopicId}`);
    return response.data;
  } catch (error) {
    console.error('스크랩 토픽 삭제 오류:', error);
    throw error;
  }
}
