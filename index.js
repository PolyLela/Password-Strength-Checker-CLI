const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output: process.stdout
});

function ask(question) {
    return new Promise(resolve => {
        rl.question(question, answer => resolve(answer));
    });
}

function isSymbol(_char) {
    if (_char == "!" || _char == "@" || _char == "#" || _char == "$" || 
        _char == "%" || _char == "^" || 
        _char == "&" || _char == "*" ||_char == "(" || _char == ")" ){
            return true;
        }
        return false;
}

async function main() {
    console.log("Password Strength Checker V1.0");
    let pass = await ask("Type Your Password : ");
    let x = pass.length;
    let strength = 0;
    for (let i = 0; i < x; i++) {
        if (!isNaN(Number(pass[i]))) {
            strength++;
        } else if (isSymbol(pass[i])) {
            strength++;
        } else {
            continue;
        }
    }
    if (strength >= x/3) {
        console.log("Your Password Strength Is Medium " + strength);
    } else if (strength >= x/2) {
        console.log("Your Password Is Strong " + strength);
    } else {
        console.log("Your Password Is Weak " + strength);
    }
    rl.close();
}
main();