export const isValidBirth = (birthdate: string) => {
  if (!/^\d{8}$/.test(birthdate)) {
    return false
  }

  const year = parseInt(birthdate.substring(0, 4), 10)
  const month = parseInt(birthdate.substring(4, 6), 10)
  const day = parseInt(birthdate.substring(6, 8), 10)

  // 날짜가 유효한지 확인
  const date = new Date(year, month - 1, day)
  if (
    date.getFullYear() !== year ||
    date.getMonth() + 1 !== month ||
    date.getDate() !== day
  ) {
    return false
  }

  // 현재 날짜 이전인지 확인
  const currentDate = new Date()
  if (date > currentDate) {
    return false
  }

  // 나이가 120세를 초과하지 않는지 확인
  const maxAge = 120
  const minDate = new Date()
  minDate.setFullYear(minDate.getFullYear() - maxAge)
  if (date < minDate) {
    return false
  }

  return true
}

export const formatBirth = (birth: string) => {
  const year = birth.slice(0, 4)
  const month = birth.slice(4, 6)
  const day = birth.slice(6, 8)
  return `${year}-${month}-${day}`
}
