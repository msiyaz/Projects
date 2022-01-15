let button = document.getElementById('btn');

button.addEventListener('click', function(){
    const convert = parseInt(document.getElementById('to_convert').value);
    const type = document.getElementById('type').value;
    const i_type = document.getElementById('i_type').value;

    if(convert === '' || isNaN(convert)){
        document.getElementById('to_convert').focus();
        document.getElementById('error').innerHTML = 'Please provide a valid input';
        document.getElementById('output').innerHTML = '';
    }
    else{
        document.getElementById('error').innerHTML = '';
        switch(i_type)
            {
                // converting from Pounds to other measurements
            case 'I_Pounds':
                switch(type){
                    case 'Pounds':
                        let rate1 = 1, pounds;
                        pounds = convert * rate1;
                        document.getElementById('output').innerHTML = convert + " Pounds = " + pounds.toFixed(3) + ' pounds.';
                        break;
                    case 'Kilograms':
                        let rate2 = 0.453592, kilogram;
                        kilogram = convert * rate2;
                        document.getElementById('output').innerHTML = convert + " Pounds = " + kilogram.toFixed(3) + ' kg.';
                        break;
                    case 'Ounces':
                        let rate3 = 16, ounces;
                        ounces = convert * rate3;
                        document.getElementById('output').innerHTML = convert + " Pounds = " + ounces.toFixed(3) + ' ounces.';
                        break;
                    case 'Stones':
                        let rate4 = 0.0714286, stones;
                        stones = convert * rate4;
                        document.getElementById('output').innerHTML = convert + " Pounds = " + stones.toFixed(3) + ' stones.';
                        break;
                    default:
                        alert('Error');
                        break;
                }
            break;
                //converting from kgs to other measurements
            case 'I_Kilograms':
                switch(type){
                    case 'Pounds':
                        let rate11 = 2.20462, pounds;
                        pounds = convert * rate11;
                        document.getElementById('output').innerHTML = convert + " kgs = " + pounds.toFixed(3) + ' pounds.';
                        break;
                    case 'Kilograms':
                        let rate22 = 1, kilogram;
                        kilogram = convert * rate22;
                        document.getElementById('output').innerHTML = convert + " kgs = " + kilogram.toFixed(3) + ' kg.';
                        break;
                    case 'Ounces':
                        let rate33 = 35.2739199982575, ounces;
                        ounces = convert * rate33;
                        document.getElementById('output').innerHTML = convert + " kgs = " + ounces.toFixed(3) + ' ounces.';
                        break;
                    case 'Stones':
                        let rate44 = 0.15747285713507810923, stones;
                        stones = convert * rate44;
                        document.getElementById('output').innerHTML = convert + " kgs = " + stones.toFixed(3) + ' stones.';
                        break;
                    default:
                        alert('Error');
                        break;
                }
            break;
                //converting from Ounces to other measurements
            case 'I_Ounces':
                switch(type){
                    case 'Pounds':
                        let rate111 = 0.0625, pounds;
                        pounds = convert * rate111;
                        document.getElementById('output').innerHTML = convert + " ounce = " + pounds.toFixed(3) + ' pounds.';
                        break;
                    case 'Kilograms':
                        let rate222 = 0.0283495, kilogram;
                        kilogram = convert * rate222;
                        document.getElementById('output').innerHTML = convert + " ounce = " + kilogram.toFixed(3) + ' kg.';
                        break;
                    case 'Ounces':
                        let rate333 = 1, ounces;
                        ounces = convert * rate333;
                        document.getElementById('output').innerHTML = convert + " ounce = " + ounces.toFixed(3) + ' ounces.';
                        break;
                    case 'Stones':
                        let rate444 = 0.00446429, stones;
                        stones = convert * rate444;
                        document.getElementById('output').innerHTML = convert + " ounce = " + stones.toFixed(3) + ' stones.';
                        break;
                    default:
                        alert('Error');
                        break;
                }
            break;
                //converting from Stones to other measurements
            case 'I_Stones':
                switch(type){
                    case 'Pounds':
                        let rate1111 = 14, pounds;
                        pounds = convert * rate1111;
                        document.getElementById('output').innerHTML = convert + " stoness = " + pounds.toFixed(3) + ' pounds.';
                        break;
                    case 'Kilograms':
                        let rate2222 = 6.35029, kilogram;
                        kilogram = convert * rate2222;
                        document.getElementById('output').innerHTML = convert + " stones = " + kilogram.toFixed(3) + ' kg.';
                        break;
                    case 'Ounces':
                        let rate3333 = 16, ounces;
                        ounces = convert * rate3333;
                        document.getElementById('output').innerHTML = convert + " stones = " + ounces.toFixed(3) + ' ounces.';
                        break;
                    case 'Stones':
                        let rate4444 = 224, stones;
                        stones = convert * rate4444;
                        document.getElementById('output').innerHTML = convert + " stones = " + stones.toFixed(3) + ' stones.';
                        break;
                    default:
                        alert('Error');
                        break;
                }
            break;
            default:
                alert('Error');
        }
    }
});