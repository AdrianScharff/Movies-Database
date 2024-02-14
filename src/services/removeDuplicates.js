const removeDuplicates = (array) => {
    const uniqueIds = []
    return array.filter(item => {
        if (!uniqueIds.includes(item.id)) {
            uniqueIds.push(item.id)
            return true
        }
        return false
    })
}

export default removeDuplicates