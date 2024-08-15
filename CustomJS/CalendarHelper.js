
class CalendarHelper {
	DAY_FORMAT = "YYYY-MM-DD"
	WEEK_FORMAT = "gggg-[W]ww"
	MONTH_FORMAT = "YYYY-MM"
	QUARTER_FORMAT = "YYYY-[Q]Q"
	YEAR_FORMAT = "YYYY"

	DAY_TITLE_FORMAT = "MMMM Do, YYYY"
	WEEK_TITLE_FORMAT = "[Week] ww of gggg"
	MONTH_TITLE_FORMAT = "MMMM YYYY"
	QUARTER_TITLE_FORMAT = "[Q]Q YYYY"
	
	DAY_UNIT = "days"
	WEEK_UNIT = "weeks"
	MONTH_UNIT = "months"
	YEAR_UNIT = "years"
	
	getDateFromFile(tp, dateFormat) {
		return moment(tp.file.title, dateFormat)
	}

	getDateFromDailyFile(tp) {
		return this.getDateFromFile(tp, this.DAY_FORMAT)
	}

	getDateFromWeeklyFile(tp) {
		return this.getDateFromFile(tp, this.WEEK_FORMAT)
	}

	getDateFromMonthlyFile(tp) {
		return this.getDateFromFile(tp, this.MONTH_FORMAT)
	}

	getDateFromQuarterlyFile(tp) {
		return this.getDateFromFile(tp, this.QUARTER_FORMAT)
	}

	getDateFromYearlyFile(tp) {
		return this.getDateFromFile(tp, this.YEAR_FORMAT)
	}

	dateFormattedAsDay(date) {
		return date.format(this.DAY_FORMAT)
	}

	dateFormattedAsWeek(date) {
		return date.format(this.WEEK_FORMAT)
	}

	dateFormattedAsMonth(date) {
		return date.format(this.MONTH_FORMAT)
	}

	dateFormattedAsQuarter(date) {
		return date.format(this.QUARTER_FORMAT)
	}

	dateFormattedAsYear(date) {
		return date.format(this.YEAR_FORMAT)
	}

	generateDailyTitle(date) {
		return date.format(this.DAY_TITLE_FORMAT)
	}

	generateWeeklyTitle(date) {
		return date.format(this.WEEK_TITLE_FORMAT)
	}

	generateMonthlyTitle(date) {
		return date.format(this.MONTH_TITLE_FORMAT)
	}

	generateQuarterlyTitle(date) {
		return date.format(this.QUARTER_TITLE_FORMAT)
	}

	generateDayLink(date, label) {
		return `[[/Calendar/Daily/${this.dateFormattedAsDay(date)}|${label}]]`
	}

	generateYesterdayLink(tp) {
		return this.generateDayLink(
			this.getDateFromDailyFile(tp).subtract(1, this.DAY_UNIT),
			"< Yesterday"
		)
	}
	
	generateTomorrowLink(tp) {
		return this.generateDayLink(
			this.getDateFromDailyFile(tp).add(1, this.DAY_UNIT),
			"Tomorrow >"
		)
	}
	
	generateWeekLink(date, label) {
		return `[[/Calendar/Weekly/${this.dateFormattedAsWeek(date)}|${label}]]`
	}

	generateCurrentWeekLink(date) {
		return this.generateWeekLink(
			date,
			"Week"
		)
	}

	generatePreviousWeekLink(tp) {
		return this.generateWeekLink(
			this.getDateFromWeeklyFile(tp).subtract(1, this.WEEK_UNIT),
			"< Previous Week"
		)
	}
	
	generateNextWeekLink(tp) {
		return this.generateWeekLink(
			this.getDateFromWeeklyFile(tp).add(1, this.WEEK_UNIT),
			"Next Week >"
		)
	}

	generateMonthLink(date, label) {
		return `[[/Calendar/Monthly/${this.dateFormattedAsMonth(date)}|${label}]]`
	}

	generateCurrentMonthLink(date) {
		return this.generateMonthLink(
			date,
			"Month"
		)
	}

	generatePreviousMonthLink(tp) {
		var date = this.getDateFromMonthlyFile(tp).subtract(1, this.MONTH_UNIT)
		return this.generateMonthLink(
			date,
			`< ${date.format("MMMM")}`
		)
	}
	
	generateNextMonthLink(tp) {
		var date = this.getDateFromMonthlyFile(tp).add(1, this.MONTH_UNIT)
		return this.generateMonthLink(
			date,
			`${date.format("MMMM")} >`
		)
	}

	generateQuarterLink(date, label) {
		return `[[/Calendar/Quarterly/${this.dateFormattedAsQuarter(date)}|${label}]]`
	}

	generateCurrentQuarterLink(date) {
		return this.generateQuarterLink(
			date,
			this.dateFormattedAsQuarter(date)
		)
	}

	generatePreviousQuarterLink(tp) {
		var date = this.getDateFromQuarterlyFile(tp).subtract(3, this.MONTH_UNIT)
		return this.generateQuarterLink(
			date,
			`< ${this.dateFormattedAsQuarter(date)}`
		)
	}
	
	generateNextQuarterLink(tp) {
		var date = this.getDateFromQuarterlyFile(tp).add(3, this.MONTH_UNIT)
		return this.generateQuarterLink(
			date,
			`${this.dateFormattedAsQuarter(date)} >`
		)
	}

	generateYearLink(date, label) {
		return `[[/Calendar/Yearly/${this.dateFormattedAsYear(date)}|${label}]]`
	}
	
	generateCurrentYearLink(date) {
		return this.generateYearLink(
			date,
			this.dateFormattedAsYear(date)
		)
	}

	generatePreviousYearLink(tp) {
		var date = this.getDateFromQuarterlyFile(tp).subtract(1, this.YEAR_UNIT)
		return this.generateYearLink(
			date,
			`< ${this.dateFormattedAsYear(date)}`
		)
	}
	
	generateNextYearLink(tp) {
		var date = this.getDateFromQuarterlyFile(tp).add(1, this.YEAR_UNIT)
		return this.generateYearLink(
			date,
			`${this.dateFormattedAsYear(date)} >`
		)
	}

}
