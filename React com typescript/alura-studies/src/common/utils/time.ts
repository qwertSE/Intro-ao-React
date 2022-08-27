export function timeToSeconds(time: string): Number {
  const [hours, minutes, seconds] = time.split(":");

  const hoursInSeconds = Number(hours) * 3600;
  const minutesInSeconds = Number(minutes) * 60;

  return hoursInSeconds + minutesInSeconds + Number(seconds);
}
