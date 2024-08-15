---
highlights: 
lowlights:
---
<%*
const {CalendarHelper} = customJS;
const today = CalendarHelper.getDateFromYearlyFile(tp)
%>

# <% CalendarHelper.dateFormattedAsYear(today) %>

<% CalendarHelper.generatePreviousYearLink(tp) %> | <% CalendarHelper.generateNextYearLink(tp) %>

# <% today.format("yyyy")%>

## Yearly review

_So what has changed over the past year!?_

## Quarterly notes

```dataview
table highlights, lowlights
from [[]] and "Calendar/Quarterly"
sort file.name asc
```

## Monthly notes

```dataview
table highlights, lowlights
from [[]] and "Calendar/Monthly"
sort file.name asc
```
