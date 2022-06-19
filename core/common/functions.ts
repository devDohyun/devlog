export function getKoreanAge(birthYear: number) {
  const now = new Date()
  const year = now.getFullYear()

  return year - birthYear + 1
}

export function getMonthsBetweenNowAndDate(date: string | number) {
  const now = new Date()
  const past = new Date(date)

  let diff = (now.getFullYear() - past.getFullYear()) * 12
  diff += now.getMonth()
  diff -= past.getMonth()

  return diff
}
