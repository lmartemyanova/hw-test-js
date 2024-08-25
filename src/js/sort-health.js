export default function sortCharactersByHealth(charactersList) { 
    return charactersList.sort(function(a, b) {
        return b.health - a.health
    });
};
