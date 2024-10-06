import client from '../client'

export const patchUsersScrapsScrapIdTitles = async (scrapId: number, scrapName: string): Promise<void> => {
  try {
    await client.patch(`/users/scraps/${scrapId}/titles`, {
      scrapTitle: scrapName
    });
  } catch (error) {
    console.error('스크랩 제목 업데이트 오류:', error);
    throw error;
  }
}
