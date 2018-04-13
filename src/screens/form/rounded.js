import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Body,
  Left,
  Right,
  Item,
  Input,
  Form
} from "native-base";
import styles from "./styles";

class RoundedTextBox extends Component {
  //from http://facebook.github.io/react-native/docs/textinput.html
  constructor(props) {
    super(props);
    this.state = { text: "Enter zipcode" };
  }

  //from Wes videos
  // zipRef = React.createRef();

  // createZip = event => {
  //   event.preventDefault();
  //   const zip = {
  //     zip: this.zipRef.value.value
  //   };
  //   this.props.addZip(zip);
  // };

  render() {
    return (
      <Container style={styles.container}>
        <Content padder>
          <Form>
            <Item rounded>
              <Input
                keyboardType="numeric"
                maxLength={5}
                placeholder="Enter zipcode"
                onChangeText={zip => this.setState({ zip })}
                value={this.state.zip}
              />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default RoundedTextBox;
