/**
 *A function create bookmark icon,  accept  one argument, icon class, the look of the icon  depends on that class.
 * @param {string}-class name
 * @returns {object}-icon
 */

export function createBookmarkIcon(classListItem) {
    let icon = document.createElement("i");
    icon.classList.add(`${classListItem}`);
    icon.classList.add("fa-bookmark");
    icon.classList.add("fa-2x");
    return icon;
  }
  