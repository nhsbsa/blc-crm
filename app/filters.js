const govukPrototypeKit = require('govuk-prototype-kit')
const addFilter = govukPrototypeKit.views.addFilter

addFilter('uppercase', function (content) {
  return content.toUpperCase()
})

// filter to turn status text into a tage
addFilter('tag', function (content) {
  let colour = 'grey'
  if (content === 'Incomplete') {
    colour = 'blue'
  } else if (content === 'Sent') {
    colour = 'green'
  } else if (content === 'Rejected' || content === 'Failed') {
    colour = 'red'
  } else if (content === 'Expired') {
    colour = 'red'
  }
  let tagCode = '<strong class="govuk-tag govuk-tag--'+ colour +'">' + content + '</strong>'
  return tagCode
})
