export const YEAR_SHORT = "Y"
export const YEAR = YEAR_SHORT + YEAR_SHORT

export const MONTH_SHORT = "M"
export const MONTH = MONTH_SHORT + MONTH_SHORT

export const DAY_SHORT = "D"
export const DAY = DAY_SHORT + DAY_SHORT

export const HOUR_SHORT = "H"
export const HOUR = HOUR_SHORT + HOUR_SHORT

export const MINUTE_SHORT = "M"
export const MINUTE = MINUTE_SHORT + MINUTE_SHORT

export const SECOND_SHORT = "s"
export const SECOND = SECOND_SHORT + SECOND_SHORT

export function getYearMonthFormat(delimiter = "-") {
  return YEAR + delimiter + MONTH
}

export function getDayFormat(delimiter = "-") {
  return YEAR + delimiter + MONTH + delimiter + DAY
}

export function getTimeFormat(delimiter = ":") {
  return HOUR + delimiter + MINUTE + delimiter + SECOND
}

export function getDayTimeFormat(dayDelimiter = "-", timeDelimiter = ":") {
  return getDayFormat(dayDelimiter) + " " + getTimeFormat(timeDelimiter)
}
