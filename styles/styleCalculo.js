import { StyleSheet } from "react-native";

const styleCalculo = StyleSheet.create ({
    background: { flex: 1, backgroundColor: '#c5effc', gap: 30},
    header: { backgroundColor: "#006aff", height: 60,justifyContent: 'center'},
    headerText: {fontSize: 20, color: "#FFF", fontWeight: 700, alignSelf: 'center'},
    contentContainer: {flex: 1, alignItems: 'center', gap: 20},
    img: {width: 300, height: 300, borderRadius: 50},
    styleInput: {width: 300, height: 55, fontSize: 25, borderColor: '#000', borderRadius: 7, borderWidth: 4, backgroundColor: '#FFF'},
    styleButton: {borderRadius: 20, backgroundColor: "#006aff", width: 100, height: 30, alignItems: 'center'},
    styleButtonText: {color: "#FFF", fontSize: 20, fontWeight: 600},
    result: {backgroundColor: "#001d29", width: 300, height: 100, alignItems: 'center', justifyContent: 'center', gap: 10, borderRadius: 20},
    resultText: {color: "#FFF", fontWeight: 600, fontSize: 20},
    resultNumber: {color: "#006aff", fontWeight: 600, fontSize: 20},
    imgSelect: {width: 150, height: 150, borderRadius: 10},
    formContainer: {flex: 1, flexDirection: 'column', backgroundColor: '#c4c4c4', padding: 20, borderRadius: 20, alignItems: 'center', gap: 20},
    contentContainerForm: {flex: 1, alignItems: 'center', gap: 20},
   })

export default styleCalculo;