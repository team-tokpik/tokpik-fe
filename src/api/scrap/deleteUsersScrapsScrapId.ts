import client from '../client'

export interface DeleteUsersScrapsScrapIdResponse {
  message: string;
}

export const deleteUsersScrapsScrapId = async (scrapId: number): Promise<DeleteUsersScrapsScrapIdResponse> => {
  try {
    const response = await client.delete<DeleteUsersScrapsScrapIdResponse>(`/users/scraps/${scrapId}`);
    return response.data;
  } catch (error) {
    console.error('사용자 스크랩 삭제 오류:', error);
    throw error;
  }
}
