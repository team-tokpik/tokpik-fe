import client from '../client'

export interface Term {
  title: string;
  content: string;
}

export const getTerms = async (): Promise<Term[]> => {
  try {
    const response = await client.get<Term[]>('/terms');
    return response.data;
  } catch (error) {
    console.error('약관 정보 가져오기 오류:', error);
    throw error;
  }
}

