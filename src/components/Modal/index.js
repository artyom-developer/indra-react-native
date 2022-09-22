import { StyleSheet, Text, View, Modal } from 'react-native';

import Button from '../../components/Button'

const colorBlue = "Azul";
const textRed  = "Rojo";

export default function ModalComponent({ textModal, showModal, onClick }) {
 
  return ( 
        <Modal
            animationType="slide"
            transparent={true}
            visible={showModal} 
        >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.title}>{textModal}</Text>
            <Button text={'Aceptar'}  onPress={()=> onClick()}/>
          </View>
        </View>
      </Modal> 
  );
}

const styles = StyleSheet.create({
  title:{
     fontSize:20,
     margin:20,
     textAlign:'center'
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
});
