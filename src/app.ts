async function getNumberFact() {
    const numberInput = document.getElementById('numberInput') as HTMLInputElement;
    const selectCategory = document.getElementById('selectCategory') as HTMLSelectElement;
    const factResult = document.getElementById('factResult') as HTMLSelectElement;

    const number = numberInput.value;
    const category = selectCategory.value;

    if (!number) {
        alert('Please enter a valid number');
        return;
    }

    try {
        const response = await fetch(`http://numbersapi.com/${number}/${category}`);
        const data = await response.text();
        factResult.innerHTML = data;
    } catch (error) {
        console.error('Error fetching data:', error);
        factResult.innerHTML = 'Error fetching data. Please try again.';
    }
}
