import { Text, View, TouchableOpacity, Dimensions } from 'react-native';

var { width } = Dimensions.get("window")

const widthButton = (width/2)-40;

import styles from './style';

export default function Button({ text, style, onPress }) {
  return (
      <TouchableOpacity onPress={onPress}>
        <View style={[styles.button,style]}>
            <Text style={styles.textButton}>{text}</Text> 
        </View>
      </TouchableOpacity>
  );
}
 