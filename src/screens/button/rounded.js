import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Text
} from "native-base";
import styles from "./styles";

class Rounded extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Content padder style={{ backgroundColor: "#FFF", padding: 20 }}>
          <Button
          rounded info style={styles.mb15}
          onPress={() => this.props.navigation.navigate("NHCheckbox")}
          >
            <Text>Next!</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Rounded;