import client from '../client'

export interface NotificationTalkTopic {
  talkTopicTitle: string;
  talkTopicTypeId: number;
  talkTopicTypeContent: string;
  noticeTime: string;
}

export interface GetUsersNotificationsNotificationIdTopicsResponse {
  notificaitonName: string;
  notificationStartTime: string;
  notificationEndTime: string;
  notificationIntervalMinutes: number;
  notificationTalkTopics: NotificationTalkTopic[];
}

export const getUsersNotificationsNotificationIdTopics = async (notificationId: number): Promise<GetUsersNotificationsNotificationIdTopicsResponse> => {
  try {
    const response = await client.get<GetUsersNotificationsNotificationIdTopicsResponse>(`/users/notifications/${notificationId}/topics`);
    return response.data;
  } catch (error) {
    console.error('알림 주제 정보 가져오기 오류:', error);
    throw error;
  }
}
