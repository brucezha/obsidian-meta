---
highlights: 
lowlights:
---
<%*
const {CalendarHelper} = customJS;
const today = CalendarHelper.getDateFromDailyFile(tp);
%>
# <% CalendarHelper.generateDailyTitle(today) %>

<% CalendarHelper.generateYesterdayLink(tp) %> | <% CalendarHelper.generateTomorrowLink(tp) %>
<% CalendarHelper.generateCurrentWeekLink(today) %> | <% CalendarHelper.generateCurrentMonthLink(today) %> | <% CalendarHelper.generateCurrentQuarterLink(today) %> | <% CalendarHelper.generateCurrentYearLink(today) %>

- <% tp.file.cursor(1) %>
