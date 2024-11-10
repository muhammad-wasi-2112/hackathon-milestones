function showSection(sectionClass: string): void {
    // Hide all sections
    const sections: NodeListOf<Element> = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));

    // Show the selected section
    const selectedSection: Element | null = document.querySelector(`.${sectionClass}`);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }
}

