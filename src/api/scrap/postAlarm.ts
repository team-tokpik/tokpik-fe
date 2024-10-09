import client from '../client'

type postAlarmProps = {
  notificationName: string
  notificationTalkTopicIds: number[]
  noticeDate: string
  notificationStartTime: string
  notificationEndTime: string
  notificationIntervalMinutes: number
  scrapId: number
}

export const postAlarm = async (props: postAlarmProps) => {
  const {
    notificationName,
    notificationTalkTopicIds,
    noticeDate,
    notificationStartTime,
    notificationEndTime,
    notificationIntervalMinutes,
    scrapId,
  } = props
  const response = await client.post('/users/notifications', {
    notificationName,
    notificationTalkTopicIds,
    noticeDate,
    notificationStartTime,
    notificationEndTime,
    notificationIntervalMinutes,
    scrapId,
  })
  return response.data
}
