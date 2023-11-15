//
// For guidance on how to create filters see:
// https://prototype-kit.service.gov.uk/docs/filters
//

const govukPrototypeKit = require('govuk-prototype-kit')
const addFilter = govukPrototypeKit.views.addFilter

// Add your filters here

addFilter('uppercase', function (content) {
  return content.toUpperCase()
})

addFilter('tag', function (content) {
  let colour = 'blue'
  if (content === 'Active') {
    colour = 'green'
  }
  let tagCode = '<strong class="govuk-tag govuk-tag--'+ colour +'">' + content + '</strong>'
  return tagCode
})
