module.exports = function toReadable (number) {
    if (number === 0) return 'zero';

    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    function convertHundreds(num) {
        if (num >= 100) {
            return ones[Math.floor(num / 100)] + ' hundred ' + convertTens(num % 100);
        } else {
            return convertTens(num);
        }
    }

    function convertTens(num) {
        if (num < 10) {
            return ones[num];
        } else if (num >= 10 && num < 20) {
            return teens[num - 10];
        } else {
            return tens[Math.floor(num / 10)] + ' ' + ones[num % 10];
        }
    }

    return convertHundreds(number).trim();

}

