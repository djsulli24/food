import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  ListItem,
  CheckBox,
  Text,
  Left,
  Right,
  Body
} from "native-base";
import styles from "./styles";
import Rounded from "../button/rounded";

class NHCheckbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkbox1: false,
      checkbox2: false,
      checkbox3: false,
      checkbox4: false,
      checkbox6: false,
      checkbox7: false,
      checkbox8: false
    };
  }
  toggleSwitch1() {
    this.setState({
      checkbox1: !this.state.checkbox1
    });
  }
  toggleSwitch2() {
    this.setState({
      checkbox2: !this.state.checkbox2
    });
  }
  toggleSwitch3() {
    this.setState({
      checkbox3: !this.state.checkbox3
    });
  }
  toggleSwitch4() {
    this.setState({
      checkbox4: !this.state.checkbox4
    });
  }
  toggleSwitch5() {
    this.setState({
      checkbox5: !this.state.checkbox5
    });
  }
  toggleSwitch6() {
    this.setState({
      checkbox6: !this.state.checkbox6
    });
  }
  toggleSwitch7() {
    this.setState({
      checkbox7: !this.state.checkbox7
    });
  }
  toggleSwitch8() {
    this.setState({
      checkbox8: !this.state.checkbox8
    });
  }
  render() {
    return <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Types of Food</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <ListItem button onPress={() => this.toggleSwitch1()}>
            <CheckBox checked={this.state.checkbox1} onPress={() => this.toggleSwitch1()} />
            <Body>
              <Text>American</Text>
            </Body>
          </ListItem>
          <ListItem button onPress={() => this.toggleSwitch2()}>
            <CheckBox color="indigo" checked={this.state.checkbox2} onPress={() => this.toggleSwitch2()} />
            <Body>
              <Text>Chinese</Text>
            </Body>
          </ListItem>
          <ListItem button onPress={() => this.toggleSwitch3()}>
            <CheckBox color="green" checked={this.state.checkbox3} onPress={() => this.toggleSwitch3()} />
            <Body>
              <Text>Greek</Text>
            </Body>
          </ListItem>
          <ListItem button onPress={() => this.toggleSwitch4()}>
            <CheckBox color="blue" checked={this.state.checkbox4} onPress={() => this.toggleSwitch4()} />
            <Body>
              <Text>Indian</Text>
            </Body>
          </ListItem>
          <ListItem button onPress={() => this.toggleSwitch5()}>
            <CheckBox color="orange" checked={this.state.checkbox5} onPress={() => this.toggleSwitch5()} />
            <Body>
              <Text>Italian</Text>
            </Body>
          </ListItem>
          <ListItem button onPress={() => this.toggleSwitch6()}>
            <CheckBox color="brown" checked={this.state.checkbox6} onPress={() => this.toggleSwitch6()} />
            <Body>
              <Text>Japanese</Text>
            </Body>
          </ListItem>
          <ListItem button onPress={() => this.toggleSwitch7()}>
            <CheckBox color="violet" checked={this.state.checkbox7} onPress={() => this.toggleSwitch7()} />
            <Body>
              <Text>Korean</Text>
            </Body>
          </ListItem>
          <ListItem button onPress={() => this.toggleSwitch8()}>
            <CheckBox color="red" checked={this.state.checkbox8} onPress={() => this.toggleSwitch8()} />
            <Body>
              <Text>Mexican</Text>
            </Body>
          </ListItem>
        </Content>
        <Rounded style={{ backgroundColor: "#FFF", alignSelf: "left" }} onPress={() => this.props.navigation.navigate("SimpleDeck")} />
      </Container>;
  }
}

export default NHCheckbox;
