//hashmap
class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let prime = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * prime + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value) {
        const index = this._hash(key);
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }

    get(key) {
        const index = this._hash(key);
        if (this.keyMap[index]) {
            for (let pair of this.keyMap[index]) {
                if (pair[0] === key) {
                    return pair[1];
                }
            }
        }
        return undefined;
    }

    keys() {
        let keysArray = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let pair of this.keyMap[i]) {
                    keysArray.push(pair[0]);
                }
            }
        }
        return keysArray;
    }

    values() {
        let valuesArray = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let pair of this.keyMap[i]) {
                    valuesArray.push(pair[1]);
                }
            }
        }
        return valuesArray;
    }
}


function firstRecurringCharacter(str) {
    const charMap = new Map();
    for (let char of str) {
        if (charMap.has(char)) {
            return char;
        } else {
            charMap.set(char, true);
        }
    }
    return null;
}
