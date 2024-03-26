document.getElementById('fetchData').addEventListener('click', async () => {
    const displayElement = document.getElementById('dataDisplay');
    displayElement.innerHTML = ''; // Clear existing content
    try {
        const response = await fetch('/api/data');
        const data = await response.json();
        
        // Assuming data is an array of objects
        const content = data.map(item => {
            return `<div class="data-item">
                        <h3>${item.id}</h3>
                        <p>${item.name}</p>
                        <p>${item.price}</p>
                    </div>`;
        }).join('');
        
        displayElement.innerHTML = content;
    } catch (error) {
        console.error('Error fetching data:', error);
        displayElement.innerHTML = `<p>Error fetching data</p>`;
    }
});
