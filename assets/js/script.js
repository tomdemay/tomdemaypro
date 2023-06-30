// Expand all <details> elements when printing
window.addEventListener('beforeprint', function() {
    var detailsElements = document.getElementsByTagName('details');
    for (var i = 0; i < detailsElements.length; i++) {
      detailsElements[i].setAttribute('open', '');
    }
});

// show/hide cover letter
const checkbox = document.getElementById('show-cover-letter-checkbox');
const checkboxLink = document.querySelector('.show-cover-letter-label-checkbox')
const togglenav = document.querySelector('.toggle-nav');
const coverLetter = document.querySelector('.cover-letter');

checkboxLink.addEventListener('click', function () {
    checkbox.checked = !checkbox.checked;
    checkbox.dispatchEvent(new Event('change'));
});

checkbox.addEventListener('change', function() {
    togglenav.checked = false;
    if (this.checked) {
        coverLetter.style.display = 'block';
    } else {
        coverLetter.style.display = 'none';
    }
});