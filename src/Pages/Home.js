import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      <header>
        <div className="logo-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="243" height="59.201" viewBox="0 0 243 59.201">
            <g id="Group_125" data-name="Group 125" transform="translate(-140 -35.9)">
              <path id="Icon_awesome-vr-cardboard" data-name="Icon awesome-vr-cardboard" d="M91.091,4.5H4.794A4.866,4.866,0,0,0,0,9.433V58.767A4.866,4.866,0,0,0,4.794,63.7h24a9.576,9.576,0,0,0,8.744-5.818l4.156-9.5a6.625,6.625,0,0,1,12.489,0l4.156,9.5A9.578,9.578,0,0,0,67.087,63.7h24a4.866,4.866,0,0,0,4.794-4.933V9.433A4.866,4.866,0,0,0,91.091,4.5Zm-67.12,37a9.871,9.871,0,0,1,0-19.734,9.871,9.871,0,0,1,0,19.734Zm47.943,0A9.871,9.871,0,1,1,81.5,31.634,9.73,9.73,0,0,1,71.914,41.5Z" transform="translate(140 31.4)" fill="#fcf9f9" />
              <text id="Dystopia" transform="translate(258 69)" fill="#fcf9f9" font-size="30" font-family="SegoeUI-Bold, Segoe UI" font-weight="700">
                <tspan x="0" y="0">
                  Dystopia
                </tspan>
              </text>
            </g>
          </svg>
        </div>
        <nav className="nav-links">
          <ul>
            <li>
              <Link className="hom" to="/home">
                Home
              </Link>
              <Link className="cat" to="/category">
                Categories
              </Link>
              <Link className="sub" to="/subscribe">
                Subscribe
              </Link>
              <Link className="sea" to="/search">
                Search
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="body-1">
        <img className="phone" src="/" alt="" /> <img src="/Images/Group 78.png" alt="" />
        <p className="update">
          Everything you need to be updated <br /> on whats happening around you
        </p>
        <div className="follow">
          <svg xmlns="http://www.w3.org/2000/svg" width="229" height="31.304" viewBox="0 0 229 31.304">
            <g id="Group_130" data-name="Group 130" transform="translate(-1392 -872.848)">
              <path id="Icon_material-reply-all" data-name="Icon material-reply-all" d="M13.5,13.284V7.5L0,21l13.5,13.5V28.709L5.784,21Zm11.569,1.928V7.5L11.569,21l13.5,13.5V26.588c9.641,0,16.389,3.085,21.209,9.833C44.347,26.781,38.563,17.141,25.066,15.213Z" transform="translate(1440.118 909.22) rotate(177)" fill="#fcf9f9" />
              <text id="We_follow_the_News" data-name="We follow the News" transform="translate(1446 895)" fill="#fcf9f9" font-size="18" font-family="Poppins-Medium, Poppins" font-weight="500">
                <tspan x="0" y="0">
                  We follow the News
                </tspan>
              </text>
            </g>
          </svg>
        </div>
      </div>
      <p className="feat">Top feature post</p>
      <div className="body-2">
        <img className="lap" src="/Images/about.jpg" alt="" />
        <p className="lag">
          Lagos is africa's most valuable start up <br /> ecosystem{" "}
        </p>
        <p className="start">
          For startups, Lagos, Africa’s largest city,
          <br /> appears to be a land of promise with its <br /> huge addressable population of over 20
        </p>
        <img className="face" src="/Images/woman-s-face-1988681.jpg" alt="" />
        <p className="stun">Stunning Artworks</p>
        <p className="art">
          Da Vinci’s ‘Salvator Mundi’ was the most <br /> expensive arteork sold at the exhibition. It <br /> was sold for $450.3 million. <br />
          Tutu turned up in a north London flat
        </p>
        <img className="gal" src="/Images/pexels-matheus-bertelli-2608517.jpg" alt="" />
        <p className="silicon">
          Why Lagos (in Nigeria) is Africa’s <br /> Silicon Valley
        </p>
        <p className="dubbed">
          dubbed ‘Netflix of Africa’ and has closed <br /> several funding rounds in excess of US <br />
          $30m, started in 2010. Thanks to a Series A
        </p>
        <img className="gym" src="/Images/danielle-cerullo-CQfNt66ttZM-unsplash.jpg" alt="" />
        <p className="cal">
          Does Calorie Counting Work
          <br /> For Weight Loss?
        </p>
        <p className="weight">
          Let’s get this out of the way up front. Yes, <br /> calorie counting works for weight loss.
          <br /> The law of thermodynamics applies to
        </p>
        <img className="bridge" src="/Images/login-background (1).jpg" alt="" />
        <p className="energy">
          LASG, ENERGY FIRMS AGREE <br /> ON POWER SUPPLY TO LAGOSIANS
        </p>
        <p className="resource">
          Lagos State Government, through its <br /> Ministry of Energy and Mineral Resources,
          <br /> on Tuesday signed a Memoranda of
        </p>
        <img className="phone-2" src="/Images/gilles-lambert-pb_lF8VWaPU-unsplash.jpg" alt="" />
        <p className="iphone">
          Apple iPhone 13 and Apple Watch <br /> live blog: ‘California Streaming’
        </p>
        <p className="apple">
          The time has come for yet another <br /> iPhone announcement — plus whatever
          <br /> else Apple might have up its sleeve.
        </p>
        <p className="story">All Stories</p>
        <img className="wiz" src="/Images/Wizkid.png" alt="" />
        <img className="cot" src="/Images/pexels-cottonbro-6208927.png" alt="" />
        <img className="can" src="/Images/pexels-social-soup-social-media-2448946.png" alt="" />
        <p className="made">
          Wizkid’s ‘made In Lagos’ <br /> Hits No. 1 On Billboard <br /> World Album Chart.
        </p>
        <p className="album">
          Wizkid’s fourth studio album, Made In Lagos, has clinched <br /> the No. 1 spot on the Billboard world album chart, ten <br /> months after its release.Released in October 2020, Made <br /> In Lagos gained international recognition early this year
        </p>
        <p className="sil">
          Silicon Valley Start-up <br /> Backed By Jeff Bezos <br /> Is Trying To Create <br /> Immortality.
        </p>
        <p className="sil-2">
          Altos Labs is a Silicon Valley <br /> firm that's been offering scientists big <br /> salaries to do some anti-ageing <br /> research and biological reprogramming.
        </p>
        <p className="move">
          Before you to <br /> move to Canada
        </p>
        <p className="can-eco">
          in Canada The economy is BOOMING!A fast growing, modern, <br /> industrialized nation, Canada offersunlimited potential <br /> and opportunity. With the highest standard of
        </p>
        <img className="book" src="/Images/pexels-abby-chung-1106468.png" alt="" />
        <img className="plane" src="/Images/pexels-anugrah-lohiya-723240.png" alt="" />
        <img className="law" src="/Images/pexels-anand-sundram-2880979.png" alt="" />
        <p className="read">Poor reading culture</p>
        <p className="recent">
          Recently a national newspaper editorial <br /> decried the near dead reading culture <br /> in Nigeria. As far as the Editorial team was <br /> concerned Nigerians don’t read as much or as <br /> well as they once used to. These days it’s hard to come <br /> across anyone who is interested in reading just for the fun
        </p>
        <p className="fly">
          Ibomair Become The First <br /> Domestic Airline To Offer <br /> Free Wifi To Passengers
        </p>
        <p className="ibom">
          Ibom Air was presented the Award <br /> of excellence by NATOP - Nigerian Association of Tour operators <br /> - at heir recently concluded AGM on Saturday the 27th of June
        </p>
        <p className="uni">
          Senate Passes Bills <br /> Establishing <br /> 2 Federal Universities
        </p>
        <p className="sen">
          The Senate, Tuesday, passed two bills seeking to establish <br /> two federal universities in Ekiti and Nasarawa states.The bills are <br />
          Federal University of Health and Medical Sciences Iyin, Ekiti <br /> State (Establishment) Bill, 2021, and
        </p>
        <img className="fb" src="/Images/pexels-scott-webb-1048010.png" alt="" />
        <img className="spo" src="/Images/women-s-white-framed-sunglasses-2690323.png" alt="" />
        <img className="food" src="/Images/Food Photography & Art Direction by Moataz Mohamed _ Inspiration Grid.png" alt="" />
        <p className="open">
          Facebook Opens <br /> First Office <br /> In Africa
        </p>
        <p className="user">
          Facebook has opened its first headquarters <br /> in Africa as it looks to add to its existing <br /> 120 million users on the continent
        </p>
        <p className="lau">
          Spotify launches <br /> in Nigeria
        </p>
        <p className="riv">
          Spotify launches in Nigeria with its unrivalled <br /> mix of features that have made it the world’s most popular <br /> audio streaming subscription service, including <br /> more than 70 million international and local songs, 2.2 million
        </p>
        <p className="beau">
          Exploring The Beauty <br /> Of Nigerian Food <br /> With King's Dorm
        </p>
        <p className="dev">
          Devon King’s is exploring the richness of Nigerian <br /> meals as it launches The King’s Dorm, hosted by different <br /> chefs for each episode to reveal the best Nigerian <br /> delicacies and ingredients used to prepare the dishes.
        </p>
        <p className="see">See more post</p>
        <img className="car" src="/Images/mohd-hammad-wDnNi3oKHD4-unsplash.png" alt="" />
        <p className="rem"> Cars Were a Remote Idea</p>
        <p className="tech">
          Researchers at RAND have been working on the technology <br /> behind driverless vehicles for over 50 years. <br />
          From 1968 to the present, studies have involved <br /> remote-controlled... still a niche market, however, <br /> and is of more interest to tech enthusiasts
        </p>
        <img className="vr" src="/Images/lucrezia-carnelos-IMUwe-p1yqs-unsplash.png" alt="" />
        <p className="psvr">
          ‘PSVR’ looks like it
          <br /> might make pole position
        </p>
        <p className="immerse">
          “One day, we believe this kind of immersive, <br /> augmented reality will become part of daily life for billions of people,” <br /> wrote facebook’s founder Mark Zuckerbergthis kind of immersive,
          <br /> augmented reality will become part of daily life for billions of people,”
          <br /> wrote facebook’s founder Mark Zuckerberg following
        </p>
        <img className="airpod" src="/Images/jonas-jacobsson-W6wKfTs5Rxc-unsplash.png" alt="" />
        <p className="fut">
          Futurism | Building <br /> the future together.
        </p>
        <p className="believe">
          If there is one thing that we truly believe in, <br /> it’s our senses. Our reality is based on the information our <br /> senses gather. This makes it extremely important that we can rely <br /> on them and don’t get fooled by them. However, <br /> the human senses are not perfect and sometimes this leads to false
        </p>
        <p className="sep-1">15 september</p>
        <p className="sep-2"> 26 september</p>
        <p className="sep-3">30 september</p>
        <img className="comm" src="/Images/undraw_Blogging_re_kl0d.png" alt="" />
        <p className="comm-1">Our Community</p>
        <p className="comm-2">Join the community of over a million active members.</p>
        <img className="asian" src="/Images/photo-1542909168-82c3e7fdca5c.png" alt="" />
        <div className="member">
          <p className="bec">
            Become a member of our <br /> Community
          </p>
          <p className="stay">Stay connected</p>
          <p className="join">
            Join our mailing list to get updates about the next VR gaming revolution and receive amazing <br /> offers!
          </p>

          <p className="Ema">Email Address</p>
          <p className="Email-1">Email </p>
          <p className="look">Tell us what you are looking for</p>
          <p className="pas">Password</p>
          <p className="gen">Geneva</p>
          <p className="find">Search</p>
          <p className="con">
            Phone: +413456775 <br />
            Email: hello@dystopia.com <br />
            Address: Ada George road Port Harcourt <br /> Nigera
          </p>
          <img className="social" src="/Images/Group 80.png" alt="" />
        </div>
      </div>
      <p>© 2021 Dystopia Inc.</p>
    </div>
  );
};

export default Home;
