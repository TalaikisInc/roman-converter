import romanToNumber from '../utils/romanToNumber'

export default (req, res) => {
  const inputMessage = typeof req.body.message === 'string' && req.body.message.length > 0 ? req.body.message : false
  if (inputMessage) {
    romanToNumber(inputMessage, (err, message) => {
      if (!err && message) {
        res.json({ message })
      } else if (err) {
        res.json({ error: err })
      }
    })
  } else {
    res.json({ error: 'No message received.' })
  }
}
