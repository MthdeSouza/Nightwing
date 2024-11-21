import { formatDate } from "../utils/format-date"

const DateComponent = ({ dateString, options, ...rest }) => {
  const date = new Date(dateString);

  const formattedDate = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }).format(date);

  return (
    <time dateTime={dateString} {...rest}>
      {formattedDate}
    </time>
  )
}

export default DateComponent
