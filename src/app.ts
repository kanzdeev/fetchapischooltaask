async function getNumberFact() {
    const numberInput = document.getElementById('numberInput') as HTMLInputElement;
    const selectCategory = document.getElementById('selectCategory') as HTMLSelectElement;
    const factResult = document.getElementById('factResult') as HTMLDivElement;

    const number = numberInput.value;
    const category = selectCategory.value;

    if (!number || isNaN(+number)) {
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

function getRandomCategoryIndex() {
    const selectCategory = document.getElementById('selectCategory') as HTMLSelectElement;
    return Math.floor(Math.random() * selectCategory.options.length);
}

async function generateRandomNumberAndFact() {
    const randomInput = document.getElementById('numberInput') as HTMLInputElement;
    randomInput.value = Math.floor(Math.random() * 100).toString();

    const selectCategory = document.getElementById('selectCategory') as HTMLSelectElement;
    selectCategory.selectedIndex = Math.floor(Math.random() * selectCategory.options.length);

    await getNumberFact();
}