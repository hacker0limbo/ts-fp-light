import { sortBy } from '../src'

it('should alter the list structure', () => {
  const people = [
    {
      name: 'aa',
      age: 10
    }, {
      name: 'ac',
      age: 20,
    }, {
      name: 'ab',
      age: 18
    }
  ]

  const peopleByName = [
    {
      name: 'aa',
      age: 10
    }, {
      name: 'ab',
      age: 18,
    }, {
      name: 'ac',
      age: 20
    }
  ]

  people.sort(sortBy('name'))
  expect(people).toEqual(peopleByName)
  people.sort(sortBy('age'))
  expect(people).toEqual(peopleByName)
})