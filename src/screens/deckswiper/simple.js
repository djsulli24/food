import React, { Component } from "react";
import { Image, View } from "react-native";
import {
  Container,
  Header,
  Title,
  Button,
  IconNB,
  DeckSwiper,
  Card,
  CardItem,
  Icon,
  Thumbnail,
  Text,
  Left,
  Right,
  Body
} from "native-base";
import styles from "./styles";
import Rounded from "../button/rounded";
import results from "./results.json";

const cardOne = require("../../../assets/swiper-1.png");
const cardTwo = require("../../../assets/swiper-2.png");
const cardThree = require("../../../assets/swiper-3.png");
const cardFour = require("../../../assets/swiper-4.png");

// const cards = [
//   {
//     text: "Card One",
//     name: "One",
//     image: cardOne
//   },
//   {
//     text: "Card Two",
//     name: "Two",
//     image: cardTwo
//   },
//   {
//     text: "Card Three",
//     name: "Three",
//     image: cardThree
//   },
//   {
//     text: "Card Four",
//     name: "Four",
//     image: cardFour
//   }
// ];
const cards = [
  {
"id": "bZiIIUcpgxh8mpKMDhdqbA",
      "alias": "hopdoddy-burger-bar-austin",
      "name": "Hopdoddy Burger Bar",
      "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/0NglM-8GhK_Ipawf4ELoPw/o.jpg",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/hopdoddy-burger-bar-austin?adjust_creative=kIz7xqNLbzeuxqBRSUQCaA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=kIz7xqNLbzeuxqBRSUQCaA",
      "review_count": 4130,
      "categories": [
        {
          "alias": "burgers",
          "title": "Burgers"
        },
        {
          "alias": "tradamerican",
          "title": "American (Traditional)"
        }
      ],
      "rating": 4,
      "coordinates": {
        "latitude": 30.2496963637703,
        "longitude": -97.7500538680416
      },
      "transactions": [],
      "price": "$$",
      "location": {
        "address1": "1400 S Congress Ave",
        "address2": "Ste A190",
        "address3": "",
        "city": "Austin",
        "zip_code": "78704",
        "country": "US",
        "state": "TX",
        "display_address": [
          "1400 S Congress Ave",
          "Ste A190",
          "Austin, TX 78704"
        ]
      },
      "phone": "+15122437505"
    }
  ];

class SimpleDeck extends Component {
  state = {
    //swiping right will add to restaurants array and send to database
    results: results[0],
    swipedRight: false
  };

  
  componentDidMount() {
    this.getResults();
    console.log(results);
  }

  getResults = () => {
    console.log('get results')
    // API.getResults()
    //   .then(res =>
    //   //generate cards
    //   )
  }

  render() {
    const uri = results[0].businesses[0].image_url;
    return <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Simple Deck Swiper</Title>
          </Body>
          <Right />
        </Header>

        <View style={{ flex: 1, padding: 12 }}>
          <DeckSwiper dataSource={results} looping={false} renderEmpty={() => <View>
                <Text>No more cards. Press next!</Text>
              </View>} renderItem={item => <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={uri} />
                    <Body>
                      <Text>
                        {item.businesses[0].name}
                      </Text>
                      <Text note>{item.businesses[0].price}</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ resizeMode: "cover", width: null, flex: 1, height: 300 }} source={item.businesses[0].image_url} />
                </CardItem>
                <CardItem>
                  <IconNB name={"ios-heart"} style={{ color: "#ED4A6A" }} />
                  <Text>
                    {item.businesses[0].name}
                  </Text>
                </CardItem>
              </Card>} />
        </View>
        <Rounded style={{ backgroundColor: "#FFF", alignSelf: "left" }} onPress={() => this.props.navigation.navigate("NHListThumbnail")} />
      </Container>;
  }
}

export default SimpleDeck;
