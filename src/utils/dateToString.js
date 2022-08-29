const dateToString = (date) => {
    if (!date) return undefined;

    const year_str = date.getFullYear();
    const month_str = 1 + date.getMonth();
    const day_str = date.getDate();
    const hour_str = date.getHours();
    const minute_str = date.getMinutes();

    let format_str = "YYYY-MM-DD hh:mm";
    format_str = format_str.replace(/YYYY/g, year_str);
    format_str = format_str.replace(/MM/g, month_str);
    format_str = format_str.replace(/DD/g, day_str);
    format_str = format_str.replace(/hh/g, hour_str);
    format_str = format_str.replace(/mm/g, minute_str);

    return format_str;
};

export default dateToString;
