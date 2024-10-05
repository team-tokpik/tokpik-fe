
export interface TopicRequestBody  {
    includeFilterCondition: boolean,
    talkPurposes: string[],
    talkSituations: string[],
    talkMoods: string[],
    talkPartnerGender: boolean,
    talkPartnerAgeLowerBound: number|null,
    talkPartnerAgeUpperBound: number|null,
  }