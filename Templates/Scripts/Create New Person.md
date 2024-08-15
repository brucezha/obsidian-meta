<%*
let name = await tp.system.prompt("Name of the person")
tp.file.create_new(tp.file.find_tfile("Person Template"), name, true, app.vault.getAbstractFileByPath("People"))
%>