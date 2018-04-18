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

// const cardOne = require("../../../assets/swiper-1.png");
// const cardTwo = require("../../../assets/swiper-2.png");
// const cardThree = require("../../../assets/swiper-3.png");
// const cardFour = require("../../../assets/swiper-4.png");

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
    id: "bZiIIUcpgxh8mpKMDhdqbA",
    alias: "hopdoddy-burger-bar-austin",
    name: "Hopdoddy Burger Bar",
    image_url:
      "https://s3-media3.fl.yelpcdn.com/bphoto/0NglM-8GhK_Ipawf4ELoPw/o.jpg",
    is_closed: false,
    url:
      "https://www.yelp.com/biz/hopdoddy-burger-bar-austin?adjust_creative=kIz7xqNLbzeuxqBRSUQCaA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=kIz7xqNLbzeuxqBRSUQCaA",
    review_count: 4130,
    categories: [
      {
        alias: "burgers",
        title: "Burgers"
      },
      {
        alias: "tradamerican",
        title: "American (Traditional)"
      }
    ],
    rating: 4,
    coordinates: {
      latitude: 30.2496963637703,
      longitude: -97.7500538680416
    },
    transactions: [],
    price: "$$",
    location: {
      address1: "1400 S Congress Ave",
      address2: "Ste A190",
      address3: "",
      city: "Austin",
      zip_code: "78704",
      country: "US",
      state: "TX",
      display_address: ["1400 S Congress Ave", "Ste A190", "Austin, TX 78704"]
    },
    phone: "+15122437505",
    display_phone: "(512) 243-7505",
    distance: 4266.527590892042
  },
  {
    id: "uPWJtYJi76EniU0xrX-zbA",
    alias: "odd-duck-austin-2",
    name: "Odd Duck",
    image_url:
      "https://s3-media4.fl.yelpcdn.com/bphoto/s2j1twRuJXEpROiUzzhWeQ/o.jpg",
    is_closed: false,
    url:
      "https://www.yelp.com/biz/odd-duck-austin-2?adjust_creative=kIz7xqNLbzeuxqBRSUQCaA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=kIz7xqNLbzeuxqBRSUQCaA",
    review_count: 1262,
    categories: [
      {
        alias: "tradamerican",
        title: "American (Traditional)"
      },
      {
        alias: "bars",
        title: "Bars"
      }
    ],
    rating: 4.5,
    coordinates: {
      latitude: 30.25452,
      longitude: -97.762064
    },
    transactions: ["restaurant_reservation"],
    price: "$$$",
    location: {
      address1: "1201 S Lamar Blvd",
      address2: "",
      address3: "",
      city: "Austin",
      zip_code: "78704",
      country: "US",
      state: "TX",
      display_address: ["1201 S Lamar Blvd", "Austin, TX 78704"]
    },
    phone: "+15124336521",
    display_phone: "(512) 433-6521",
    distance: 4466.386398790571
  },
  {
    id: "xoBBLN7uDy_oI4PiKD4VWA",
    alias: "sugar-mamas-bakeshop-austin-3",
    name: "Sugar Mama's Bakeshop",
    image_url:
      "https://s3-media1.fl.yelpcdn.com/bphoto/16R3E16b_T7jwx4Wyu3ExA/o.jpg",
    is_closed: false,
    url:
      "https://www.yelp.com/biz/sugar-mamas-bakeshop-austin-3?adjust_creative=kIz7xqNLbzeuxqBRSUQCaA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=kIz7xqNLbzeuxqBRSUQCaA",
    review_count: 862,
    categories: [
      {
        alias: "desserts",
        title: "Desserts"
      },
      {
        alias: "bakeries",
        title: "Bakeries"
      },
      {
        alias: "tradamerican",
        title: "American (Traditional)"
      }
    ],
    rating: 4,
    coordinates: {
      latitude: 30.24613,
      longitude: -97.7564
    },
    transactions: [],
    price: "$",
    location: {
      address1: "1905 S 1st St",
      address2: "",
      address3: "",
      city: "Austin",
      zip_code: "78704",
      country: "US",
      state: "TX",
      display_address: ["1905 S 1st St", "Austin, TX 78704"]
    },
    phone: "+15124483727",
    display_phone: "(512) 448-3727",
    distance: 3674.9592205825456
  },
  {
    id: "oug5bLTWP_YTtj1C3_X6Xw",
    alias: "gourdoughs-public-house-austin",
    name: "Gourdough's Public House",
    image_url:
      "https://s3-media1.fl.yelpcdn.com/bphoto/eeWGrO6XGbSTHH8n8TF65A/o.jpg",
    is_closed: false,
    url:
      "https://www.yelp.com/biz/gourdoughs-public-house-austin?adjust_creative=kIz7xqNLbzeuxqBRSUQCaA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=kIz7xqNLbzeuxqBRSUQCaA",
    review_count: 1045,
    categories: [
      {
        alias: "pubs",
        title: "Pubs"
      },
      {
        alias: "tradamerican",
        title: "American (Traditional)"
      }
    ],
    rating: 4,
    coordinates: {
      latitude: 30.245382,
      longitude: -97.780437
    },
    transactions: [],
    price: "$$",
    location: {
      address1: "2700 S Lamar Blvd",
      address2: "",
      address3: "",
      city: "Austin",
      zip_code: "78704",
      country: "US",
      state: "TX",
      display_address: ["2700 S Lamar Blvd", "Austin, TX 78704"]
    },
    phone: "+15129129070",
    display_phone: "(512) 912-9070",
    distance: 3603.5978133710887
  },
  {
    id: "H2QGxJvWlf2f3HclvgT30A",
    alias: "magnolia-cafe-south-austin-2",
    name: "Magnolia Cafe South",
    image_url:
      "https://s3-media4.fl.yelpcdn.com/bphoto/j_WDsM-12mL_0w5pakDJJA/o.jpg",
    is_closed: false,
    url:
      "https://www.yelp.com/biz/magnolia-cafe-south-austin-2?adjust_creative=kIz7xqNLbzeuxqBRSUQCaA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=kIz7xqNLbzeuxqBRSUQCaA",
    review_count: 1319,
    categories: [
      {
        alias: "breakfast_brunch",
        title: "Breakfast & Brunch"
      },
      {
        alias: "tradamerican",
        title: "American (Traditional)"
      },
      {
        alias: "tex-mex",
        title: "Tex-Mex"
      }
    ],
    rating: 3.5,
    coordinates: {
      latitude: 30.24448,
      longitude: -97.75194
    },
    transactions: [],
    price: "$",
    location: {
      address1: "1920 S Congress Ave",
      address2: null,
      address3: "",
      city: "Austin",
      zip_code: "78704",
      country: "US",
      state: "TX",
      display_address: ["1920 S Congress Ave", "Austin, TX 78704"]
    },
    phone: "+15124450000",
    display_phone: "(512) 445-0000",
    distance: 3662.9580681632838
  },
  {
    id: "AcFt364BrHyMu3VrSCKMOw",
    alias: "salty-sow-austin",
    name: "Salty Sow",
    image_url:
      "https://s3-media1.fl.yelpcdn.com/bphoto/0dHPMIbmgYdeBrjlZlA0mA/o.jpg",
    is_closed: false,
    url:
      "https://www.yelp.com/biz/salty-sow-austin?adjust_creative=kIz7xqNLbzeuxqBRSUQCaA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=kIz7xqNLbzeuxqBRSUQCaA",
    review_count: 2076,
    categories: [
      {
        alias: "tradamerican",
        title: "American (Traditional)"
      },
      {
        alias: "gastropubs",
        title: "Gastropubs"
      }
    ],
    rating: 4.5,
    coordinates: {
      latitude: 30.2836497259461,
      longitude: -97.7213180065155
    },
    transactions: [],
    price: "$$",
    location: {
      address1: "1917 Manor Rd",
      address2: "",
      address3: "",
      city: "Austin",
      zip_code: "78722",
      country: "US",
      state: "TX",
      display_address: ["1917 Manor Rd", "Austin, TX 78722"]
    },
    phone: "+15123912337",
    display_phone: "(512) 391-2337",
    distance: 8895.077980896429
  },
  {
    id: "_khuR9_7Ok2N162BrfDSdA",
    alias: "tuccis-southside-subs-austin",
    name: "Tucci's Southside Subs",
    image_url:
      "https://s3-media3.fl.yelpcdn.com/bphoto/L6T88ODe5-vDmn6Ly5WpcA/o.jpg",
    is_closed: false,
    url:
      "https://www.yelp.com/biz/tuccis-southside-subs-austin?adjust_creative=kIz7xqNLbzeuxqBRSUQCaA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=kIz7xqNLbzeuxqBRSUQCaA",
    review_count: 222,
    categories: [
      {
        alias: "tradamerican",
        title: "American (Traditional)"
      },
      {
        alias: "delis",
        title: "Delis"
      },
      {
        alias: "italian",
        title: "Italian"
      }
    ],
    rating: 4.5,
    coordinates: {
      latitude: 30.190032843439,
      longitude: -97.7720365507873
    },
    transactions: [],
    price: "$",
    location: {
      address1: "801 E William Cannon Dr",
      address2: "Ste 240",
      address3: "",
      city: "Austin",
      zip_code: "78745",
      country: "US",
      state: "TX",
      display_address: [
        "801 E William Cannon Dr",
        "Ste 240",
        "Austin, TX 78745"
      ]
    },
    phone: "+15124401850",
    display_phone: "(512) 440-1850",
    distance: 2768.0032821618156
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
          <DeckSwiper dataSource={cards} looping={false} renderEmpty={() => <View>
                <Text>No more cards. Press next!</Text>
              </View>} renderItem={item => <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={item.image_url} />
                    <Body>
                      <Text>
                        {item.name}
                      </Text>
                      <Text note>{item.price}</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ resizeMode: "cover", width: null, flex: 1, height: 300 }} source={item.image_url} />
                </CardItem>
                <CardItem>
                  <IconNB name={"ios-heart"} style={{ color: "#ED4A6A" }} />
                  <Text>
                    {item.rating}
                  </Text>
                </CardItem>
              </Card>} />
        </View>
        <Rounded style={{ backgroundColor: "#FFF", alignSelf: "left" }} onPress={() => this.props.navigation.navigate("NHListThumbnail")} />
      </Container>;
  }
}

export default SimpleDeck;
