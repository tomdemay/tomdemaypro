const checkbox = document.getElementById('show-download-checkbox');
const checkboxLink = document.querySelector('.show-download-label-checkbox')
const togglenav = document.querySelector('.toggle-nav');
const download = document.querySelector('.download');


window.addEventListener('beforeprint', function () {
    // Expand all <details> elements when printing
    var detailsElements = document.getElementsByTagName('details');
    for (var i = 0; i < detailsElements.length; i++) {
        detailsElements[i].setAttribute('open', '');
    }
});

if (checkboxLink && checkbox) {
    checkboxLink.addEventListener('click', function () {
        // show/hide cover letter
        checkbox.checked = !checkbox.checked;
        checkbox.dispatchEvent(new Event('change'));
        updateTitle();
    });

    checkbox.addEventListener('change', function () {
        togglenav.checked = false;
        if (this.checked) {
            download.style.display = 'block';
        } else {
            download.style.display = 'none';
        }
    });
}
