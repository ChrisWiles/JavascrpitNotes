function getFrequency(string) {
    var freq = {};
    for (var i = 0; i < string.length; i++) {
        var character = string[i];
        if (freq[character]) {
            freq[character]++;
        } else {
            freq[character] = 1;
        }
    }
    return freq;
}

function count(string) {
    var count = {};
    string.split('').forEach(function(s) {
        count[s] ? count[s]++ : count[s] = 1;
    });
    return count;
}
console.log(count('Quantum mechanics (QM; also known as quantum physics, or quantum theory) is a fundamental branch of physics which describes physical phenomena at scales typical of the quantum realm of atomic and subatomic length scales, where the action is on the order of the Planck constant. At these scales, many everyday concepts concerning physical objects and energy (including the photons making up visible light) are believed to behave and interact extremely differently than is usually seen in daily life. Quantum mechanics provides an extremely accurate description of the behavior of photons, electrons, and other atomic- and molecular-scale objects. At larger (macroscopic) scales its predictions simplify to become the laws of classical mechanics familiar in the everyday world, although even in the everyday world, many phenomena can be observed with the naked eye, which cannot be explained classically but require a quantum mechanical explanation. Important applications of quantum mechanical theory include superconducting magnets, LEDs and the laser, the transistor and semiconductors such as the microprocessor, medical and research imaging such as MRI and electron microscopy, and explanations for many biological and physical phenomena.'));