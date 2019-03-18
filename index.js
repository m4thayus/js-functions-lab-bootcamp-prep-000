function happyHolidays() {
  return "Happy holidays!"
}

function happyHolidaysTo(name) {
  return 'Happy holidays, ${name}!'
}

function happyHolidayTo(holiday, name) {
  return `Happy $holiday, ${name}!`
}

function holidayCountdown(days, holiday) {
  `It's ${days} days until ${holiday}!`
}

happyHolidays()
happyHolidaysTo("you")
happyHolidayTo("Lunar New Year", "you")
holidayCountdown(20, "Mother's Day")