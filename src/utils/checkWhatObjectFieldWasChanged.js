export const checkWhatObjectFieldWasChanged = (obj_1, obj_2) => {
    let matchesObj = new Map();

    for (let value in obj_1) {

        for (let item in obj_2) {

            if (obj_1[value] !== obj_2[item] && value === item) {
                matchesObj.set(value, obj_1[value]);
            }
        }
    }

    return Object.fromEntries(matchesObj);
}