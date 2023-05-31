import { Searchbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

type SearchBarProps = {
    /** The text to display in the search bar. */
    placeholder: string,
    /** The function to call when the text changes. */
    onChangeText: (text: string) => void,
    style?: Object
}

/** Display a search bar.
 * @param props The text to display in the search bar, the function to call when the text changes and the function to call when the search bar is submitted.
 */
export default function SearchBar(props: SearchBarProps): JSX.Element {
    let searchQuery: string = "";
    return (
        <Searchbar 
            placeholder={props.placeholder}
            value={searchQuery}
            onChangeText={props.onChangeText}
            style={props.style}
            />
    )
}
