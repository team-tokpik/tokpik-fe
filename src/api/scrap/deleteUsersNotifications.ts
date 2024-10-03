import client from '../client'

export interface DeleteUsersNotificationsResponse {
  message: string;
}

export const deleteUsersNotifications = async (notificationId: number): Promise<DeleteUsersNotificationsResponse> => {
  try {
    const response = await client.delete<DeleteUsersNotificationsResponse>(`/users/notifications/${notificationId}`);
    return response.data;
  } catch (error) {
    console.error('사용자 알림 삭제 오류:', error);
    throw error;
  }
}
                                                                                                                                    