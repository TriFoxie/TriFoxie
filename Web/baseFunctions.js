function getTime(tz) {
    return new Date().toLocaleTimeString('en-gb', {
        timeZone: tz
    });
}