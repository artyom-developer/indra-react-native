import { StyleSheet, Dimensions } from 'react-native';

var { width } = Dimensions.get("window")

const widthButton = (width/2)-40;
  
const styles = StyleSheet.create({
  button: { 
      width: widthButton,
      backgroundColor:'#216869',
      borderRadius:10,
      margin:10
  },
  textButton:{
      color:'white',
      fontWeight:'bold',
      margin:10,
      textAlign:'center'
  }
});

export default styles;