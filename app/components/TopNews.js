import * as React from "react";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Button,
  Image
} from "react-native";
import Swiper from "react-native-swiper";
import axios from "axios";
import {
  Icon,
  List,
  ListItem,
  ApplicationProvider,
  Card,
  CardHeader
} from "@ui-kitten/components";

const data1 = [
  {
    author: "BBC News",
    description:
      "Moderate Democrats rally around Joe idn in the contest to find who will take on Preidnt Trump.",
    publishedAt: "2020-03-03T05:05:59Z",
    source: {
      id: "bbc-news",
      name: "BBC News"
    },
    title: "Key endorsements boost idn for Super Tuesday",
    url: "http://www.bbc.co.uk/news/world-us-canada-51716348"
  },
  {
    author: "John T Bennett",
    description:
      "GOP preidnt admits to 'trolling' Democrats with raucous campaign rallies on eve of their primaries",
    publishedAt: "2020-03-03T01:12:21Z",
    source: {
      id: "independent",
      name: "Independent"
    },
    title:
      "'Impeach them': Trump accuses Buttigieg and Klobuchar of 'qidpro quo' with idn",
    url:
      "http://www.independent.co.uk/news/world/americas/us-election/donald-trump-twitter-impeach-qidpro-quo-joe-idn-democrats-buttigieg-klobuchar-a9371096.html"
  },
  {
    author: "Maegan Vazquez, CNN",
    description:
      "Preidnt Donald Trump was contradicted by a health expert on his coronavirus task force over the timing for a potential vaccine during a briefing Monday.",
    publishedAt: "2020-03-02T23:55:48Z",
    source: {
      id: "cnn",
      name: "CNN"
    },
    title:
      "Task force health expert contradicts Trump about coronavirus vaccine timing",
    url:
      "http://us.cnn.com/2020/03/02/politics/donald-trump-coronavirus-vaccine-push-back/index.html"
  },
  {
    author: "BY AAMER MADHANI",
    content: null,
    description:
      "CHARLOTTE, N.C. (AP) — Preidnt Donald Trump gloated about the stock market roaring back Monday, while throwing sharp barbs at the thinning Democratic preidntial field on the eve of Super...",
    publishedAt: "2020-03-02T22:35:55Z",
    source: {
      id: "associated-press",
      name: "Associated Press"
    },
    title: "Trump lobs fresh barbs at Dems, rallies GOP faithful in NC",
    url: "https://apnews.com/982966ad2a9d32d444e51df091abf9bf"
  },
  {
    author: "BBC News",

    description:
      "Fourteen states will pick who they want to run against Trump. We may soon know the likely nominee.",
    publishedAt: "2020-03-02T18:55:22Z",
    source: {
      id: "bbc-news",
      name: "BBC News"
    },
    title: "Why this is the biggest day of the US election yet",
    url: "http://www.bbc.co.uk/news/world-us-canada-51581001",
    urloImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/04B1/production/_111110210_mediaitem111110209.jpg"
  }
];

