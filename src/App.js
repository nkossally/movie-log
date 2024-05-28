import { Review } from "./components/Review";
import "./index.scss";

function App() {
  return (
    <div className="container">
      <Review
        title="Reacher (tv)"
        text="Ex-military vigilante commits murder. Dirty Harry fantasy mixed with attempts at representing groups other than white men with well-drawn black Harvard grad police chief and tough lady cop. Refuses cavity search and prevents someone from being raped in prison. Hints of homophobia. Good show."
      />
      <Review
        title="Logan Lucky"
        text="Solid comedy written by wife of Soderbergh. Adam Driver good at being weird character actor. Meaningless fun."
        rating={7}
      />
      <Review
        title="Femme"
        text="Uncomfortable but successful discussion of a closeted white gay chav who attacks a black drag queen, ultimately concluding that the white guy is more broken and worthy of pity. Not visually interesting. The black actor seemed to be a boring drag queen to me. Spoiled by American Drag Race?"
        rating={7}
      />
      <Review
        title="I Care A Lot"
        text="Sociopath exploits old people and contends with the Russian mob boss of one of her elderly victims. Overt discussion of the sociopathy of capitalism. Rosamund Pike hilariously transitions between adorable cheery fake healthcare provider and icy calculator. Pike’s take on white woman sociopathy is distinct from Cate Blanchett’s in Tar. Blanchett’s sociopathy never disappears. Pike is at least as good as she is in Gone Girl. Movie too cynical to be successful?"
        rating={8}
      />
      <Review
        title="Mission: Impossible - Dead Reckoning"
        text="The monster is AI but this franchise has no idea how technology or anything in reality works. Silly fun. Perfect. 10/10"
        rating={10}
      />
      <Review
        title="Fabulous Baker Boys"
        text="Simple movie that would never be in theaters today."
        rating={6}
      />
      <Review
        title="Death Becomes Her"
        text="Funny. Perfect. When I was younger I was not able to receive Meryl as a villain. Now I am. She’s naturalistic, even in a campy villainous role."
        rating={9}
      />
      <Review
        title="The Challengers"
        rating={8}
        text="Unlike any movie I’ve seen before. Essentially about nothing of importance, but fun. Zendaya is very good. She nearly transcends race by playing a rich (half?) black women in a love triangle with white guys. Race and class are present and yet sidestepped. No social commentary."
      />
      <Review
        title="Devil Wears Prada"
        rating={8}
        text="Good movie with bad politics. Fantasy of professionalizing oneself by working for an abusive rich boss. Fantasy of New York and Paris. Fantasy of consumerism. But what else does capitalism offer except a few good professional jobs and stuff to buy. Bakeries with croissants."
      />
      <Review
        title="eXistenZ"
        text="Cronenberg examines danger of video game addiction displacing reality with signature organic technology body horror. Compares video games to sex, especially anal sex, and drugs. Young Jude Law is charming."
        rating={8}
      />
      <Review
        title="Constantine"
        text="Fun blockbuster that takes Christian faith literally. Queer coded devil and demons (the moment when devil spreads Keanu’s legs is sexy). [Spoiler Alert] Gets a 7 instead of a 6 because of the scene in which Constantine gives the Devil the finger as he floats off to heaven and the Devil prevents Constantine from going to heaven by taking the tar out of his lungs."
        rating={7}
      />
      <Review title="Dewey Cox" text="Yes" rating={8} />
      <Review
        title="Last Duel"
        text="Perfect. Beautiful. Adam Driver should only play weirdos and it shows here but he is actually fine here despite not embodying traditional leading male masculinity."
        rating={10}
      />
      <Review
        title="Before the Devil Knows Your Dead"
        text="Very good family melodrama about consequences of sibling rivalry and bad parenting. Hoffmann is the sociopath older brother who was over-disciplined and Hawke is the silly cute younger brother conned into robbing their parents. The final minutes are excessive and lessen the impact of the film. It would be better if the father just decided to be a parent, like Tilda Swinton hugging her son in We Need to Talk about Kevin."
        rating={8}
      />
      <Review
        title="Eastern Promises"
        text="Story is about the sexual exploitation of Russian/Ukrainian girls but the camera actually exploits Viggo Mortensen’s nudity, which, it seems, he was not super comfortable about. Between this, The Fly, and eXistenz, I think Cronenberg is a little gay. In addition, Mortensen is very touchy feely with the closeted Vincent Cassell in the film."
        text2="Addendum: See comments on Videodrome below. Here are excerpts from article: Cronenberg says he deliberately filmed heterosexual sex scenes in a cold way while much of the violence feels passionate and intimate. 'I try to make the violence real There is an underlying eroticism to it and by making it real I have made it sexual' 'I don't want to do a Bourne -type film… where you don't have to pay a penalty for that violence as an audience,' the director said in reference to the Jason Bourne trilogy starring Matt Damon."
        rating={9}
      />
      <Review
        title="Dredd"
        text="Comic book adaptation written by Alex Garland that uses futuristic setting to critique violent criminal justice system. Witty and subtle social commentary that is not didactic. I wonder if Lena Headey’s acting is the right size for tv and small for the movies."
        rating={9}
      />
      <Review
        title="Civil War"
        text="I do not mind that this film abstracts away from politics and institutions and just discusses the nature of people who document violence. A good use of movie abstraction from reality."
        rating={9}
      />
      <Review title="Speed " text="Dumb" rating={5} />
      <Review
        title="Talented Mr. Ripley"
        text="I remember being turned on by the hints of nudity in this film when I was younger. Gay awakening."
        rating={10}
      />
      <Review
        title="Videodrome"
        text="Parable about danger of television and porn displacing reality. Signature Cronenberg body horror and Freudian sex negativity. Discussion of using torture and violence as pornography. Blames both the watcher and producer of snuff films – watchers are complicit. Recurring theme of sadism in Cronenberg films. This film’s discussion of torture porn makes Viggo Mortensen’s nude scene in Eastern Promises seem pornographic. Though that film was taken as art and though the scene is violent and not overtly sexual, to a sadistic eye, Viggo Mortensen’s body being flung about a bathhouse by people trying to kill him is porn. Some directors actually want to make porn but make art instead."
        rating={8}
      />
      <Review
        title="Southland Tales"
        text="I would give it a 5 but I gave it a 6 because it takes big swings, attempting to comment on way too much – police state, radical leftists, feminists, corporations – with a confusing sci fi plot. Some jokes work. Most don’t. Richard Kelly is oddly childlike in demeanor. This film seems like it was written by someone in high school."
        rating={6}
      />
      <Review
        title="Miss Congeniality"
        text="Pretty funny. Sandra Bullock is perfect. I was wrong to dismiss movies like this in my youth. Perfect set up in which FBI must use resources on training agent for beauty pageant. The jokes and set up could have been pushed further. Some don’t work. Several gay panic jokes and a really bizarre scene making fun of militant lesbian pageant finalist. And yet, the movie is kind of gay friendly. Black FBI boss and Benjamin Bratt wear dress in scene in which computer program generates images of agents in pageant dress. Opportunity to shame homely women, show men in drag (appealing to gay and anti-gay gaze) and objectify Sandra Bullock. Nice legs on black guy."
        rating={8}
      />
      <Review
        title="Rounders"
        text="Breezy meaningless film about high stakes poker with no stakes. Great Ed Norton performance. John Malkovich does a silly Russian accent. Gretchen Mol plays the Michael-Mann-girl type who tries to domesticate the man obsessed with his work."
        rating={7}
      />
      <Review
        title="American Gigolo"
        text="Not as good as other Schrader films (Taxi Driver, First Reformed, Hardcore, Blue Collar) but very stylish. I think you have to be into the fashion and glamour of a certain image of LA to appreciate."
        rating={7}
      />
      <Review
        title="Witness"
        text="Fun movie that forces Harrison Ford cop to live with the Amish. Could have done more with the fish out of water concept. The corrupt cops are idiots. [Spoiler] The final moment improves the movie because it evokes lost possibility for a life with the Amish woman, comparing lost love to going to a modern city away from the farm."
        rating={8}
      />
      <Review
        title="Silver Linings Playbook"
        text="I’m not sure how rom coms with their inevitable endings of the two coming together can ever have great endings. From the dance competition onwards, the film slightly drags. I like the montage of Sunday family gatherings at the end. I think of how the film stars likely do not have access and/or do not want “ordinary” suburban domesticity. I do not know suburban ordinary family life either."
        rating={8}
      />
      <Review
        title="The Quiet Girl"
        text="Irish film about neglected girl who experiences love for the first time when she spends a summer with childless family members. Ending is heartbreaking. Reminds of the time I didn’t want to go back home when I visited family in Florida."
        rating={8}
      />
      <Review
        title="Are You There God? It’s Me, Margaret"
        text="Cute. Slight. I like seeing a film from a child’s perspective. I believe children think they are the center of the universe, but I don’t think that Margaret is the center of the lives of the adults. I believe that the grandparents would continue arguing about whether she should be Jewish or Christian even after she stormed off."
        rating={6}
      />
      <Review
        title="The Holdovers"
        text="Slight. Unambitious. Good acting from the three main characters. "
        rating={7}
      />
      <Review
        title="Godzilla Minus One"
        text="I have not finished Jaws but reminds me of Jaws. Standard and well-done hero’s journey. This kind of blockbuster is just not that compelling to me. I wish the acting were naturalistic instead of stylized and melodramatic in a specifically Japanese way. Too psychologically simple?"
        rating={7}
      />
      <Review
        title="Clemency"
        text="Maybe one of the best performances I’ve ever seen."
        rating={9}
      />
      <Review
        title="The Usual Suspects"
        text="Very stylistic. Very plot driven. Amoral filmmaking. Just plot. Just clever twist. There’s a barely tertiary female character to give Gabriel Byrne some heart. Slick non-humanistic film making at it’s 90s finest."
        rating={9}
      />
      <Review
        title="Phantom Thread"
        text="A lot of appreciation hinges on the final “twist.” I’d have to rewatch to catch everything. I’m still not sure that I appreciate PTA. This is art. Feels like a smart short story. Maybe should be a short story. Not really a movie."
        rating={8}
      />
      <Review title="Triple Frontier" text="Meh" rating={5} />
      <Review
        title="The Age of Innocence"
        text="[Spoiler] Felt so bad watching DDL retain Michelle Pfeiffer as an idea of a life he gave up decades prior instead of doing the modern thing of taking up a second wife. Are other people ideas? Makes me regret wasting my own life. I feel like Saoirse Ronan would have been scarier and steelier in the Wynona Ryder part. Ryder should have been nominated for Girl Interrupted. Not for this."
        rating={9}
      />
      <Review
        title="Sea of Love"
        text="[Spoiler] Some imagery that is reminiscent of pegging (when the killer is assumed female) and gay sex (when it is revealed that the killer is a man. Erotic thriller. Stalking. Obsession. Cop falls for woman who seems to drive men to murder. Ellen Barkin believably/charmingly working class chick from New York."
        rating={7}
      />
      <Review
        title="Barfly"
        text="Best depiction of low life drunks I’ve seen so far. Interesting blend of high and low class – the two leads are both and neither."
        rating={8}
      />
      <Review
        title="Jaws"
        text="The jokes are cringe. The characters are line drawings. The doting wife bores and unnerves me (like she belonged in a Robert Altman movie and is trapped in a Spielberg movie; looks like Shelley Duvall). But the opening was solid. The scenes on the boat gripping. Perfect blockbuster with that lack of real humanity that permeates Spielberg films. I am slowly beginning to appreciate Spielberg despite how there’s very little of me that resonates with his instincts. He is the best director and I can’t help but be impressed."
        rating={8}
      />
      <Review
        title="Devil’s Advocate"
        text="Wish high concept original films like this were still made. Weird how Keanu Reeves can act his ass off in the screaming scene with Pacino and fumble in a scene with Charlize. When he is “bad,” I don’t really mind. Where are movie stars made? Horny filmmaker. Fully naked ladies."
        rating={9}
      />
      <Review
        title="Ocean’s 11"
        text="I watched this because SFennessy and ADobbins of The Big Picture podcast ranked this high among Soderbergh films. I think that Sex Lies and Videotape is the only Soderbergh film that does not seem artificial to me. He makes you pay attention to the construction of the film and the editing techniques and references he plays with. Beautiful scene of the guys looking at a water fountain at night and for a second it looks like day as Claire de Lune plays. Nice to see so many beautiful actors at the peak of their power as movie stars. The last generation of movie stars as we once knew them. I think that the hosts of The Big Picture have a much higher appreciation of MOVIES that are very white and divorced from reality than I do. The scene in which Bernie Mac pretends to play the race card in order to enable Matt Damon to play a bumbling white person and trick the casino owner was unfunny enough to be offensive. That white people find black people complaining inherently funny is the offense, I think. That it was a fake complaint makes it worse. Waste of Bernie Mac. RIP."
        rating={8}
      />
      <Review
        title="A Man for All Seasons"
        text="Smart historical movie based on play about Thomas More’s refusal to approve of Henry VIII’s divorce. Play is probably better at teasing apart notions of law, justice, principle, the king, pragmatism. Perfect but loses a point for lack of levity, stunning visuals and sex. "
        rating={9}
      />
      {/* <Review 
        title="" 
        text="" 
      />
      <Review 
        title="" 
        text="" 
      />
      <Review 
        title="" 
        text="" 
      /> */}
    </div>
  );
}

export default App;
