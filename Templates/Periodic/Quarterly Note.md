---
highlights: 
lowlights:
---
<%*
const {CalendarHelper} = customJS;
const today = CalendarHelper.getDateFromQuarterlyFile(tp)
%>

# <% CalendarHelper.generateQuarterlyTitle(today) %>

<% CalendarHelper.generatePreviousQuarterLink(tp) %> | <% CalendarHelper.generateNextQuarterLink(tp) %>
<% CalendarHelper.generateCurrentYearLink(today) %>

## Objectives

_The overall goals you want to accomplish in this quarter._
<% tp.file.cursor(1) %>

### Objective

_How do you plan to achieve this?_

#### Key results

- How do you measure this objective

## Monthly notes

```dataview
table highlights, lowlights
from [[]] and "Calendar/Monthly"
sort file.name asc
```

## Weekly notes

```dataview
table highlights, lowlights
from [[]] and "Calendar/Weekly"
sort file.name asc
```

## OKR quarterly review

### Have you completed your key results?

### If you haven’t completed your key results, why was this?

### Did your key results lead to the overall objective?

### What did you learn this quarter?
