export function createBookmarkIcon(classListItem) {
    let icon = document.createElement("i")
    icon.classList.add(`${classListItem}`)
    icon.classList.add("fa-bookmark")
    icon.classList.add("fa-2x")
    return icon;
}