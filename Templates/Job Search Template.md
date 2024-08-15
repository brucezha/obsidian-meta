---
tags: 
level: 
sourcer: 
sourcer_email: 
comp:
  sign_in_bonus: 0
  salary: 0
  bonus_target: 15
  rsu: 0
  rsu_vesting_months: 6
  rsu_vesting_cliff_months: 12
  rsu_vesting_over_years: 4
  expected_yearly_rsu_refresh: 0
team: 
result_date: 
screen_date: 
onsite_date: 
recruiter: 
recruiter_email: 
coordinator: 
coordinator_email: 
url: 
active: true
---

# <% tp.file.title %>
#job_search 
```dataviewjs
const {LinkCreator} = customJS;
let page = dv.current()
let name = page.level + " - "+ page.team

dv.list([LinkCreator.createLinkWithTitle(name, page.url)])
```

## Compensation


```dataviewjs
const {CompensationCalculator} = customJS;
CompensationCalculator.generateCompensationTableForJobPage(dv)
```
