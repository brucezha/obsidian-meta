
class MediaDates {

  setupStartButton(mediaType) {
    return `\`\`\`meta-bind-button
style: primary
label: "Start ${mediaType}"
id: start-media-button
hidden: true
actions:
  - type: updateMetadata
    bindTarget: startedDate
    evaluate: true
    value: moment().format("YYYY-MM-DD")
\`\`\``;
  }

  setupFinishButton(mediaType, statusToMark, dateToUpdate) {
    return `\`\`\`meta-bind-button
style: primary
label: "Finish ${mediaType}"
id: finish-media-button
hidden: true
actions:
  - type: updateMetadata
    bindTarget: ${dateToUpdate}
    evaluate: true
    value: moment().format("YYYY-MM-DD")
  - type: updateMetadata
    bindTarget: ${statusToMark}
    evaluate: true
    value: true
\`\`\``;
  }

  displayDatesAndRatings(dv, finishedStatusField, finishedDateField) {

    const outputDateFormat = "DDD";
    var dateStarted = dv.date(dv.current()["startedDate"])
    var dateStartedStr = dateStarted != null ? dateStarted.toFormat(outputDateFormat) : null;
    var dateFinished = dv.date(dv.current()[finishedDateField])
    var dateFinishedStr = dateFinished != null ? dateFinished.toFormat(outputDateFormat) : null;
    var isFinished = dv.current()[finishedStatusField];
    var outputString = `> [!tip] Status & Ratings
>
> - Online Ratings: \`VIEW[round({onlineRating}, 2)]\`
> 
> - Rating: \`VIEW[round({personalRating}, 2)]\`
>   \`INPUT[ratingSlider][:personalRating]\`
`;
    if (dateStarted != null) {
      outputString += `>
> - Started: ${dateStartedStr}
`;
      if (isFinished) {
        outputString += `>
> - Finished: ${dateFinishedStr}
`;
      } else {
        outputString += `>
> \`BUTTON[finish-media-button]\`
`;
      }
    } else {
      outputString += `>
> \`BUTTON[start-media-button]\`
`;
    }
    return outputString
  }
}
