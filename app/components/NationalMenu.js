import React, { Component } from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class NationalMenu extends Component {
  constructor(props) {
    super(props);
    this.handleTopNewsPress = this.handleTopNewsPress.bind(this);
    this.handleCandPress = this.handleCandPress.bind(this);
  }
  handleTopNewsPress() {
    this.props.navigation.navigate("Top Stories", {
      news: topData
    });
  }
  handleCandPress() {
    this.props.navigation.navigate("Presidential Candidates");
  }

  render() {
    return (
      // Try setting `flexDirection` to `column`.
      <View style={style.topContainer}>
        <View style={style.header}>
          <Text style={style.welcome}>United States</Text>
          <Text>National Politics</Text>
        </View>
        <View style={style.cols}>
          <View style={style.col1}>
            <TouchableOpacity onPress={this.handleTopNewsPress}>
              <Text style={style.colHeaders}>Top News Stories</Text>
            </TouchableOpacity>
          </View>
          <View style={style.col2}>
            <TouchableOpacity
              onPress={() => {
                this.handleCandPress();
              }}
            >
              <Text style={style.colHeaders}>Top Candidates</Text>
            </TouchableOpacity>
          </View>
          <View style={style.col3}>
            <TouchableOpacity onPress={this.handlePress}>
              <Text style={style.colHeaders}>Polls/Standings</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={style.footer}></View>
      </View>
    );
  }
}
const style = {
  colHeaders: {
    fontSize: 25
  },
  welcome: {
    fontSize: 35,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  topContainer: {
    flex: 6
  },
  cols: {
    flex: 2
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "white"
  },
  col1: {
    borderRadius: 15,
    borderWidth: 3,
    borderColor: "#d6d7da",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "powderblue"
  },
  col2: {
    borderRadius: 15,
    borderWidth: 3,
    borderColor: "#d6d7da",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "skyblue"
  },
  col3: {
    borderRadius: 15,
    borderWidth: 3,
    borderColor: "#d6d7da",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "steelblue"
  },
  col4: {
    borderRadius: 15,
    borderWidth: 3,
    borderColor: "#d6d7da",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "powderblue"
  },
  footer: {
    flex: 1
  }
};

const topData = [
  {
    source: {
      id: null,
      name: "Nytimes.com"
    },
    author: "Steve Cavendish, Rick Rojas",
    title:
      "Nashville Tornado Live Updates: 22 Killed Across Tennessee - The New York Times",
    description:
      "A powerful storm system cut a path through the middle of Tennessee in the early morning hours, shredding buildings, toppling electrical lines and littering streets with debris.",
    url: "https://www.nytimes.com/2020/03/03/us/nashville-tornado-live.html",
    urlToImage:
      "https://static01.nyt.com/images/2020/03/03/world/03nashville-promo/03nashville-promo-facebookJumbo-v2.jpg",
    publishedAt: "2020-03-03T18:11:03Z",
    content:
      "Annakate and Andrew Ross were on the upper flow of their home when they heard the tornados approach. As they scrambled downstairs with their daughters to a crawl space, the tremendous wind ripped off a side of their house. A neighbors garage apartment was kno… [+1053 chars]"
  },
  {
    source: {
      id: "nbc-news",
      name: "NBC News"
    },
    author: "Elisha Fieldstadt",
    title:
      "Murder case against Fotis Dulos dropped after his death, against wishes of defense - NBC News",
    description:
      "The state of Connecticut on Tuesday dropped the murder and kidnapping case against Fotis Dulos, who died earlier this year after attempting suicide. Jennifer",
    url:
      "https://www.nbcnews.com/news/us-news/murder-case-against-fotis-dulos-dropped-after-his-death-against-n1148026",
    urlToImage:
      "https://media1.s-nbcnews.com/j/newscms/2020_05/3207666/200129-fotis-dulos-mn-1255_72de520d02d322cfe6b46460969a2549.nbcnews-fp-1200-630.jpg",
    publishedAt: "2020-03-03T18:06:00Z",
    content:
      "A Connecticut judge on Tuesday decided to drop the murder and kidnapping case against the now-deceased Fotis Dulos over the objections of his attorney, who said he wished to pursue a trial to prove that his client did not kill his estranged wife.\r\nDulos, a Co… [+2476 chars]"
  },
  {
    source: {
      id: "the-verge",
      name: "The Verge"
    },
    author: "Tom Warren",
    title: "WhatsApp dark mode now available for iOS and Android - The Verge",
    description:
      "WhatsApp is finally getting a new dark mode on iOS and Android. It’s a long-awaited feature, and the latest app update will turn it on automatically if you have dark mode enabled at the system level.",
    url:
      "https://www.theverge.com/2020/3/3/21162387/whatsapp-dark-mode-ios-android-download-features-release-date",
    urlToImage:
      "https://cdn.vox-cdn.com/thumbor/LmHFPPkyWc-FyOgnj10hjp-yHto=/0x420:4468x2759/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/19763061/English_DarkMode_iPhone.jpg",
    publishedAt: "2020-03-03T18:00:00Z",
    content: "Facebook finally says hello to darkness"
  },
  {
    source: {
      id: null,
      name: "Slate.com"
    },
    author: "Julie F. Kay, Kathryn Kolbert",
    title:
      "The Supreme Court’s Abortion Decision Could Reshape American Jurisprudence - Slate",
    description:
      "The court must decide if it’s willing to sacrifice bedrock legal principles in the rush to ban abortions.",
    url:
      "https://slate.com/news-and-politics/2020/03/scotus-june-medical-services-abortion-legal-principles.html",
    urlToImage:
      "https://compote.slate.com/images/01bcb159-07c8-4cd6-b9e6-3911a213d3d3.jpeg?width=780&height=520&rect=4000x2667&offset=0x0",
    publishedAt: "2020-03-03T17:33:00Z",
    content:
      "Activists demonstrate in front of the U.S. Supreme Court during the 47th annual March for Life on Jan. 24.\r\nOn Wednesday, the Supreme Court will consider a full-blown attack on abortion rights that could throw the courts own legitimacy into question. The stat… [+5581 chars]"
  },
  {
    source: {
      id: null,
      name: "Androidcentral.com"
    },
    author: "Chris Wedel",
    title:
      "Google's Pixel phones now have an iPhone-like 3D Touch feature - Android Central",
    description:
      "While Apple is ditching 3D Touch in its newest phones, Google is adding it via a software update to its Pixel phones.",
    url:
      "https://www.androidcentral.com/googles-pixel-phones-now-have-iphone-3d-touch-feature",
    urlToImage:
      "https://www.androidcentral.com/sites/androidcentral.com/files/styles/large/public/article_images/2020/03/pixel-long-press-menu-hero.jpg?itok=yGZqOXs4",
    publishedAt: "2020-03-03T17:18:09Z",
    content:
      "It seems that Google is introducing a former hardware feature iPhone to Pixel phones via the March 2020 software update. Pixel users will be getting a 3D Touch like option for accessing quick menus rather the using the current long-press option.\r\nThe Verge wa… [+1351 chars]"
  },
  {
    source: {
      id: null,
      name: "Macrumors.com"
    },
    author: "Juli Clover",
    title:
      "Apple Working on Six Mini-LED Products Including New 14.1-Inch MacBook Pro and Refreshed iMac Pro - MacRumors",
    description:
      "Apple has six mini-LED products in the works that are set to debut in 2020 and 2021, and production is not expected to be delayed by the coronavirus,...",
    url:
      "https://www.macrumors.com/2020/03/03/apple-14-1-inch-macbook-pro-mini-led/",
    urlToImage:
      "https://images.macrumors.com/article-new/2020/02/16-inch-macbook-pro-orange-background.jpg",
    publishedAt: "2020-03-03T17:11:00Z",
    content:
      "Apple has six mini-LED products in the works that are set to debut in 2020 and 2021, and production is not expected to be delayed by the coronavirus, according to a new note to investors sent out this morning by Apple analyst Ming-Chi Kuo.\r\nApple is developin… [+1913 chars]"
  },
  {
    source: {
      id: null,
      name: "Slashfilm.com"
    },
    author: "Ethan Anderton",
    title:
      "'Almost Family' Canceled at FOX Following Rape Allegations Against Series Star Timothy Hutton - /FILM",
    description:
      "News of Almost Family canceled at FOX came just a few hours after BuzzFeed unearthed a rape allegation levied against series star Timothy Hutton.",
    url: "https://www.slashfilm.com/almost-family-canceled/",
    urlToImage:
      "https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/almostfamily-sisters-timothyhutton.jpg",
    publishedAt: "2020-03-03T17:00:50Z",
    content:
      "After one season on FOX, the drama series Almost Family has been canceled. News of the show’s cancellation follows the shocking revelation of rape allegations against one of the show’s stars, Oscar winner Timothy Hutton (Ordinary People, Iceman). Though the r… [+2608 chars]"
  },
  {
    source: {
      id: null,
      name: "Huffpost.com"
    },
    author: "Carly Ledbetter",
    title:
      "Kate Middleton Wears The Greenest Outfit You've Ever Seen For Ireland Trip - HuffPost",
    description:
      'The Duchess of Cambridge is giving a whole new meaning to "going green."',
    url:
      "https://www.huffpost.com/entry/kate-middleton-green-ireland_n_5e5e6ae8c5b6732f50e8b274",
    urlToImage:
      "https://img.huffingtonpost.com/asset/5e5e71542300002610dddeb9.jpeg?cache=PHjZRkojen&ops=1200_630",
    publishedAt: "2020-03-03T16:59:00Z",
    content:
      "Kate Middleton is giving a whole new meaning to “going green.”\r\nThe Duchess of Cambridge layered on the green on Tuesday and coordinated nicely with Prince William at the start of the couple’s three-day trip to Ireland. They took a commercial Aer Lingus fligh… [+1606 chars]"
  },
  {
    source: {
      id: "cnbc",
      name: "CNBC"
    },
    author: "Jessica Dickler",
    title: "What this surprise Fed rate cut means for you - CNBC",
    description:
      "In a rare move, the Fed slashed rates by half a percentage point. That will have far-reaching consequences for everyday Americans.",
    url:
      "https://www.cnbc.com/2020/03/03/heres-what-this-surprise-fed-rate-cut-means-for-you.html",
    urlToImage:
      "https://image.cnbcfm.com/api/v1/image/106225798-1572987739949gettyimages-1161853153.jpeg?v=1578979278",
    publishedAt: "2020-03-03T16:53:00Z",
    content:
      "In a rare move, the Federal Reserve announced an emergency rate cut of 50 basis points in response to the growing threat from the coronavirus outbreak.\r\nIt's the first time the Fed has cut rates by half a percentage point since late 2008. \r\n\"The fundamentals … [+4900 chars]"
  },
  {
    source: {
      id: null,
      name: "Youtube.com"
    },
    author: null,
    title:
      "Apple agrees to pay users for slowing down old iPhones - Fox Business",
    description:
      "People who owned any version of the iPhone 6 to the iPhone 7 Plus or certain iPhone SE's could get $25 or more for each device, depending on how many claims ...",
    url: "https://www.youtube.com/watch?v=8f-pLpcIV7E",
    urlToImage: "https://i.ytimg.com/vi/8f-pLpcIV7E/maxresdefault.jpg",
    publishedAt: "2020-03-03T16:46:01Z",
    content:
      "[[getSimpleString(data.title)]]\r\n[[getSimpleString(data.description)]]\r\n[[getSimpleString(data.videoCountText)]]"
  },
  {
    source: {
      id: null,
      name: "Cordcuttersnews.com"
    },
    author: "Jess Barnes",
    title:
      "Amazon and YES Network Will Livestream Yankees Games for Prime Members - Cord Cutters News, LLC",
    description:
      "The YES Network and Amazon Prime have made a deal to air 21 New York Yankees games live on Amazon Prime Video. The first Yankees game on Prime Video is scheduled for Friday, April 17, when the Yankees host the Reds at 7 p.m. ET. Amazon Prime subscribers in th…",
    url:
      "https://www.cordcuttersnews.com/amazon-and-yes-network-will-livestream-yankees-games-for-prime-members/",
    urlToImage:
      "https://i0.wp.com/www.cordcuttersnews.com/wp-content/uploads/2020/03/Yes-Network-Logo.jpg?fit=1200%2C675&ssl=1",
    publishedAt: "2020-03-03T16:46:00Z",
    content:
      "The YES Network and Amazon Prime have made a deal to air 21 New York Yankees games live on Amazon Prime Video. The first Yankees game on Prime Video is scheduled for Friday, April 17, when the Yankees host the Reds at 7 p.m. ET.\r\nAmazon Prime subscribers in t… [+3642 chars]"
  },
  {
    source: {
      id: null,
      name: "Youtube.com"
    },
    author: null,
    title:
      "EU pledges $800m to Greece for refugee, migrant surge - Al Jazeera English",
    description:
      "The EU has promised $800m to Greece to deal with a refugee and migrant surge from Turkey. That came after Turkey said it would allow hundreds of thousands of...",
    url: "https://www.youtube.com/watch?v=bDuujDICEwo",
    urlToImage: "https://i.ytimg.com/vi/bDuujDICEwo/maxresdefault.jpg",
    publishedAt: "2020-03-03T15:50:46Z",
    content:
      "The EU has promised $800m to Greece to deal with a refugee and migrant surge from Turkey. That came after Turkey said it would allow hundreds of thousands of people to pass through.Greece and Bulgaria have stepped up security on their side of the land border … [+911 chars]"
  },
  {
    source: {
      id: null,
      name: "Nytimes.com"
    },
    author: "Katie Thomas, Knvul Sheikh",
    title:
      "Estimates Fall Short of F.D.A.’s Pledge for 1 Million Coronavirus Tests - The New York Times",
    description:
      "Public and private labs say they’re not even close to reaching the federal government’s promises that thousands, if not a million, tests for the virus could be “performed” soon.",
    url: "https://www.nytimes.com/2020/03/03/health/coronavirus-tests-fda.html",
    urlToImage:
      "https://static01.nyt.com/images/2020/03/03/science/03VIRUS-TESTCHECK/merlin_169917249_74290577-042d-4b23-879a-1902cca5ca4f-facebookJumbo.jpg",
    publishedAt: "2020-03-03T15:49:00Z",
    content:
      "Public health experts have become concerned that the lack of adequate testing in several states has led to community transmission and warned there may be many undetected cases that could lead to further infections.\r\nNew York States public health lab, which wa… [+1580 chars]"
  },
  {
    source: {
      id: "fox-news",
      name: "Fox News"
    },
    author: "Madeline Farber",
    title:
      "Coronavirus quarantines more than 2 dozen Washington State firefighters - Fox News",
    description:
      "More than two dozen firefighters in Washington State have been quarantined after they were possibly exposed to the novel coronavirus, which has killed at least six people in the state to date.",
    url:
      "https://www.foxnews.com/health/coronavirus-quarantines-more-than-2-dozen-washington-state-firefighters",
    urlToImage:
      "https://cf-images.us-east-1.prod.boltdns.net/v1/static/694940094001/d5e706c1-4a56-4fac-80e3-247bc960fcfc/82581c93-315b-4850-a229-f44ad61e7928/1280x720/match/image.jpg",
    publishedAt: "2020-03-03T15:35:58Z",
    content:
      "More than two dozen firefighters in Washington State have been quarantined after they were possibly exposed to the novel coronavirus, which has killed at least six people in the state to date.\r\nThe city of Kirkland on Monday announced that 27 firefighters and… [+3117 chars]"
  },
  {
    source: {
      id: "politico",
      name: "Politico"
    },
    author: null,
    title:
      "'I just don't think we are the face of the establishment': Klobuchar dismisses criticism of Biden endorsements - POLITICO",
    description:
      "She also denied that the former vice president promised her a post in his potential administration in exchange for her support.",
    url:
      "https://www.politico.com/news/2020/03/03/klobuchar-biden-endorsement-criticism-119445",
    urlToImage:
      "https://static.politico.com/b1/30/3c6664c94979bd86fa62fd92fa6c/200303-klobuchar-biden-gty-773.jpg",
    publishedAt: "2020-03-03T15:28:00Z",
    content:
      "And I just dont think we are the face of the establishment, she continued. I think were fresh faces in our party. \r\nKlobuchar insisted that while she is friends with Bernie, noting that they entered the Senate together in 2007, I dont think we should have a s… [+979 chars]"
  },
  {
    source: {
      id: null,
      name: "Nypost.com"
    },
    author: "Steve Serby",
    title:
      "NFL Mock Draft 3.0: Giants take Tristan Wirfs, Jets pick Mekhi Becton after trades - New York Post ",
    description:
      "The Serby Mock Draft 3.0 has Giants GM Dave Gettleman trading down for the first time in his career and Jets GM Joe Douglas trading up. Gettleman and head coach Joe Judge think long and hard about …",
    url:
      "https://nypost.com/2020/03/03/nfl-mock-draft-3-0-giants-take-tristan-wirfs-jets-pick-mekhi-becton-after-trades/",
    urlToImage:
      "https://thenypost.files.wordpress.com/2020/03/nfl-mock-draft-tristan-wirfs-mekhi-becton.jpg?quality=90&strip=all&w=1200",
    publishedAt: "2020-03-03T15:27:00Z",
    content:
      "The Serby Mock Draft 3.0 has Giants GM Dave Gettleman trading down for the first time in his career and Jets GM Joe Douglas trading up.\r\nGettleman and head coach Joe Judge think long and hard about LB Isaiah Simmons, but Gettleman hasnt fixed the offensive li… [+5908 chars]"
  },
  {
    source: {
      id: null,
      name: "Phys.org"
    },
    author: "Science X staff",
    title:
      "This wearable device camouflages its wearer no matter the weather - Phys.org",
    description:
      "Researchers at the University of California San Diego developed a wearable technology that can hide its wearer from heat-detecting sensors such as night vision goggles, even when the ambient temperature changes—a feat that current state of the art technology …",
    url:
      "https://phys.org/news/2020-03-wearable-device-camouflages-wearer-weather.html",
    urlToImage: "https://scx2.b-cdn.net/gfx/news/2020/thiswearable.jpg",
    publishedAt: "2020-03-03T15:11:08Z",
    content:
      "Researchers at the University of California San Diego developed a wearable technology that can hide its wearer from heat-detecting sensors such as night vision goggles, even when the ambient temperature changesa feat that current state of the art technology c… [+3250 chars]"
  },
  {
    source: {
      id: null,
      name: "Hackaday.com"
    },
    author: "Tom Nardi",
    title:
      "Expanding, And Eventually Replacing, The International Space Station - Hackaday",
    description:
      "Aboard the International Space Station (ISS), humanity has managed to maintain an uninterrupted foothold in low Earth orbit for just shy of 20 years. There are people reading these words who have h…",
    url:
      "https://hackaday.com/2020/03/03/expanding-and-eventually-replacing-the-international-space-station/",
    urlToImage:
      "https://hackaday.com/wp-content/uploads/2020/02/axiom_feat.jpg",
    publishedAt: "2020-03-03T15:01:00Z",
    content:
      "Aboard the International Space Station (ISS), humanity has managed to maintain an uninterrupted foothold in low Earth orbit for just shy of 20 years. There are people reading these words who have had the ISS orbiting overhead for their entire lives, the first… [+8575 chars]"
  },
  {
    source: {
      id: null,
      ame: "Nytimes.com"
    },
    auhor: "Robin Pogrebin",
    ttle:
      "Pritzker Architecture Prize Goes to Two Women for the First Time - The New York Times",
    descripion:
      "The Dublin-based architects Yvonne Farrell and Shelley McNamara have practiced together for 40 years.",
    url:
      "https://www.nytimes.com/2020/03/03/arts/pritzker-prize-female-team.html",
    urlToIage:
      "https://static01.nyt.com/images/2020/03/04/arts/03pritzker1/03pritzker1-facebookJumbo.jpg",
    publishdAt: "2020-03-03T15:00:00Z",
    conent:
      "The two have practiced together for 40 years, meeting at University College Dublin in 1974 and helping to found their firm, Grafton Architects, in Dublin in 1978. Their collaborative approach was evident in their curation of the 2018 Venice Architecture Bienn… [+1477 chars]"
  }
];
