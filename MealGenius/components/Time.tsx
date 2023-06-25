import { useContext } from "react";
import { Text } from "react-native";
import { DarkThemeContext } from "../App";

type TimeProps = {
    time: number,
    fontSize?: number,
}

/** Transform the time in minutes to a string.
 * @param props The time in minutes.
 * @example
 * <Time time={0}/> => ""
 * <Time time={1}/> => "1 min"
 * <Time time={2}/> => "2 min"
 * <Time time={60}/> => "1h"
 * <Time time={120}/> => "2h"
 * <Time time={121}/> => "2 h 1 min"
 * <Time time={122}/> => "2 h 2 min"
 */
export default function Time(props: TimeProps): JSX.Element {
    const { theme } = useContext(DarkThemeContext);

    return (
        <Text testID="time" style={{fontSize: props.fontSize, color: theme.secondaryTextColor}}>{getTimeText(props.time)}</Text>
    )
}

/** Get the hours written in text.
 * @param time The time in minutes.
 * @example 
 * getHoursText(0) => ""
 * getHoursText(1) => "1 h"
 * getHoursText(2) => "2 h"
 */
function getHoursText(time: number): string {
    let hours: number = Math.floor(time / 60);

    return hours <= 0 ? "" : `${hours} h`
}

/** Get the minutes written in text.
 * @param time The time in minutes.
 * @example
 * getMinutesText(0) => ""
 * getMinutesText(1) => "1 min"
 * getMinutesText(2) => "2 min"
 */
function getMinutesText(time: number): string {
    let minutes: number = time % 60;

    return minutes <= 0 ? "" : `${minutes} min`
}

/** Get the time written in text.
 * @param time The time in minutes.
 * @example
 * getTimeText(0) => ""
 * getTimeText(1) => "1 min"
 * getTimeText(2) => "2 min"
 * getTimeText(60) => "1 h"
 * getTimeText(120) => "2 h"
 * getTimeText(121) => "2 h 1 min"
 * getTimeText(122) => "2 h 2 min"
 */
function getTimeText(time: number): string {
    return `${getHoursText(time)} ${getMinutesText(time)}`;
}