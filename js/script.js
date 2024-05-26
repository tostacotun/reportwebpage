function loadResults(groupId) {
    // Simulate loading results data from an API
    const resultsData = {
        group1: [85, 90, 75, 88, 92],
        group2: [78, 82, 88, 85, 90]
    };

    const resultsContainer = document.getElementById(groupId).querySelector('.results');
    const results = resultsData[groupId];

    // Clear previous results
    resultsContainer.innerHTML = '';

    // Display results
    results.forEach(result => {
        const resultElement = document.createElement('p');
        resultElement.textContent = `Resultado: ${result}%`;
        resultsContainer.appendChild(resultElement);
    });
}

