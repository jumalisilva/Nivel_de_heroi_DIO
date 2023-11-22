let heroi = prompt("Digite o nome do seu herói: ");
let xp = prompt("Digite um valor de XP para descobrir o nível do seu herói: ");

for(let nivel = 0; nivel <= xp; nivel += 1) {
    if (xp < 1000) {
        console.log(`O ${heroi} está no nível Ferro!`);
    } else if (xp <= 2000) {
        console.log(`O ${heroi} está no nível Bronze!`);
    } else if (xp <= 5000) {
        console.log(`O ${heroi} está no nível Prata!`)
    } else if (xp <= 7000) {
        console.log(`O ${heroi} está no nível Ouro!`);
    } else if (xp <= 8000) {
        console.log(`O ${heroi} está no nível Platina!`);
    } else if (xp <= 9000) {
        console.log(`O ${heroi} está no nível Ascendente!`);
    } else if (xp <= 10000) {
        console.log(`O ${heroi} está no nível Imortal!`);
    } else if (xp >= 10001) {
        console.log(`O ${heroi} está no nível Radiante!`);
    }
}
