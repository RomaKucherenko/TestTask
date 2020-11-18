export const removeItemById = (array, id) => {

        array.forEach((item, index) => {
            if (item.id === id) array.splice(index, 1)
        })

        return array.map(i => i)
}