import DateFnsUtils from '@date-io/date-fns'
import { useState } from "react";
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import jaLocale from 'date-fns/locale/ja'
import { format } from 'date-fns'

const CalendarButton = () => {
  const [date, setDate] = useState(new Date())

  const changeDateHandler = (newDate) => {
    setDate(newDate)
  }
  class JaLocalizedUtils extends DateFnsUtils {
    getCalendarHeaderText() {
        return format(date, 'yyyy年M月', { locale: this.locale })
      }
    // ヘッダ部分のテキストを取得するメソッド
    getDatePickerHeaderText() {
      return format(date, 'M月d日(E)', { locale: this.locale })
    }
  }

  return (
    <MuiPickersUtilsProvider utils={JaLocalizedUtils} locale={jaLocale}>
      <DatePicker value={date} format="yyyy年M月d日" onChange={changeDateHandler} />
    </MuiPickersUtilsProvider>
  )
}

export default CalendarButton;