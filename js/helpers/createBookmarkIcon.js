export function createBookmarkIcon(atribut) {
    let icon = document.createElement("i")
    icon.classList.add(`${atribut}`)
    icon.classList.add("fa-bookmark")
    icon.classList.add("fa-2x")
    return icon;
}