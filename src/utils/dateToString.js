const dateToString = (date) => {
    if (!date) return undefined;

    const year_str = date.getFullYear();
    const month_str = 1 + date.getMonth();
    const day_str = date.getDate();
    const hour_str = date.getHours();
    const minute_str = date.getMinutes();

    const month_str_pad = month_str.toString().padStart(2, "0");
    const day_str_pad = day_str.toString().padStart(2, "0");
    const hour_str_pad = hour_str.toString().padStart(2, "0");
    const minute_str_pad = minute_str.toString().padStart(2, "0")

    let format_str = "YYYY-MM-DD hh:mm";
    format_str = format_str.replace(/YYYY/g, year_str);
    format_str = format_str.replace(/MM/g, month_str_pad);
    format_str = format_str.replace(/DD/g, day_str_pad);
    format_str = format_str.replace(/hh/g, hour_str_pad);
    format_str = format_str.replace(/mm/g, minute_str_pad);

    return format_str;
};

export default dateToString;
