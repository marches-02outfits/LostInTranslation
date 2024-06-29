"use strict";

// Event listener for form submission
document.getElementById('nameForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const misspelledName = generateMisspelledName(name);
    const logo = 'logo.png';  // Assuming the logo filename is logo.png
    window.location.href = `result.html?name=${misspelledName}&logo=${logo}`;
});

// Function to generate a misspelled name
function generateMisspelledName(name) {
    const techniques = [
        removeCharacter,
        addRandomCharacter,
        swapCharacters,
        duplicateCharacter,
        phoneticSubstitution,
        keyboardProximityError,
        vowelSwapping,
        consonantDoublingOrReduction,
        silentLetterManipulation,
        homophoneSubstitution
    ];
    const technique = techniques[Math.floor(Math.random() * techniques.length)];
    return technique(name);
}

// Technique functions for generating misspelled names

function removeCharacter(name) {
    const index = Math.floor(Math.random() * name.length);
    return name.slice(0, index) + name.slice(index + 1);
}

function addRandomCharacter(name) {
    const index = Math.floor(Math.random() * (name.length + 1));
    const randomChar = String.fromCharCode(97 + Math.floor(Math.random() * 26));
    return name.slice(0, index) + randomChar + name.slice(index);
}

function swapCharacters(name) {
    if (name.length < 2) return name;
    const index1 = Math.floor(Math.random() * name.length);
    let index2;
    do {
        index2 = Math.floor(Math.random() * name.length);
    } while (index1 === index2);
    const chars = name.split('');
    [chars[index1], chars[index2]] = [chars[index1], chars[index2]];
    return chars.join('');
}

function duplicateCharacter(name) {
    const index = Math.floor(Math.random() * name.length);
    return name.slice(0, index) + name[index] + name.slice(index);
}

function phoneticSubstitution(name) {
    const substitutions = {
        'f': 'ph',
        'c': 'k',
        's': 'z',
        'k': 'c'
    };
    const chars = name.split('');
    for (let i = 0; i < chars.length; i++) {
        if (substitutions[chars[i]]) {
            chars[i] = substitutions[chars[i]];
        }
    }
    return chars.join('');
}

function keyboardProximityError(name) {
    const keyboardMap = {
        'e': ['w', 's', 'd', 'r'],
        'r': ['e', 'd', 'f', 't'],
        't': ['r', 'f', 'g', 'y'],
        // Add more mappings as needed
    };
    const chars = name.split('');
    for (let i = 0; i < chars.length; i++) {
        if (keyboardMap[chars[i]]) {
            const possibleErrors = keyboardMap[chars[i]];
            chars[i] = possibleErrors[Math.floor(Math.random() * possibleErrors.length)];
        }
    }
    return chars.join('');
}

function vowelSwapping(name) {
    const vowels = 'aeiou';
    const chars = name.split('');
    for (let i = 0; i < chars.length; i++) {
        if (vowels.includes(chars[i])) {
            let newVowel;
            do {
                newVowel = vowels[Math.floor(Math.random() * vowels.length)];
            } while (newVowel === chars[i]);
            chars[i] = newVowel;
        }
    }
    return chars.join('');
}

function consonantDoublingOrReduction(name) {
    const chars = name.split('');
    for (let i = 0; i < chars.length; i++) {
        if (i > 0 && chars[i] === chars[i - 1]) {
            chars.splice(i, 1);
        } else if (Math.random() > 0.5) {
            chars.splice(i, 0, chars[i]);
            i++;
        }
    }
    return chars.join('');
}

function silentLetterManipulation(name) {
    const silentLetters = ['k', 'g', 'w', 'h'];
    const chars = name.split('');
    for (let i = 0; i < chars.length; i++) {
        if (silentLetters.includes(chars[i]) && Math.random() > 0.5) {
            chars.splice(i, 1);
        } else if (Math.random() > 0.5) {
            chars.splice(i, 0, chars[i]);
        }
    }
    return chars.join('');
}

function homophoneSubstitution(name) {
    const homophones = {
        'right': 'write',
        'sea': 'see',
        'to': 'too',
        'there': 'their'
    };
    const words = name.split(' ');
    for (let i = 0; i < words.length; i++) {
        if (homophones[words[i]]) {
            words[i] = homophones[words[i]];
        }
    }
    return words.join(' ');
}
