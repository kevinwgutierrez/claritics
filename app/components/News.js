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

const modData = [
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

const conData = [
  {
    source: {
      id: "fox-news",
      name: "Fox News"
    },
    author: "Fox News",
    title: "The secret to Trump winning the Hispanic vote in 2020",
    description:
      "Steve Cortes, spokesman America First Action, discusses how Donald Trump can win the Hispanic vote and if the Latino community is misinterpreting Trump's rhetoric on immigration",
    url: "https://video.foxnews.com/v/6137916506001/",
    urlToImage:
      "https://cf-images.us-east-1.prod.boltdns.net/v1/static/694940094001/153856fc-0ef8-47ce-94f5-fb4f3ac6eea4/d9d9d68a-d4be-42b5-8ce4-214cd1e7973b/1280x720/match/image.jpg",
    publishedAt: "2020-03-03T15:08:28.4379466Z",
    content: null
  },
  {
    source: {
      id: "fox-news",
      name: "Fox News"
    },
    author: "Fox News",
    title: "Is the 'establishment' conspiring against Bernie Sanders?",
    description:
      "Charlie Kirk, Turning Point USA, discusses how Democrats are rallying around Joe Biden to take on President Trump",
    url: "https://video.foxnews.com/v/6137926111001/",
    urlToImage:
      "https://cf-images.us-east-1.prod.boltdns.net/v1/static/694940094001/f6d94a8c-7b7b-41c3-a630-185368c3e43d/a66fa0d3-7e64-4933-8f29-c8112d1255a0/1280x720/match/image.jpg",
    publishedAt: "2020-03-03T14:38:04.1729072Z",
    content: null
  },
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
      id: "the-washington-times",
      name: "The Washington Times"
    },
    author: "Dave Boyer",
    title: "Elaine McCusker nomination withdrawn, Donald Trump says",
    description:
      "President Trump announced on Monday night that he is withdrawing the nomination of Elaine McCusker, who had questioned his temporary freeze of military aid to Ukraine, for the post of comptroller of the Defense Department.",
    url:
      "https://www.washingtontimes.com/news/2020/mar/2/elaine-mccusker-nomination-withdrawn-donald-trump-/",
    urlToImage:
      "https://twt-thumbs.washtimes.com/media/image/2020/03/02/election_2020_trump_20224_c0-54-6000-3554_s1200x700.jpg?95bc81ef97e42f0e10d740b6b72cd3a1c423447b",
    publishedAt: "2020-03-02T20:51:07Z",
    content:
      "President Trump announced on Monday night that he is withdrawing the nomination of Elaine McCusker, who had questioned his temporary freeze of military aid to Ukraine, for the post of comptroller of the Defense Department.\r\nThe White House’s statement offered… [+1843 chars]"
  },
  {
    source: {
      id: "the-washington-times",
      name: "The Washington Times"
    },
    author: "Charles Hurt",
    title: "Trump actually fulfilling promise to reduce troops in Afghanistan",
    description:
      "Presidential candidates won the past three elections by promising to end the longest war in American history. Only President Trump has taken concrete efforts to make to make good on that promise.",
    url:
      "https://www.washingtontimes.com/news/2020/mar/2/trump-actually-fulfilling-promise-to-reduce-troops/",
    urlToImage:
      "https://twt-thumbs.washtimes.com/media/image/2020/03/02/3_2_2020_afghanistan-veterans-peace-8202_c0-56-2000-1222_s1200x700.jpg?4782ca959bd7b22bfda6f0041985215a642d0efa",
    publishedAt: "2020-03-02T20:21:06Z",
    content:
      "ANALYSIS/OPINION:\r\nPresidential candidates won the past three elections by promising to end the longest war in American history. Only President Trump has taken concrete efforts to make to make good on that promise.\r\nBy Election Day, Mr. Trump wants to reduce … [+3096 chars]"
  },
  {
    source: {
      id: "the-washington-times",
      name: "The Washington Times"
    },
    author: "Jessica Chasmar",
    title:
      "Donald Trump praises Sammy's Mexican Grill after owners slammed for supporting him",
    description:
      "President Trump on Sunday gave a shoutout to a Mexican food grill in Arizona after the owners were hit with a wave of backlash for appearing at a rally for the president in Phoenix.",
    url:
      "https://www.washingtontimes.com/news/2020/mar/2/donald-trump-praises-sammys-mexican-grill-after-ow/",
    urlToImage:
      "https://twt-thumbs.washtimes.com/media/image/2020/02/28/Election_2020_Trump_68201.jpg-793ad_c0-85-2041-1275_s1200x700.jpg?c6e639252f6dc21012ca7a0c25ec80cbba396058",
    publishedAt: "2020-03-02T10:33:05Z",
    content:
      "President Trump on Sunday gave a shoutout to a Mexican food grill in Arizona after the owners were hit with a wave of backlash for appearing at a rally for the president in Phoenix.\r\n“The food is GREAT at Sammy’s Mexican Grill in Phoenix, Arizona,” the presid… [+1561 chars]"
  }
];

