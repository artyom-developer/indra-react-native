import React, { useState  } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Button from '../../components/Button'
import ModalComponent from '../../components/Modal';

const colorBlue = "Azul";
const textRed  = "Rojo";

export default function Index() {

    const [ textColor, setTextColor ] = useState('black');
    const [modalVisible, setModalVisible] = useState(false);
    const [ nameColor, setNameColor ] = useState("Negro");

    const handleTextColor = ({ nameColor, color }) => {
        setTextColor(color)
        setModalVisible(true);
        setNameColor(nameColor)
    }
  return (
    <View style={styles.container}>
        <Text style={[styles.title,{color: textColor}]}>Prueba Básica</Text>
        <View style={styles.containerButton}>
            <Button text={colorBlue} 
            style={{backgroundColor: 'blue' }}
            onPress={()=>handleTextColor({nameColor:colorBlue,color:'blue'})}/>
            <Button text={textRed} 
            style={{backgroundColor: 'red' }}
            onPress={()=>handleTextColor({nameColor:textRed,color:'red'})}/>
        </View>     

        <Text>Desarrollado por Luis Felipe Perdomo M.</Text>

        <ModalComponent 
        showModal={modalVisible}
        textModal={"Señor usuario el color de la pantalla ha cambiado a "+nameColor} 
        onClick={()=>setModalVisible(false)} />
 

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center',  
    justifyContent: 'center'
  },
  containerButton:{
    flexDirection:'row'    
  },
  title:{
     fontSize:20,
     margin:20,
     textAlign:'center'
  }, 
});
