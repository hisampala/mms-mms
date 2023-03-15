const GetParentId = async (url, parent) => {
    const ext = String(url).split("/")
    const idxParent = ext.findIndex((value) => value === parent)
    return ext[idxParent + 1]
}
module.exports = {
    GetParentId
}