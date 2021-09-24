const calculateTemp = () => {

    const numberTemp = document.getElementById('temp').value;
    const tempSelect = document.getElementById('temp_diff');

    // const valueTemp = temp_diff.options[tempSelect.selectedIndex].value;

    const valueTemp = tempSelect.options[tempSelect.selectedIndex].value;
    console.log(valueTemp);

    const celToFah = (cel) => {
        let farenheit = Math.round((cel * 9 / 5) + 32);
        return farenheit;
    }
    const fahToCel = (fah) => {
        let celsius = Math.round((fah - 32) * 5 / 9);
        return celsius;
    }


    let result;

    if (valueTemp == 'cel') {
        result = celToFah(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result} Farenheit`;

    } else {
        result = fahToCel(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result} celsius`;
    }
}