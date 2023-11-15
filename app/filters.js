const govukPrototypeKit = require('govuk-prototype-kit')
const addFilter = govukPrototypeKit.views.addFilter

addFilter('uppercase', function (content) {
  return content.toUpperCase()
})

// filter to turn status text into a tage
addFilter('tag', function (content) {
  let colour = 'orange'
  if (content === 'Active') {
    colour = 'green'
  } else if (content === 'Cancelled') {
    colour = 'grey'
  } else if (content === 'Expired') {
    colour = 'grey'
  }
  let tagCode = '<strong class="govuk-tag govuk-tag--'+ colour +'">' + content + '</strong>'
  return tagCode
})
