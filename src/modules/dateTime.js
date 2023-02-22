import { DateTime } from 'luxon';

const showDate = () => {
  const spanDate = document.getElementById('showDate');
  const dt = DateTime.now();
  spanDate.textContent = dt.toLocaleString(DateTime.DATE_MED);
};

export default showDate;