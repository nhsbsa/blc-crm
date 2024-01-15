//
// External dependencies


// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here





router.post(/date-of-birth/, (req, res) => {

  const day = req.session.data['dob-day']
  const month = req.session.data['dob-month']
  const year = req.session.data['dob-year']

  const dob = day + '/' + month + '/' + year

  if (dob == '27/3/2007') {
    res.redirect('enter-address');
  } else if (dob== '27/03/2007') {
    res.redirect('enter-address')
  } else {
    res.redirect('date-of-birth-kickout');
}

})







router.post(/action-nhs-number/, (req, res) => {

  // if user wants their baby gender included in the certificate they will select yes then it 
  //will take them to enter baby gender name
  const NHSNumber = req.session.data['nhs']

  if (NHSNumber == 'yes') {
    res.redirect('enter-nhs-number');
  } else {
    res.redirect('what-is-your-name');
  }

})


router.post(/address-postcode/, (req, res) => {

  const AddressPostcode = req.session.data['postcodeinput']

  if (AddressPostcode == 'NE1 3JA') {
    res.redirect('check-your-details');
  } else if (AddressPostcode == 'ne1 3ja') {
    res.redirect('check-your-details')
  } else if (AddressPostcode == 'ne13ja') {
    res.redirect('check-your-details')
  } else {
    res.redirect('location-kickout-uk');
  }

})




router.post(/do-you-want-to-continue/, (req, res) => {

 
  const checkContinue = req.session.data['continue']

  if (checkContinue == 'yes') {
    res.redirect('reference-number');
  } else {
    res.redirect('continue-kickout');
  }

})
router.post(/is-this-correct/, (req, res) => {

 
  const checkCorrect = req.session.data['correct']

  if (checkCorrect == 'yes') {
    res.redirect('continue-kickout-second');
  } else {
    res.redirect('reference-number');
  }

})
router.post(/cya-correct/, (req, res) => {

 
  const checkDetails = req.session.data['check']

  if (checkDetails == 'yes') {
    res.redirect('declaration');
  } else {
    res.redirect('check-answers-kickout-copy');
  }

})
router.post(/cya-kickout/, (req, res) => {

 
  const answerKickout = req.session.data['kickout']

  if (answerKickout == 'yes') {
    res.redirect('check-answers-kickout');
  } else {
    res.redirect('check-your-answers');
  }

})



module.exports = router;