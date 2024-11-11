function showSection(sectionClass) {
    // Hide all sections
    var sections = document.querySelectorAll('.section');
    sections.forEach(function (section) { return section.classList.remove('active'); });
    // Show the selected section
    var selectedSection = document.querySelector(".".concat(sectionClass));
    if (selectedSection) {
        selectedSection.classList.add('active');
    }
}
