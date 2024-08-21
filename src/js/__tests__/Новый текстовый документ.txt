import sortCharactersByHealth from '../sort-health'

test('', () => {
    const charactersList = [
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
    ]
    const expected = [
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10},
    ]
    const result = sortCharactersByHealth(charactersList)
    expect(result).toEqual(expected)
})