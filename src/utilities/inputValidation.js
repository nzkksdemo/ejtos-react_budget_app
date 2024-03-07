// The delete/backspace keys are supported only on deprecated onKeyPress event. KeyDown not.

export const handleNumberOnlyValidation = e => {
    e = e || window.Event;
    var charCode = (typeof e.which == "undefined") ? e.keyCode : e.which;
    var charStr = String.fromCharCode(charCode);
    if (!charStr.match(/^[0-9]+$/))
        e.preventDefault();
};