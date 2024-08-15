# <% tp.frontmatter.title %>
up:: [[/Media/Mangas]]
```dataviewjs
const {MediaDates} = customJS;
dv.span(MediaDates.setupStartButton(dv.current().type));
dv.span(MediaDates.setupFinishButton(dv.current().type, "read", "lastRead"));
```
`$= '![Image|360](' + dv.current().image + ')'`

> [!abstract] About
>
> - Authors: `= join(this.authors)`
> - Volumes: `= this.volumes`
> - Chapters: `= this.chapters`
> - Year: `= this.year`
> - [addedDate:: 2024-03-29]
>
```dataviewjs
const {MediaDates} = customJS;
dv.paragraph(MediaDates.displayDatesAndRatings(dv, "read", "lastRead"));
```

> [!metadata]- Links
> `VIEW[{url}][link]`

***
