import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text, Button, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, {useState} from 'react';
import styleCalculo from '../styles/styleCalculo';
import { useRouter } from 'expo-router';

export default function Triangulo() {
    const router = useRouter();
    const [ladoA, setLadoA] = useState('');
    const [ladoB, setLadoB] = useState('');
    const [ladoC, setLadoC] = useState('');
    const [altH, setAltH] = useState('');
    const [resultado, setResultado] = useState({A: null, P: null});
    
    const Calcular = () => {
        const a = parseFloat(ladoA);
        const b = parseFloat(ladoB);
        const c = parseFloat(ladoC);
        const h = parseFloat(altH);

        if(!isNaN(a) && !isNaN(b) && !isNaN(c) && !isNaN(h)) {
            const A = (b * h) / 2;
            const P = a + b + c;

            setResultado({
                A: A.toFixed(2),
                P: P.toFixed(2),
            });
        }
    }


  return (
    <ScrollView style={styleCalculo.background}>
        <View style={styleCalculo.header}>
          <TouchableOpacity style={{position: 'absolute'}} onPress={() => router.back()}>
            <Image source={require('../assets/iconBack.png')}/>
          </TouchableOpacity>
          <Text style={styleCalculo.headerText}>Triangulo</Text>
        </View>
        <View style={styleCalculo.contentContainer}>
          <Image style={styleCalculo.img} source={require("../assets/formulaTriangulo.jpg")}/>
          <TextInput style={styleCalculo.styleInput} placeholder='Lado A' keyboardType='numeric' value={ladoA} onChangeText={setLadoA}/>
          <TextInput style={styleCalculo.styleInput} placeholder='Lado B' keyboardType='numeric' value={ladoB} onChangeText={setLadoB}/>
          <TextInput style={styleCalculo.styleInput} placeholder='Lado C' keyboardType='numeric' value={ladoC} onChangeText={setLadoC}/>
          <TextInput style={styleCalculo.styleInput} placeholder='Altura (H)' keyboardType='numeric' value={altH} onChangeText={setAltH}/>
          <TouchableOpacity style={styleCalculo.styleButton} title="Calcular" onPress={Calcular} >
            <Text style={styleCalculo.styleButtonText}>Calcular</Text>
          </TouchableOpacity>
          {resultado.A && (
            <View style={styleCalculo.result}>
                <Text style={styleCalculo.resultText}>Área: <Text style={styleCalculo.resultNumber}>{resultado.A}</Text></Text>
                <Text style={styleCalculo.resultText}>Perímetro: <Text style={styleCalculo.resultNumber}>{resultado.P}</Text></Text>
            </View>
          )}
        </View>
    </ScrollView>
  );
}