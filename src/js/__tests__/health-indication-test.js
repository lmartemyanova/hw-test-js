import getHealthInfo from '../health-indication';

test.each([
    ['> 50', {name: 'Маг', health: 90}, 'healthy'], 
    ['15 - 50', {name: 'Мечник', health: 44}, "wounded"], 
    ['< 15', {name: 'Лучник', health: 10}, "critical"],
    ['15', {name: 'Друид', health: 15}, "wounded"],
    ['50', {name: 'Маг', health: 50}, "wounded"]
])("get info about health with %s range and %i value", (_, character, expected) => {
    const result = getHealthInfo(character);
    expect(result).toBe(expected);
})