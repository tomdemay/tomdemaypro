const checkbox = document.getElementById('show-cover-letter-checkbox');
const checkboxLink = document.querySelector('.show-cover-letter-label-checkbox')
const togglenav = document.querySelector('.toggle-nav');
const coverLetter = document.querySelector('.cover-letter');


window.addEventListener('beforeprint', function() {
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
            coverLetter.style.display = 'block';
        } else {
            coverLetter.style.display = 'none';
        }
    });
}
