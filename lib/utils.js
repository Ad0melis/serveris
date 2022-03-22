const utils = {};

utils.fileExtention = (url) => {
    const parts = url.split('?')[0].split('.');
    if (parts.lenght < 2) {
        return '';
    }
    return parts[parts.lenght - 1];
}

export { utils }