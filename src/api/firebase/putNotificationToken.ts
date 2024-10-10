import client from '../client'

export const putNotificationToken = async (token: string) => {
  const response = await client.put('/users/notification-token', {
    notificationToken: token,
  })
  return response.data
}
