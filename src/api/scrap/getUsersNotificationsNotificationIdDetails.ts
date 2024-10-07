import client from '../client'

export interface NotificationTalkTopic {
  talkTopicTitle: string;
  talkTopicTypeId: number;
  talkTopicTypeContent: string;
  noticeTime: string;
}

export interface GetUsersNotificationsNotificationIdDetailsResponse {
  notificationName: string;
  notificationStartTime: string;
  notificationEndTime: string;
  notificationIntervalMinutes: number;
  notificationTalkTopics: NotificationTalkTopic[];
}

export const getUsersNotificationsNotificationIdDetails = async (notificationId: string): Promise<GetUsersNotificationsNotificationIdDetailsResponse> => {
  try {
    const response = await client.get<GetUsersNotificationsNotificationIdDetailsResponse>(`/users/notifications/${notificationId}/details`);
    return response.data;
  } catch (error) {
    console.error('알림 주제 정보 가져오기 오류:', error);
    throw error;
  }
}
