import client from '../client';

interface PlaceTag {
  id: number;
  content: string;
}

interface PlaceTagResponse {
  userId: number;
  placeTopicTags: PlaceTag[];
}

export const getUsersPlaceTag = async (): Promise<PlaceTag[]> => {
  try {
    const response = await client.get<PlaceTagResponse>('/users/place-tags');
    return response.data.placeTopicTags;
  } catch (error) {
    console.error('장소 태그 조회 중 오류 발생:', error);
    throw error;
  }
};
