---
tags: job_search_ignore
---
# Job Search

## Active processes

```dataview
TABLE
  level,
  team,
  screen_date,
  result_date,
  status
from -#job_search_ignore AND "Work/Job Search"
where active
```

## Compensation

```dataviewjs
const {CompensationCalculator} = customJS;
CompensationCalculator
  .generateCompensationSummariesForQuery(
    dv, 
    dv.pages(`-#job_search_ignore AND "Work/Job Search"`).where(
      function(page) { return page.active == true}
    )
)
```
