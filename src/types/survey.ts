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
