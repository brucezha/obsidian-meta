<%*
let name = await tp.system.prompt("Name of the job")
tp.file.create_new(tp.file.find_tfile("Job Search Template"), name, true, app.vault.getAbstractFileByPath("Work/Job Search"))
%>
