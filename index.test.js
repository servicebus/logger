const loggermiddleware = require('./index.js')

test('logs outgoing', () => {
  const fnIncoming = jest.fn()
  const fnOutgoing = jest.fn()
  let logger = loggermiddleware({
    fnIncoming,
    fnOutgoing
  })
  const testmessage = { test: true }
  const cb = jest.fn((err, queue, message) => {
    expect(fnOutgoing).toBeCalled()
  })
  logger.handleOutgoing('test', testmessage, cb)
})

test('logs incoming', () => {
  const fnIncoming = jest.fn()
  const fnOutgoing = jest.fn()
  let logger = loggermiddleware({
    fnIncoming,
    fnOutgoing
  })
  const testmessage = { test: true }
  const cb = jest.fn((err, queue, message) => {
    expect(fnIncoming).toBeCalled()
  })
  logger.handleIncoming('test', testmessage, cb)
})
