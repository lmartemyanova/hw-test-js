export default function sortCharactersByHealth(charactersList) {
    const charactersListSorted = charactersList.sort(function(a, b) {
        return b.health - a.health
    });
    return charactersListSorted;
};
