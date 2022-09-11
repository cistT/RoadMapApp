import DateFnsUtils from "@date-io/date-fns";
import { useState } from "react";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import jaLocale from "date-fns/locale/ja";
import { format } from "date-fns";

import { css } from "@emotion/react";

class JaLocalizedUtils extends DateFnsUtils {
    getCalendarHeaderText(date) {
        return format(date, "yyyy年M月", { locale: this.locale });
    }
    // ヘッダ部分のテキストを取得するメソッド
    getDatePickerHeaderText(date) {
        return format(date, "M月d日(E)", { locale: this.locale });
    }
}

const CalendarButton = () => {
    const [date, setDate] = useState(new Date());

    const [isUnChanged, setIsUnChanged] = useState(
        date.getFullYear === new Date().geFullYear &&
            date.getMonth === new Date().getMonth &&
            date.getDate === new Date().getDate
    );

    const changeDateHandler = (newDate) => {
        setDate(newDate);
        setIsUnChanged(true);

        // ここにgasにを更新する処
    };

    return (
        <MuiPickersUtilsProvider utils={JaLocalizedUtils} locale={jaLocale}>
            <DatePicker
                value={date}
                format="yyyy年M月d日"
                onChange={changeDateHandler}
            />
            {isUnChanged ? (
                <span css={styles.message}>予定日は既に入力されています</span>
            ) : (
                <span css={styles.cautionMessage}>まだ予定日が未定です</span>
            )}
        </MuiPickersUtilsProvider>
    );
};

const styles = {
    message: css`
        font-weight: bold;
    `,
    cautionMessage: css`
        color: red;
        font-weight: bold;
    `,
};

export default CalendarButton;
