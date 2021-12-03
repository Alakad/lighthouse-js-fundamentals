const parseTranscripts = (messages) => {
  let result = [];
  for (const items of messages) {
    result.push(items.origin + ": " + items.message);
  }

  return result;
}

const messages = [
  {origin:"MC", message:"Hello!"},
  {origin:"Shuttle", message:"Hey!"},
]

console.log(parseTranscripts(messages));