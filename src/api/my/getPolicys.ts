import client from '../client'

export interface Policy {
  title: string;
  content: string;
}

export const getPolicys = async (): Promise<Policy[]> => {
  try {
    const response = await client.get<Policy[]>('/policies');
    return response.data;
  } catch (error) {
    console.error('정책 정보 가져오기 오류:', error);
    throw error;
  }
}
