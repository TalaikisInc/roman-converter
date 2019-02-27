import numberToRoman from '../utils/numberToRoman'

export default (req, res) => {
  const inputMessage = typeof req.body.message === 'string' && req.body.message.length > 0 ? req.body.message : false
  if (inputMessage) {
    numberToRoman(inputMessage, (message) => {
      if (message) {
        res.json({ message })
      }
    })
  } else {
    res.json({ error: 'No message received.' })
  }
}
