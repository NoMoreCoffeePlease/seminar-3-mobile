import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { styles } from "../styles/signUpScreensStyles";

const SingUpScreen = ({ navigation }) => {
  return (
    <View style={styles.mainPage}>
      <View style={styles.artwork}>
        <Image source={require("../assets/signup/SingUpArtwork.png")} />
      </View>
      <View style={styles.text}>
        <Text style={styles.title}>Stay on top of your finance with NMCP.</Text>
        <Text style={styles.underText}>
          We are your new financial Advisors to recommend the best investemnts
          for you.
        </Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.createButton}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.createButtonText}>Create account</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SingUpScreen;
