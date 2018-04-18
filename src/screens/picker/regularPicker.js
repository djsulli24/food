import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Right,
  Body,
  Left,
  Picker,
  Form
} from "native-base";
import styles from "./styles";
import Rounded from "../button/rounded";

const Item = Picker.Item;

class RegularPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cuisine: "key0",
      distance: "key0"
    };
  }

  postSelections = () => {
    console.log(this.state.cuisine);
    console.log(this.state.distance);
    module.exports = {
      cuisine: this.state.cuisine,
      distance: this.state.distance
    };
  };

  handleSubmit = event => {
    event.preventDefault();
    this.postSelections();
    this.props.navigation.navigate("SimpleDeck");
  };

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body style={{ flex: 3 }}>
            <Title>Options</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <Form>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              style={{ width: undefined }}
              selectedValue={this.state.cuisine}
              onValueChange={value => this.setState({ cuisine: value })}
            >
              <Item label="Cuisine" value="key0" />
              <Item label="American" value="american" />
              <Item label="Chinese" value="chinese" />
              <Item label="Greek" value="greek" />
              <Item label="Indian" value="indian" />
              <Item label="Japanese" value="japanese" />
              <Item label="Korean" value="korean" />
              <Item label="Mexican" value="mexican" />
            </Picker>
          </Form>
          <Form>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              style={{ width: undefined }}
              selectedValue={this.state.distance}
              onValueChange={value => this.setState({ distance: value })}
            >
              <Item label="Distance (miles)" value="key0" />
              <Item label="5" value={5} />
              <Item label="10" value={10} />
              <Item label="15" value={15} />
              <Item label="20" value={20} />
            </Picker>
          </Form>
          <Rounded
            style={{ backgroundColor: "#FFF", alignSelf: "left" }}
            onPress={this.handleSubmit}
          />
        </Content>
      </Container>
    );
  }
}

export default RegularPicker;
