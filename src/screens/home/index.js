import React, { Component } from "react";
import { ImageBackground, View, StatusBar } from "react-native";
import { Container, Button, H3, Text } from "native-base";

import styles from "./styles";

const launchscreenBg = require("../../../assets/launchscreen-bg.png");
const launchscreenLogo = require("../../../assets/logo-kitchen-sink.png");

class Home extends Component {
  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <ImageBackground source={launchscreenBg} style={styles.imageContainer}>
          <View style={styles.logoContainer}>
            <ImageBackground source={launchscreenLogo} style={styles.logo} />
          </View>
          <View style={{ marginBottom: 80 }}>
            <Button
              style={{ backgroundColor: "#6FAF98", alignSelf: "center" }}
              onPress={() => this.props.navigation.navigate("RegularPicker")}>
              <Text>Let’s Eat!</Text>
            </Button>
          </View>
        </ImageBackground>
      </Container>
    );
  }
}

export default Home;
