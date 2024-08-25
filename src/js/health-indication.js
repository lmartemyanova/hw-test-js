export default function getHealthInfo(character) {
    if (character.health < 15) {
        return "critical"
    }
    if (character.health > 50) {
        return "healthy"
    }
    if (15 <= character.health && character.health <= 50) {
        return "wounded"
    }
};
