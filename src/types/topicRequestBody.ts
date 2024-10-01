
export interface TopicRequestBody  {
    includeFilterCondition: boolean,
    talkPurposes: string[],
    talkSituations: string[],
    talkMoods: string[],
    talkPartnerGender: boolean,
    talkPartnerAgeLowerBound: number,
    talkPartnerAgeUpperBound: number,
  }