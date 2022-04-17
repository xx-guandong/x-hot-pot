/**
 *  ex: return January 24, 2022
 * */
export function MMDDYYYY(timeStamp: number) {
  const date = new Date(timeStamp);
  const mm = date.getMonth();
  const dd = date.getDate();
  const yyyy = date.getFullYear();
  return `${Months[mm]} ${dd}, ${yyyy}`;
}

const Months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
