export type PlaceListRequest = {
  placeTags: placeTags[]
}

export type placeTags = {
  placeTagId: number
  content: string
}

export type TopicListRequest = {
  topicTags: topicTags[]
}

export type topicTags = {
  topicTagId: number
  content: string
}

/*
  birth: "YYYY-MM-DD" 형식
  gender: true: 남자, false: 여자
  placeTags: placeTagId 배열
  topicTags: topicTagId 배열
*/
export type ProfileRequest = {
  birth: string
  gender: boolean
  placeTags: number[]
  topicTags: number[]
}
