let sample_string_1 = "AaBbc";
let sample_string_2 = "aabbc";
let sample_string_3 = "AABBC";

function swap_case(str) {

    // convert string to array
    let string_to_array = str.split("");

    for (let i = 0; i < string_to_array.length; i++) {
        
        // if the current element is a lower case letter
        if (string_to_array[i] === string_to_array[i].toLowerCase()) {

            // swap case
            string_to_array[i] = string_to_array[i].toUpperCase();
        }

        else {

            // swap case
            string_to_array[i] = string_to_array[i].toLowerCase();
        }
    }

    let swapped_string = string_to_array.join("");

    return swapped_string;
}

console.log(swap_case(sample_string_1));    // aAbBC
console.log(swap_case(sample_string_2));    // AABBC
console.log(swap_case(sample_string_3));    // aabbc