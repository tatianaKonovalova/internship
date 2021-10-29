// Count IP Addresses
function ipsBetween(startIP, endIP) {
    let startIPArr = startIP.split('.');
    let endIPArr = endIP.split('.');

    function calc(index, factor = 1) {
        return (endIPArr[index] - startIPArr[index]) * factor; 
    }

    return calc(0, 256*256*256) + calc(1, 256*256) + calc(2, 256) + calc(3);
}

console.log(ipsBetween("10.0.0.0", "10.0.0.50"));
console.log(ipsBetween("20.0.0.10", "20.0.1.0"));

