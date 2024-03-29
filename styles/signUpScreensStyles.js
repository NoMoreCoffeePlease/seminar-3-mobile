import { StyleSheet } from 'react-native';
import { useFonts } from '@expo-google-fonts/inter';

const signUpStyles = () => {
const fonts = useFonts({
    "DM-Sans": require("../assets/fonts/DMSans-Regular.ttf"),
    "SF-Pro": require("../assets/fonts/SFPro.ttf"),
  });
}

export const styles = StyleSheet.create({
    mainPage: {
      flex: 1,
      backgroundColor: "#FAFAFA",
      padding: 20
    },
    artwork: {
      flex: 1,
      alignItems: "center",
      padding: 30
    },
    text: {
      flex: 0.7,
    },
    title: {
      textAlign: "center",
      fontFamily: 'DM-Sans',
      fontWeight: 'bold',
      color:'#dc0005',
      fontSize:34
    },
    underText: {
      fontSize: 17,
      textAlign: "center",
      fontFamily: 'DM-Sans',
      fontWeight: 'bold',
      padding: 5,
      color: '#4F4F4F'
    },
    buttons: {
      flex: 0.5
    },
    createButton: {
      height: 60,
      alignItems: "center",
      backgroundColor: "#31A062",
      borderRadius: 20,
      justifyContent: "center"
    },
    createButtonText: {
      color: "white",
      fontSize: 17,
      fontFamily: 'SF-Pro'
    },
    loginButton: {
      margin: 15
    },
    loginButtonText: {
      color: "#31A062",
      fontSize: 17,
      textAlign: "center",
      fontFamily: 'SF-Pro'
    },
  });