---
highlights: 
lowlights:
---
<%*
const {CalendarHelper} = customJS;
const today = CalendarHelper.getDateFromWeeklyFile(tp)
%>

# <% CalendarHelper.generateWeeklyTitle(today) %>

<% CalendarHelper.generatePreviousWeekLink(tp) %> | <% CalendarHelper.generateNextWeekLink(tp) %>
<% CalendarHelper.generateCurrentMonthLink(today) %> | <% CalendarHelper.generateCurrentQuarterLink(today) %> | <% CalendarHelper.generateCurrentYearLink(today) %>

- <% tp.file.cursor(1) %>

## Daily notes

```dataview
Table highlights, lowlights
from [[]] and "Calendar/Daily"
sort file.name asc
```
