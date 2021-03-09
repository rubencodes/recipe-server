export function upperCaseFirstLetter(str) {
    return str.slice(0, 1).toUpperCase() + str.slice(1);
}

export function sanitizeQuery(str) {
    return str.trim().toLowerCase();
}