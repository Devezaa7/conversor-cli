// conversor.js

const args = process.argv.slice(2);

if (args.length !== 3) {
    console.log('Por favor, informe: valor, unidade de origem e unidade de destino.');
    process.exit(1);
}

const valor = Number(args[0]);
const origem = args[1].toLowerCase();
const destino = args[2].toLowerCase();

function converter(valor, origem, destino) {
    // Conversão de distâncias
    if ((origem === 'km' || origem === 'quilometros') && (destino === 'mi' || destino === 'milhas')) {
        return valor * 0.621371;
    }
    if ((origem === 'mi' || origem === 'milhas') && (destino === 'km' || destino === 'quilometros')) {
        return valor / 0.621371;
    }

    // Conversão de temperaturas
    if (origem === 'celsius' && destino === 'fahrenheit') {
        return (valor * 9/5) + 32;
    }
    if (origem === 'fahrenheit' && destino === 'celsius') {
        return (valor - 32) * 5/9;
    }

    return null; // Conversão não suportada
}

const resultado = converter(valor, origem, destino);

if (resultado !== null) {
    if (origem === 'celsius' || origem === 'fahrenheit') {
        console.log(`${valor} graus ${origem} é igual a ${resultado.toFixed(2)} graus ${destino}.`);
    } else {
        console.log(`${valor} ${origem} é igual a ${resultado.toFixed(2)} ${destino}.`);
    }
} else {
    console.log('Conversão não suportada!');
}
