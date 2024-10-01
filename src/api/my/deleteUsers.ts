import client from '../client';

export const deleteUser = async (): Promise<void> => {
  try {
    await client.delete('/users');
  } catch (error) {
    console.error('사용자 삭제 중 오류 발생:', error);
    throw error;
  }
};
