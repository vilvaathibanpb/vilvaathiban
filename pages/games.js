import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { Container } from "./about";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Wrap, Eyebrow, Title, Lead, JsonLd } from "../components/service";
import { PERSON_REF } from "../lib/person";

const URL = "https://www.vilvaathiban.com/games";

const play = (pkg) => `https://play.google.com/store/apps/details?id=${pkg}`;

// Android games from the games monorepo. `slug` matches the support and privacy
// pages under /apps, and the icon/screenshot files under /public/games.
const GAMES = [
  {
    name: "Mancala Offline",
    slug: "mancala-offline",
    genre: "Board game",
    category: "BoardGame",
    tagline: "Classic Mancala on a wooden board, against the computer or a friend.",
    summary:
      "Sow the stones, land in your store for another turn, capture from empty pits. Four computer levels, a World Tour against 12 masters from Cairo to New York, a daily puzzle and two-player pass & play. Fully offline.",
    play: play("com.vilva.mancala"),
  },
  {
    name: "Idle Blacksmith",
    slug: "idle-blacksmith",
    genre: "Idle tycoon",
    category: "SimulationGame",
    tagline: "Tap the anvil, forge legendary swords and grow your smithy, even offline.",
    summary:
      "Hammer 40 weapons across 8 materials from Copper to Starmetal, land masterworks for 10× gold, and hire apprentices who keep forging while you are away.",
    play: play("com.vilva.idleblacksmith"),
  },
  {
    name: "Pack It Perfect",
    slug: "pack-it-perfect",
    genre: "Puzzle",
    category: "PuzzleGame",
    tagline: "A cozy packing puzzle: fit every item in the suitcase.",
    summary:
      "Drag, turn and fit T-shirts, books, cameras and teddy bears into suitcases, moving boxes and picnic baskets. 60 levels across 4 little story chapters. Relaxing and offline.",
    play: play("com.vilva.packit"),
  },
];

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-top: 40px;
`;

const Card = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: 640px) {
    grid-template-columns: 200px 1fr;
  }
  border: 1px solid #ececea;
  border-radius: 16px;
  overflow: hidden;
  background: #fff;
  transition: transform 140ms ease, box-shadow 140ms ease;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 28px rgba(17, 24, 39, 0.08);
  }
  a { color: inherit; text-decoration: none; }
`;

const ShotLink = styled.a`
  display: block;
  border: 0;
  background: #f4f4f2;
  @media (max-width: 639px) {
    max-height: 420px;
    overflow: hidden;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  > a { display: block; border: 0; }
`;

const Shot = styled.img`
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 562 / 1000;
  object-fit: cover;
  object-position: top;
`;

const Body = styled.div`
  padding: 20px 22px 8px;
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
`;

const NameRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  img { width: 48px; height: 48px; border-radius: 12px; flex: none; }
`;

const Name = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: #111827;
  margin: 0;
`;

const Genre = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #047857;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  margin-top: 2px;
`;

const Tagline = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #334155;
  margin-top: 14px;
`;

const Summary = styled.p`
  font-size: 14px;
  color: #475569;
  line-height: 1.6;
  margin: 10px 0 0;
`;

const Footerline = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  padding: 12px 22px 22px;
  margin-top: auto;
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 13px;
  > a { border: 0; }
  img { height: 40px; width: auto; display: block; }
`;

const Small = styled.div`
  display: flex;
  gap: 12px;
  a { color: #475569; border-bottom: 1px solid #cbd5e1; }
`;

const Callout = styled.div`
  margin-top: 56px;
  padding: 18px 20px;
  border: 1px solid #ececea;
  border-radius: 14px;
  background: #fafaf7;
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 15px;
  color: #334155;
  a { color: #111827; font-weight: 700; border-bottom: 1px solid #cbd5e1; }
`;

const GameCard = ({ game }) => (
  <Card>
    <ShotLink href={game.play} rel="noopener" tabIndex={-1} aria-hidden="true">
      <Shot src={`/games/${game.slug}-shot.jpg`} alt="" width="562" height="1000" loading="lazy" />
    </ShotLink>
    <Content>
      <a href={game.play} rel="noopener" aria-label={`${game.name} on Google Play`}>
        <Body>
          <NameRow>
            <img src={`/games/${game.slug}-icon.png`} alt="" width="48" height="48" loading="lazy" />
            <div>
              <Name>{game.name}</Name>
              <Genre>{game.genre} · Android</Genre>
            </div>
          </NameRow>
          <Tagline>{game.tagline}</Tagline>
          <Summary>{game.summary}</Summary>
        </Body>
      </a>
      <Footerline>
        <a href={game.play} rel="noopener" aria-label={`Get ${game.name} on Google Play`}>
          <img src="/apps/google-play-badge.svg" alt="Get it on Google Play" width="120" height="40" />
        </a>
        <Small>
          <Link href={`/apps/${game.slug}/support`}>Support</Link>
          <Link href={`/apps/${game.slug}/privacy`}>Privacy</Link>
        </Small>
      </Footerline>
    </Content>
  </Card>
);

const GamesPage = () => (
  <Container>
    <Head>
      <title>Games by Vilva Athiban: Mancala, Idle Blacksmith & Pack It Perfect</title>
      <meta
        name="description"
        content="Offline Android games by Vilva Athiban: Mancala Offline, the Idle Blacksmith forge tycoon and the Pack It Perfect packing puzzle. No account, play anywhere."
      />
      <link rel="canonical" href={URL} />
      <meta property="og:title" content="Games by Vilva Athiban" />
      <meta
        property="og:description"
        content="Mancala Offline, Idle Blacksmith and Pack It Perfect: offline Android games, no account needed."
      />
      <meta property="og:url" content={URL} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://www.vilvaathiban.com/games/mancala-offline-shot.jpg" />
    </Head>
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Games by Vilva Athiban",
        url: URL,
        author: PERSON_REF,
        hasPart: GAMES.map((game) => ({
          "@type": ["VideoGame", "MobileApplication"],
          name: game.name,
          description: game.summary,
          image: `https://www.vilvaathiban.com/games/${game.slug}-icon.png`,
          url: game.play,
          sameAs: [game.play],
          operatingSystem: "Android",
          applicationCategory: "GameApplication",
          genre: game.genre,
          gamePlatform: "Android",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          author: PERSON_REF,
        })),
      }}
    />
    <Header />
    <Wrap>
      <Eyebrow>Games</Eyebrow>
      <Title>Small games to play offline</Title>
      <Lead>
        Three free Android games that work without internet and without an
        account: a classic board game, an idle forge tycoon and a cozy packing
        puzzle. Each has optional ads and a one-time purchase to remove them, no
        subscriptions. Your progress stays on your phone.
      </Lead>

      <Grid>
        {GAMES.map((game) => (
          <GameCard key={game.slug} game={game} />
        ))}
      </Grid>

      <Callout>
        Looking for utilities instead? See the <Link href="/apps">apps</Link>:
        WhatsApp tools, a teleprompter, a caffeine tracker and more.
      </Callout>
    </Wrap>
    <Footer />
  </Container>
);

export default GamesPage;
