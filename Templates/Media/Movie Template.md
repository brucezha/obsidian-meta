# <% tp.frontmatter.title %>
up:: [[/Media/Movies]]

```dataviewjs
const {MediaDates} = customJS;
dv.span(MediaDates.setupStartButton(dv.current().type));
dv.span(MediaDates.setupFinishButton(dv.current().type, "watched", "lastWatched"));
```

`$= '![Image|360](' + dv.current().image + ')'`

> [!abstract] About
>
> - Genres: `= join(this.genres)`
> - Actors: `= join(this.actors)`
> - Director: `= join(this.director)`
> - Studio: `= this.studio`
> - Year: `= this.year`
> - [addedDate:: <% tp.date.now("YYYY-MM-DD") %>]
>
```dataviewjs
const {MediaDates} = customJS;
dv.paragraph(MediaDates.displayDatesAndRatings(dv, "watched", "lastWatched"));
```

> [!metadata]- Links
> `VIEW[{url}][link]`

***
