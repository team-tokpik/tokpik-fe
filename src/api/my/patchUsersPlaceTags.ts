import client from '../client'

interface PlaceTag {
  id: number;
  content: string;
}

interface PatchUsersPlaceTagsResponse {
  userId: number;
  placeTopicTags: PlaceTag[];
}

export const patchUsersPlaceTags = async (placeTagIds: number[]): Promise<PatchUsersPlaceTagsResponse> => {
  try {
    const response = await client.patch<PatchUsersPlaceTagsResponse>('/users/place-tags', {
      placeTagIds: placeTagIds
    });
    return response.data;
  } catch (error) {
    console.error('장소 태그 업데이트 오류:', error);
    throw error;
  }
}
