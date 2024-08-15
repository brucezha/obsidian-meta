# <% tp.frontmatter.title %>
up:: [[/Media/Games]]
```dataviewjs
const {MediaDates} = customJS;
dv.span(MediaDates.setupStartButton(dv.current().type));
dv.span(MediaDates.setupFinishButton(dv.current().type, "played", "lastPlayed"));
```
`$= '![Image|360](' + dv.current().image + ')'`

> [!abstract] About
>
> - Genres: `= join(this.genres)`
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
