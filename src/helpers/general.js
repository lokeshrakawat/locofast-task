
export const getDateString = (date) => {
    let d = new Date(date);
    d = d.toDateString().substr(4);
    return d.substr(0, 6) + ',' + d.substr(6)
};