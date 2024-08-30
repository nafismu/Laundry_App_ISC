import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, TextInput, ActivityIndicator } from "react-native-paper";
import { FIREBASE_AUTH } from "../FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

export default function CreateAccountScreen() {
  const auth = FIREBASE_AUTH;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const signUp = async () => {
    if (!email || !password) {
      alert("Please enter email and password.");
      return;
    }
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Registration Successful. Please check your email.");
      navigation.navigate('Auth',{ screen: "LoginScreen" });
    } catch (error) {
      console.log(error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={style.container}>
      <View style={{ flex: 1 }}>
        <View style={style.header}>
          <Text style={style.headerTitle}>Hey, Hello</Text>
          <Text style={style.headerSubtitle}>
            Silahkan untuk{" "}
            <Text style={{ fontWeight: "bold" }}>Membuat Akun</Text> untuk akses
            aplikasinya
          </Text>
        </View>
        {/* Social Media Buttons */}
        <View style={style.socialContainer}>
          <TouchableOpacity style={style.socialButton}>
            <Image
              source={require("../assets/google.png")}
              style={style.socialIcon}
            />
            <Text style={style.socialText}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.socialButton}>
            <Image
              source={require("../assets/facebook.png")}
              style={style.socialIcon}
            />
            <Text style={style.socialText}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.socialButton}>
            <Image
              source={require("../assets/apple.png")}
              style={style.socialIcon}
            />
            <Text style={style.socialText}>Apple</Text>
          </TouchableOpacity>
        </View>
        {/* Divider */}
        <View style={style.dividerContainer}>
          <View style={style.dividerLine} />
          <Text style={style.dividerText}>Atau</Text>
          <View style={style.dividerLine} />
        </View>
        {/* Registration Form */}
        <View style={style.formContainer}>
          <Text style={style.inputLabel}>Email</Text>
          <TextInput
            style={style.input}
            underlineColor="transparent"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(newText) => setEmail(newText)}
            value={email}
          />
          <Text style={style.inputLabel}>Sandi</Text>
          <View style={style.passwordContainer}>
            <TextInput
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={(newText) => setPassword(newText)}
              underlineColor="transparent"
              style={style.input}
            />
            <MaterialCommunityIcons
              name={showPassword ? "eye" : "eye-off"}
              size={24}
              color="black"
              style={style.eyeIcon}
              onPress={toggleShowPassword}
            />
          </View>
          {loading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <TouchableOpacity onPress={signUp} style={style.registerButton}>
              <Text style={style.registerButtonText}>Create Account</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: 50,
    marginLeft: 20,
  },
  headerTitle: { fontSize: 25, fontWeight: "bold", marginBottom: 10 },
  headerSubtitle: { fontSize: 15, fontWeight: "normal" },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 30,
  },
  socialButton: {
    height: 50,
    width: 100,
    borderWidth: 1,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    borderColor: "gray",
    justifyContent: "center",
  },
  socialIcon: { width: 30, height: 30, marginRight: 5 },
  socialText: { fontSize: 16, fontWeight: "bold" },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
    marginHorizontal: 20,
  },
  dividerLine: { flex: 1, height: 1, backgroundColor: "gray" },
  dividerText: { marginHorizontal: 10, fontSize: 15, color: "gray" },
  formContainer: { alignItems: "center", gap: 20 },
  inputLabel: {
    alignSelf: "flex-start",
    marginLeft: 20,
    fontWeight: "bold",
    fontSize: 15,
  },
  input: {
    height: 50,
    width: width - 40,
    borderColor: "gray",
    backgroundColor: "white",
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  passwordContainer: { position: "relative", width: width - 40 },
  eyeIcon: { position: "absolute", right: 10, top: 13 },
  registerButton: {
    marginTop: 30,
    backgroundColor: "pink",
    padding: 15,
    borderRadius: 10,
    width: width - 40,
    alignItems: "center",
  },
  registerButtonText: { color: "white", fontSize: 18, fontWeight: "bold" },
});
