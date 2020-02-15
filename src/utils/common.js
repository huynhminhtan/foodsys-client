export const validURL = myURL => {
  // var pattern = new RegExp(
  //   '^(https?:\\/\\/)?' + // protocol
  //   '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
  //   '((\\d{1,3}\\.){3}\\d{1,3}))' + // ip (v4) address
  //   '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + //port
  //   '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
  //     '(\\#[-a-z\\d_]*)?$',
  //   'i'
  // )
  var pattern = new RegExp(
    'http://', // domain name
    'i'
  )
  return pattern.test(myURL)
}

export const formatter = amount => {
  let formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  })

  return formatter.format(amount)
}
