import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();

// Home Screen Component
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <Text style={styles.appText}>Welcome</Text>
      <Image source={require('./assets/man.png')} style={styles.manImage} />
      <Text style={styles.description}>Let's get started! To Test this app.</Text>
      <TouchableOpacity onPress={() => navigation.navigate('NextPage')}>
        <Ionicons name="arrow-forward-circle" size={60} color="#FF6347" />
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

// Next Page Component (Login Screen)
function NextPage({ navigation }) {
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.nextPageText}>Welcome back!</Text>
      <Image source={require('./assets/nature.jpg')} style={styles.natureImage} />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons name={showPassword ? 'eye' : 'eye-off'} size={24} color="#555" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => alert('Forgot Password clicked')}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => alert('Login clicked')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.googleDescription}>Or Continue with Google</Text>
      <TouchableOpacity style={styles.button} onPress={() => alert('Google clicked')}>
        <Text style={styles.buttonText}>Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signUpButton} onPress={() => navigation.navigate('SignUpPage')}>
        <Text style={styles.signUpText}>Sign Up</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

// Sign Up Page Component
function SignUpPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.nextPageText}>Sign Up Page!</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter First Name"
          value={firstName}
          onChangeText={setFirstName}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Last Name"
          value={lastName}
          onChangeText={setLastName}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Phone Number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Write Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => alert('Sign Up clicked')}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

// Main App Component with Navigation
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="NextPage" component={NextPage} />
        <Stack.Screen name="SignUpPage" component={SignUpPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
  },
  logo: {
    width: 200,
    height: 70,
    marginBottom: -10,
  },
  appText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#4A235A',
    marginBottom: 20,
  },
  manImage: {
    width: 300,
    height: 300,
  },
  description: {
    fontSize: 18,
    color: '#333',
    marginVertical: 20,
    textAlign: 'center',
  },
  nextPageText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 10,
    marginBottom: 20,
    marginTop: -4,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    marginTop: 14,
    width: '80%',
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
  },
  forgotPassword: {
    color: '#007BFF',
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#006400',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 120,
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  googleDescription: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  signUpButton: {
    backgroundColor: '#006400',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 120,
  },
  signUpText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  natureImage: {
    width: '100%', // Adjust to fit your layout
    height: 200, // Adjust height as needed
    marginTop: -11, // Space above the image
  },
});
