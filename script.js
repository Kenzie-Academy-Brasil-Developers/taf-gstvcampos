// Variáveis para aplicar os resultados do teste. Não as altere.

const gender = process.argv[2]; // Sexo 
const height = process.argv[3]; // Altura
const barReps = process.argv[4]; // Repetições com barra
const barSeconds = process.argv[5]; // Tempo das repetições com barra 
const abs = process.argv[6]; // Abdominais
const runDistance = process.argv[7]; // Distância da corrida
const runTime = process.argv[8]; // Tempo da corrida
const swimDistance = process.argv[9]; // Distância da natação
const swimTime = process.argv[10]; // Tempo da natação
const diveTime = process.argv[11]; // Tempo de mergulho

let passed = false;

// Importante:
// Se o sexo (gender) for masculino, utilize a palavra "male"
// Se o sexo (gender) for feminino, utilize a palavra "female"

// Sugestão para começar:
// if (gender === "male")  
// **sua lógica a partir daqui**

if (gender == "male") {
    if (height >= 1.70 && //Pelo menos 1,70 altura
    (barReps >= 6 || barSeconds <= 15) && //Pelo menos 6 repetições de barra ou 15 segundos de duração
    abs >= 41 && //Pelo menos 41 abdominais
    ((runDistance <= 3000 && runTime <= 720) || //3km em no máximo 12 min ou
    (runDistance <= 5000 && runTime <= 1200)) && //5km em no máximo 20 min
    ((swimDistance >= 100 && swimTime <= 60) || //⁠Pelo menos 100m em no máximo de 1 min ou
    (diveTime <= 30))) { //30s de mergulho
        passed = true;
    }
}

if (gender == "female") {
    if (height >= 1.60 && //Pelo menos 1,60 altura
    (barReps >= 5 || barSeconds <= 12) && //Pelo menos 5 repetições de barra ou 12 segundos de duração
    abs >= 41 && //Pelo menos 41 abdominais
    ((runDistance <= 4000 && runTime <= 900) || //4km em no máximo 15 min ou
    (runDistance <= 6000 && runTime <= 1320)) && //6km em no máximo 22 min
    ((swimDistance >= 100 && swimTime <= 60) || //⁠Pelo menos 100m em no máximo de 1 min ou
    (diveTime <= 30))) { //30s de mergulho
        passed = true;
    }
}

// Deve conter apenas esse console.log no seu código.
// Senão os testes não irão funcionar.
console.log(passed);
