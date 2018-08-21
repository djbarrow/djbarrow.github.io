// quick_jump.js
// Jump to appropriate page when selected in dropdown box

function quick_jump(selectbox) {
 loc = selectbox.options[selectbox.selectedIndex].value;
 if (loc) location.href = loc;
 return false;
}
