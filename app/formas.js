import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text, Button, Image, ScrollView, TouchableOpacity, Touchable } from 'react-native';
import styleCalculo from '../styles/styleCalculo';
import { useRouter } from 'expo-router';

export default function Formas() {
  const router = useRouter();
  return (
    <ScrollView style={styleCalculo.background}>
      <View style={styleCalculo.header}>
          <Text style={styleCalculo.headerText}>Calculadora Geométrica</Text>
      </View>
      <View style={styleCalculo.contentContainerForm}>
          <TouchableOpacity onPress={() => router.push('/quadrado')} style={styleCalculo.formContainer}>
            <Image style={styleCalculo.imgSelect} source={require("../assets/quadradoThumb.jpg")}/>
            <Text>Quadrado</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push('/circulo')} style={styleCalculo.formContainer}>
            <Image style={styleCalculo.imgSelect} source={require("../assets/circuloThumb.jpg")}/>
            <Text>Círculo</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push('/triangulo  ')} style={styleCalculo.formContainer}>
            <Image style={styleCalculo.imgSelect} source={require("../assets/trianguloThumb.jpg")}/>
            <Text>Triângulo</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push('/quadrado')} style={styleCalculo.formContainer}>
            <Image style={styleCalculo.imgSelect} source={require("../assets/retanguloThumb.jpg")}/>
            <Text>Retângulo</Text>
          </TouchableOpacity>
      </View>
    </ScrollView>
  );
}