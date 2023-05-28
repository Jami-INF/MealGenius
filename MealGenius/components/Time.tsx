import { Text } from "react-native";

type TimeProps = {
    time: number
}

/** Transform the time in minutes to a string.
 * @param props The time in minutes.
 * @example
 * <Time time={0}/> => ""
 * <Time time={1}/> => "1 minute"
 * <Time time={2}/> => "2 minutes"
 * <Time time={60}/> => "1 hour"
 * <Time time={120}/> => "2 hours"
 * <Time time={61}/> => "1 hour 1 minute"
 * <Time time={121}/> => "2 hours 2 minutes"
 * 
 */
export default function Time(props: TimeProps): JSX.Element {
    return (
        <Text>{getTimeText(props.time)}</Text>
    )
}

/** Get the hours written in text.
 * @param time The time in minutes.
 * @example 
 * getHoursText(0) => ""
 * getHoursText(1) => "1 hour"
 * getHoursText(2) => "2 hours"
 */
function getHoursText(time: number): string {
    let hours: number = Math.floor(time / 60);

    if (hours <= 0)
        return ""
    else 
        return hours === 1 ? `${hours} hour` : `${hours} hours`;
}

/** Get the minutes written in text.
 * @param time The time in minutes.
 * @example
 * getMinutesText(0) => ""
 * getMinutesText(1) => "1 minute"
 * getMinutesText(2) => "2 minutes"
 */
function getMinutesText(time: number): string {
    let minutes: number = time % 60;

    if (minutes <= 0)
        return ""
    else 
        return minutes === 1 ? `${minutes} minute` : `${minutes} minutes`;
}

/** Get the time written in text.
 * @param time The time in minutes.
 * @example
 * getTimeText(0) => ""
 * getTimeText(1) => "1 minute"
 * getTimeText(2) => "2 minutes"
 * getTimeText(60) => "1 hour"
 * getTimeText(61) => "1 hour 1 minute"
 * getTimeText(62) => "1 hour 2 minutes"
 * getTimeText(120) => "2 hours"
 * getTimeText(121) => "2 hours 1 minute"
 * getTimeText(122) => "2 hours 2 minutes"
 */
function getTimeText(time: number): string {
    return `${getHoursText(time)} ${getMinutesText(time)}`;
}