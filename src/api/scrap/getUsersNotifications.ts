import client from '../client'

export interface NotificationTopicType {
  topicTypeId: number;
  topicTypeContent: string;
}

export interface Notification {
  notificationId: number;
  noticeDate: string;
  notificationStartTime: string;
  notificationEndTime: string;
  notificationInterval: number;
  scrapName: string;
  notificationTopicTotal: number;
  notificationTalkTopicTypes: NotificationTopicType[];
}

export interface GetUsersNotificationsResponse {
  contents: Notification[];
  nextCursorId: number;
  first: boolean;
  last: boolean;
}

export const getUsersNotifications = async (): Promise<GetUsersNotificationsResponse> => {
  try {
    const response = await client.get<GetUsersNotificationsResponse>('/users/notifications'
    
    );
    return response.data;
  } catch (error) {
    console.error('알림 정보 가져오기 오류:', error);
    throw error;
  }
}