const data2 = [
  {
    source: {
      id: "breitbart-news",
      name: "Breitbart News"
    },
    author: "Ian Hanchett",
    title: "Biden: Trump 'Has No Credibility' on Coronavirus",
    description:
      "During an interview aired on Monday's broadcast of MSNBC's \"The Last Word,\" 2020 Democratic presidential candidate former Vice President Joe Biden stated | Clips During an interview aired on Monday's broadcast of MSNBC's \"The Last Word,\" 2020 Democratic presi…",
    url:
      "http://www.breitbart.com/clips/2020/03/02/biden-trump-has-no-credibility-on-coronavirus/",
    urlToImage:
      "https://media.breitbart.com/media/2020/02/49405308852_87cd83b2d7_o-640x335.jpg",
    publishedAt: "2020-03-03T04:29:18Z",
    content:
      "During an interview aired on Monday’s broadcast of MSNBC’s “The Last Word,” 2020 Democratic presidential candidate former Vice President Joe Biden stated that President Trump “has no credibility” on coronavirus.\r\nBiden stated, “[T]he whole question on crises … [+371 chars]"
  },
  {
    source: {
      id: "fox-news",
      name: "Fox News"
    },
    author: "Fox News",
    title:
      "Donald Trump Jr. slams critics of the Trump administration's response to coronavirus",
    description:
      "We shouldn't be embarrassed that President Trump put Americans first, says Donald Trump Jr., author of 'Triggered.'",
    url: "https://video.foxnews.com/v/6137810746001/",
    urlToImage:
      "https://cf-images.us-east-1.prod.boltdns.net/v1/static/694940094001/32e9449f-10b4-403a-a6a3-64065b110c94/ae1f9526-1a5d-4b00-a8a0-448d4429acba/1280x720/match/image.jpg",
    publishedAt: "2020-03-03T03:22:58.9510517Z",
    content: null
  },
  {
    source: {
      id: "breitbart-news",
      name: "Breitbart News"
    },
    author: "AWR Hawkins",
    title: "Trump Trolls Biden for Suggesting Half Our Country Killed by Guns",
    description:
      "President Trump trolled Democrat presidential hopeful Joe Biden for suggesting half our country was killed in gun violence.",
    url:
      "http://www.breitbart.com/politics/2020/03/02/trump-trolls-biden-for-suggesting-half-our-country-killed-in-gun-violence/",
    urlToImage:
      "https://media.breitbart.com/media/2020/03/Joe-Biden-on-Gun-Deaths-640x335.jpg",
    publishedAt: "2020-03-03T01:16:28Z",
    content:
      "During his March 2, 2020, North Carolina rally President Trump trolled Democrat presidential hopeful Joe Biden for suggesting half our country was killed in gun violence.\r\nTrump said, “Did you see…[where Joe Biden said] 150 million people were killed by guns … [+1140 chars]"
  },
  {
    source: {
      id: "fox-news",
      name: "Fox News"
    },
    author: "Fox News",
    title:
      "Vice President Pence provides update on Trump administration's response to coronavirus",
    description:
      "The risk to the American public from the coronavirus remains low, says Vice President Mike Pence.",
    url: "https://video.foxnews.com/v/6137770838001/",
    urlToImage:
      "https://cf-images.us-east-1.prod.boltdns.net/v1/static/694940094001/dcec61bf-ceb4-41f9-a53d-279ad9e45fec/852cd73c-d2b0-445b-a047-2a4250a9bac7/1280x720/match/image.jpg",
    publishedAt: "2020-03-03T00:22:50.4269887Z",
    content: null
  },
  {
    source: {
      id: "fox-news",
      name: "Fox News"
    },
    author: "Fox News",
    title: "Gutfeld on the media 'hoax' hoax",
    description:
      "The media and Democrats push false Trump coronavirus narrative.",
    url: "https://video.foxnews.com/v/6137766815001/",
    urlToImage:
      "https://cf-images.us-east-1.prod.boltdns.net/v1/static/694940094001/1b8e8d9d-5301-44b6-9bc2-4d6ab5c68645/7f97a936-bb84-4487-9751-7a20a07348f7/1280x720/match/image.jpg",
    publishedAt: "2020-03-02T23:07:56.1220651Z",
    content: null
  }
];

const style = {
  color: "grey"
};
export default function News({ navigation }) {
  //   const cardGenerator = info => {
  //     const Header = () => (
  //       <CardHeader title={info.title} description={info.source.name} />
  //     );
  //     const CardWithHeader = () => (
  //       <Card header={Header}>
  //         <Text>{info.description}</Text>
  //       </Card>
  //     );
  //     return CardWithHeader;
  //   };
  const handleNews = slide => {
    if (slide === 1) {
      navigation.navigate("Stories", {
        news: libData
      });
    }
    if (slide === 2) {
      navigation.navigate("Stories", {
        news: modData
      });
    }
    if (slide === 3) {
      navigation.navigate("Stories", {
        news: conData
      });
    }
  };

  return (
    <Swiper
      showsButtons={true}
      style={styles.wrapper}
      bounces={true}
      loop={false}
      showsPagination={false}
    >
      <View style={styles.slide1}>
        <Text
          onPress={() => {
            handleNews(1);
          }}
          style={styles.text}
        >
          Liberal News
        </Text>
      </View>
      {/* <View>
        {data1.forEach(article => {
          cardGenerator(article);
        })}
      </View> */}
      {/* </View> */}
      <View style={styles.slide2}>
        <Text
          onPress={() => {
            handleNews(2);
          }}
          style={styles.text}
        >
          Moderate News
        </Text>
      </View>
      <View style={styles.slide3}>
        <Text
          onPress={() => {
            handleNews(3);
          }}
          style={styles.text}
        >
          Conservative News
        </Text>
      </View>
    </Swiper>
  );
}
const styles = StyleSheet.create({
  wrapper: {},
  footerContainer: {
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  footerControl: {
    marginHorizontal: 4
  },
  button: {
    fontSize: 30
  },
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#77B5F7"
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E3E3E3"
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E36F6F"
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold"
  }
});

AppRegistry.registerComponent("app", () => App);
