const data = require('./data')

test('object assignment', () => {
    data['two'] = 2
    expect(data).toEqual({one: 1, two: 2})
})