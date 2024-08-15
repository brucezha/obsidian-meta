---
highlights: 
lowlights:
---
<%*
const {CalendarHelper} = customJS;
const today = CalendarHelper.getDateFromMonthlyFile(tp)
%>

# <% CalendarHelper.generateMonthlyTitle(today) %>

<% CalendarHelper.generatePreviousMonthLink(tp) %> | <% CalendarHelper.generateNextMonthLink(tp) %>
<% CalendarHelper.generateCurrentQuarterLink(today) %> | <% CalendarHelper.generateCurrentYearLink(today) %>
_Summary of your month_

- <% tp.file.cursor(1) %>

## Weekly notes

```dataview
table highlights, lowlights
from [[]] and "Calendar/Weekly"
sort file.name asc
```
