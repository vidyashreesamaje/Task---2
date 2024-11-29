document.addEventListener('DOMContentLoaded', () => {
    const importBtn = document.getElementById('import-btn');
    const clearBtn = document.getElementById('clear-btn');
    const linkedinUrlInput = document.getElementById('linkedin-url');
    const feedback = document.getElementById('feedback');

    // Clear input field when "Clear" button is clicked
    clearBtn.addEventListener('click', () => {
        linkedinUrlInput.value = '';
        feedback.classList.add('hidden');
    });

    // Handle the import process when "Import Candidate" button is clicked
    importBtn.addEventListener('click', () => {
        const linkedinUrl = linkedinUrlInput.value.trim();

        if (!linkedinUrl) {
            showFeedback('Please enter a LinkedIn profile URL.', 'error');
            return;
        }

        // Simulate API Call to Recruit CRM (You would replace this with actual API interaction)
        simulateImportCandidate(linkedinUrl);
    });

    // Simulate an import operation (Replace this with actual logic to interact with Recruit CRM API)
    function simulateImportCandidate(url) {
        // Simulate a successful import based on URL format (You should replace this with real validation)
        setTimeout(() => {
            if (url.includes('linkedin.com')) {
                alert('Candidate successfully imported!', 'success');
            } else {
                alert('Error: Invalid LinkedIn URL.', 'error');
            }
        }, 1000);
    }

    // Show feedback message (either success or error)
    function showFeedback(message, type) {
        feedback.textContent = message;
        feedback.classList.remove('hidden', 'success', 'error');
        feedback.classList.add(type);
        feedback.style.display = 'block';
    }
});
