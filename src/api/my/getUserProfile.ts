import client from '../client'

interface UserProfile {
  maskedEmail: string;
  profilePhotoUrl: string;
}

export const getUserProfile = async (): Promise<UserProfile> => {
  try {
    const response = await client.get<UserProfile>('/users/profiles');
    return response.data;
  } catch (error) {
    console.error('사용자 프로필을 가져오는 중 오류 발생:', error);
    throw error;
  }
}