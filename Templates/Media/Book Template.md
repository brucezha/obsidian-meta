# <% tp.frontmatter.title %>
up:: [[/Media/Books]]
```dataviewjs
const {MediaDates} = customJS;
dv.span(MediaDates.setupStartButton(dv.current().type));
dv.span(MediaDates.setupFinishButton(dv.current().type, "read", "lastRead"));
```
`$= '![Image|360](' + dv.current().image + ')'`

> [!abstract] About
>
> - Author: `= join(this.author)`
> - Pages: `= this.pages`
> - Year: `= this.year`
> - [addedDate:: <% tp.date.now("YYYY-MM-DD") %>]
>
```dataviewjs
const {MediaDates} = customJS;
dv.paragraph(MediaDates.displayDatesAndRatings(dv, "read", "lastRead"));
```

> [!metadata]- Links
> `VIEW[{url}][link]`

***
