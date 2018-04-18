import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  List,
  ListItem,
  Text,
  Thumbnail,
  Left,
  Body,
  Right
} from "native-base";
import styles from "./styles";

const jon = require("../../../assets/contacts/jon.png");
const daniel = require("../../../assets/contacts/daniel.png");
const ryan = require("../../../assets/contacts/ryan.png");
const cecil = require("../../../assets/contacts/cecil.jpg");
const datas = [
  {
    img: jon,
    text: "Jonathan",
    note: "Hopdoddy Burger Bar, Odd Duck"
  },
  {
    img: daniel,
    text: "Daniel",
    note: "Odd Duck"
  },
  {
    img: cecil,
    text: "Cecil",
    note: "Sugar Mama's Bakeshop, Gourdough's Public House"
  },
  {
    img: ryan,
    text: "Ryan",
    note: "Odd Duck, Magnolia Cafe South, Salty Sow"
  }
];

class NHListThumbnail extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Selections</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem thumbnail>
                <Left>
                  <Thumbnail square size={55} source={data.img} />
                </Left>
                <Body>
                  <Text>
                    {data.text}
                  </Text>
                  <Text numberOfLines={1} note>
                    {data.note}
                  </Text>
                </Body>
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

export default NHListThumbnail;