const libData = [
  {
    source: {
      id: "the-washington-post",
      name: "The Washington Post"
    },
    author: null,
    title:
      "Live updates: Trump calls for Fed rate cut as U.S. coronavirus deaths rise; finance chiefs stop short of announcing specific actions",
    description:
      "Americans braced for an increasing toll at home, as officials around the world stepped up responses to cushion economic damage.",
    url:
      "https://www.washingtonpost.com/world/2020/03/03/coronavirus-live-updates/#link-MONKNQE3KBGYVILSTOBWCHJDHY",
    urlToImage:
      "https://www.washingtonpost.com/resizer/TWgahU2deCsDhKeRiMaaUsqOMss=/1440x0/smart/d1i4t8bqe7zgj6.cloudfront.net/02-27-2020/t_af5d68bb1c904a1e88f7b1212400dacb_name_2e535688_59af_11ea_8efd_0f904bdd8057.jpg",
    publishedAt: "2020-03-03T15:09:22.6549471Z",
    content:
      "As the novel coronavirus raged in Hubei province earlier this year, the Chinese government imposed strict measures designed to limit the spread of the virus throughout the country.\r\nHowever, as the coronavirus spreads throughout the world, China is finding ne… [+2833 chars]"
  },
  {
    source: {
      id: "the-washington-post",
      name: "The Washington Post"
    },
    author: null,
    title:
      "Live updates: Trump calls for Fed rate cut as U.S. coronavirus deaths rise; finance chiefs stop short of announcing specific actions",
    description:
      "Americans braced for an increasing toll at home, as officials around the world stepped up responses to cushion economic damage.",
    url:
      "https://www.washingtonpost.com/world/2020/03/03/coronavirus-live-updates/#link-ZINNNXFJ7RFJTK6SXO6HL3MNTY",
    urlToImage:
      "https://www.washingtonpost.com/resizer/TWgahU2deCsDhKeRiMaaUsqOMss=/1440x0/smart/d1i4t8bqe7zgj6.cloudfront.net/02-27-2020/t_af5d68bb1c904a1e88f7b1212400dacb_name_2e535688_59af_11ea_8efd_0f904bdd8057.jpg",
    publishedAt: "2020-03-03T14:53:57.7295216Z",
    content:
      "As the novel coronavirus raged in Hubei province earlier this year, the Chinese government imposed strict measures designed to limit the spread of the virus throughout the country.\r\nHowever, as the coronavirus spreads throughout the world, China is finding ne… [+2833 chars]"
  },
  {
    source: {
      id: "the-washington-post",
      name: "The Washington Post"
    },
    author: null,
    title:
      "Live updates: Trump calls for Fed rate cut as U.S. coronavirus deaths rise; finance chiefs stop short of announcing specific actions",
    description:
      "Americans braced for an increasing toll at home, as officials around the world stepped up responses to cushion economic damage.",
    url:
      "https://www.washingtonpost.com/world/2020/03/03/coronavirus-live-updates/#link-DYYALFALRNBBRJN7U5VDJBEXPI",
    urlToImage:
      "https://www.washingtonpost.com/resizer/TWgahU2deCsDhKeRiMaaUsqOMss=/1440x0/smart/d1i4t8bqe7zgj6.cloudfront.net/02-27-2020/t_af5d68bb1c904a1e88f7b1212400dacb_name_2e535688_59af_11ea_8efd_0f904bdd8057.jpg",
    publishedAt: "2020-03-03T14:38:55.2128582Z",
    content:
      "As the novel coronavirus raged in Hubei province earlier this year, the Chinese government imposed strict measures designed to limit the spread of the virus throughout the country.\r\nHowever, as the coronavirus spreads throughout the world, China is finding ne… [+2833 chars]"
  },
  {
    source: {
      id: "the-washington-post",
      name: "The Washington Post"
    },
    author: null,
    title:
      "Live updates: Trump calls for Fed rate cut as U.S. coronavirus deaths rise; finance chiefs stop short of announcing specific actions",
    description:
      "Americans braced for an increasing toll at home, as officials around the world stepped up responses to cushion economic damage.",
    url:
      "https://www.washingtonpost.com/world/2020/03/03/coronavirus-live-updates/#link-QSGNL2PXO5G3PPJPBY2FSZFXNA",
    urlToImage:
      "https://www.washingtonpost.com/resizer/TWgahU2deCsDhKeRiMaaUsqOMss=/1440x0/smart/d1i4t8bqe7zgj6.cloudfront.net/02-27-2020/t_af5d68bb1c904a1e88f7b1212400dacb_name_2e535688_59af_11ea_8efd_0f904bdd8057.jpg",
    publishedAt: "2020-03-03T14:08:50.623268Z",
    content:
      "As the novel coronavirus raged in Hubei province earlier this year, the Chinese government imposed strict measures designed to limit the spread of the virus throughout the country.\r\nHowever, as the coronavirus spreads throughout the world, China is finding ne… [+2833 chars]"
  },
  {
    source: {
      id: "the-washington-post",
      name: "The Washington Post"
    },
    author: null,
    title:
      "Live updates: Trump calls for Fed rate cut as U.S. coronavirus deaths rise; finance chiefs plot economic rescue",
    description:
      "Americans braced for an increasing toll at home, as officials around the world stepped up responses to cushion economic damage.",
    url:
      "https://www.washingtonpost.com/world/2020/03/03/coronavirus-live-updates/#link-7VV2XLBPV5EO3ML5XHZXXGIN4U",
    urlToImage:
      "https://www.washingtonpost.com/resizer/TWgahU2deCsDhKeRiMaaUsqOMss=/1440x0/smart/d1i4t8bqe7zgj6.cloudfront.net/02-27-2020/t_af5d68bb1c904a1e88f7b1212400dacb_name_2e535688_59af_11ea_8efd_0f904bdd8057.jpg",
    publishedAt: "2020-03-03T13:54:10.1401427Z",
    content:
      "As the novel coronavirus raged in Hubei province earlier this year, the Chinese government imposed strict measures designed to limit the spread of the virus throughout the country.\r\nHowever, as the coronavirus spreads throughout the world, China is finding ne… [+2833 chars]"
  },
  {
    source: {
      id: "the-washington-post",
      name: "The Washington Post"
    },
    author: null,
    title:
      "Live updates: Trump calls for Fed rate cut as U.S. coronavirus deaths rise; finance chiefs plot economic rescue",
    description:
      "Americans braced for an increasing toll at home, as officials around the world stepped up responses to cushion economic damage.",
    url:
      "https://www.washingtonpost.com/world/2020/03/03/coronavirus-live-updates/#link-WDKWSYMLEBFUTMBPOFOLIZ3FVE",
    urlToImage:
      "https://www.washingtonpost.com/resizer/TWgahU2deCsDhKeRiMaaUsqOMss=/1440x0/smart/d1i4t8bqe7zgj6.cloudfront.net/02-27-2020/t_af5d68bb1c904a1e88f7b1212400dacb_name_2e535688_59af_11ea_8efd_0f904bdd8057.jpg",
    publishedAt: "2020-03-03T13:39:04.0394865Z",
    content:
      "As the novel coronavirus raged in Hubei province earlier this year, the Chinese government imposed strict measures designed to limit the spread of the virus throughout the country.\r\nHowever, as the coronavirus spreads throughout the world, China is finding ne… [+2833 chars]"
  },
  {
    source: {
      id: "the-huffington-post",
      name: "The Huffington Post"
    },
    author: "AP",
    title:
      "White House Withdraws Nomination Of Pentagon Official Who Questioned Ukraine Aid",
    description:
      "Elaine McCusker raised concerns about Trump withholding aid from Ukraine, which was at the center of his impeachment trial.",
    url:
      "https://www.huffpost.com/entry/trump-ukraine-aid-impeachment-defense-pentagon-official_n_5e5e5984c5b67ed38b38a217",
    urlToImage:
      "https://img.huffingtonpost.com/asset/5e5e5ba4230000411239ca40.jpeg?ops=1778_1000",
    publishedAt: "2020-03-03T13:29:54Z",
    content:
      "WASHINGTON (AP) The White House has withdrawn President Donald Trumps nomination for the post of Defense Department comptroller, an official who had questioned the suspension of military assistance to Ukraine, which was at the center of Trumps impeachment tri… [+1459 chars]"
  },
  {
    source: {
      id: "the-washington-post",
      name: "The Washington Post"
    },
    author: null,
    title:
      "Live updates: Trump calls for Fed rate cut as U.S. coronavirus deaths rise; finance chiefs plot economic rescue",
    description:
      "Americans braced for an increasing toll at home, as officials around the world stepped up responses to cushion economic damage.",
    url:
      "https://www.washingtonpost.com/world/2020/03/03/coronavirus-live-updates/#link-53K74GP72JDOVOWAEYFGQZWUVA",
    urlToImage:
      "https://www.washingtonpost.com/resizer/TWgahU2deCsDhKeRiMaaUsqOMss=/1440x0/smart/d1i4t8bqe7zgj6.cloudfront.net/02-27-2020/t_af5d68bb1c904a1e88f7b1212400dacb_name_2e535688_59af_11ea_8efd_0f904bdd8057.jpg",
    publishedAt: "2020-03-03T13:24:04.9134978Z",
    content:
      "As the novel coronavirus raged in Hubei province earlier this year, the Chinese government imposed strict measures designed to limit the spread of the virus throughout the country.\r\nHowever, as the coronavirus spreads throughout the world, China is finding ne… [+2833 chars]"
  },
  {
    source: {
      id: "the-huffington-post",
      name: "The Huffington Post"
    },
    author: "Ed Mazza",
    title:
      "CNN Analyst Predicts The Exact Date Trump Will Dump Pence From The Ticket",
    description:
      "Paul Begala says Trump has already set the stage for ditching his vice president.",
    url:
      "https://www.huffpost.com/entry/paul-begala-donald-trump-mike-pence_n_5e5dffb4c5b67ed38b37bde1",
    urlToImage:
      "https://img.huffingtonpost.com/asset/5e5e0a7b2300002610ddde38.jpeg?cache=0cRjtGqeOM&ops=1200_630",
    publishedAt: "2020-03-03T10:00:31Z",
    content:
      "CNN political analyst Paul Begala this week “guaranteed” that President Donald Trump is going to dump Vice President Mike Pence. \r\n“This is not a prediction, it’s a certainty,” Begala said at the American Israel Public Affairs Committee conference in Washingt… [+716 chars]"
  },
  {
    source: {
      id: "the-washington-post",
      name: "The Washington Post"
    },
    author: null,
    title:
      "Live updates: Trump calls for Fed rate cut as U.S. coronavirus deaths rise; markets eye economic rescue",
    description:
      "Americans braced for an increasing toll at home, as officials around the world stepped up responses to cushion economic damage.",
    url:
      "https://www.washingtonpost.com/world/2020/03/03/coronavirus-live-updates/",
    urlToImage:
      "https://www.washingtonpost.com/resizer/Fji5EUwHxmOCOUMC0uOVKEV7Ass=/1440x0/smart/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/ZFP7TOS4U4I6VLCQDBYB4FHANU.jpg",
    publishedAt: "2020-03-03T08:08:32.3121692Z",
    content:
      "As the novel coronavirus raged in Hubei province earlier this year, the Chinese government imposed strict measures designed to limit the spread of the virus throughout the country.\r\nHowever, as the coronavirus spreads throughout the world, China is finding ne… [+2770 chars]"
  }
];

AppRegistry.registerComponent("app", () => App);
