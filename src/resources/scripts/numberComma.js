const numberComma = x => {
    if (!x)
        return ''
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

module.exports = numberComma