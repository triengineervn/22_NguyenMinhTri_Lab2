const scriptSelector = document.getElementById('scriptSelector');
const runScriptButton = document.getElementById('runScriptButton');
const outputDiv = document.getElementById('output');

runScriptButton.addEventListener('click', () => {
    const selectedScript = scriptSelector.value;
    console.clear();
    
    if (selectedScript) {
        outputDiv.innerHTML = '';

        const dynamicScript = document.createElement('script');
        dynamicScript.src = selectedScript;

        document.body.appendChild(dynamicScript);
    } else {
        outputDiv.innerHTML = 'Vui lòng chọn một script để chạy.';
    }
});
