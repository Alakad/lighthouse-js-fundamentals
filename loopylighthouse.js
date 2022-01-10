const loopyLighthouse = function (start, end, multiple, substitutions) {
  const startCount = start
  const endValue = end
  const multiples = multiple
  const words = substitutions

  const checkSubstitute = function (num) {
    let result = []

    for (let i = 0; i < multiples.length; i++) {
      if (num % multiples[i] === 0) {
        result.push(words[i])
      }
    }

    if (result.length === 0) {
      return num
    } else {
      return result.join(' ')
    }
  }

  for (let x = startCount; x <= endValue; x++) {
    console.log(checkSubstitute(x))
  }
}

loopyLighthouse(100,200,[3,4,5],['Loopy', 'Lighthouse', 'Bootcamp'])