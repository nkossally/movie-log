import { useState, useRef } from "react";
import { Review } from "./components/Review";
import "./index.scss";
import classNames from "classnames";

function App() {
  const [showLinks, setShowLinks] = useState(false);

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);
  const ref8 = useRef(null);
  const ref9 = useRef(null);
  const ref10 = useRef(null);
  const ref11 = useRef(null);
  const ref12 = useRef(null);
  const ref13 = useRef(null);
  const ref14 = useRef(null);
  const ref15 = useRef(null);
  const ref16 = useRef(null);
  const ref17 = useRef(null);
  const ref18 = useRef(null);
  const ref19 = useRef(null);
  const ref20 = useRef(null);
  const ref21 = useRef(null);
  const ref22 = useRef(null);
  const ref23 = useRef(null);
  const ref24 = useRef(null);
  const ref25 = useRef(null);
  const ref26 = useRef(null);
  const ref27 = useRef(null);
  const ref28 = useRef(null);
  const ref29 = useRef(null);
  const ref30 = useRef(null);
  const ref31 = useRef(null);
  const ref32 = useRef(null);
  const ref33 = useRef(null);
  const ref34 = useRef(null);
  const ref35 = useRef(null);
  const ref36 = useRef(null);
  const ref37 = useRef(null);
  const ref38 = useRef(null);
  const ref39 = useRef(null);
  const ref40 = useRef(null);
  const ref41 = useRef(null);
  const ref42 = useRef(null);
  const ref43 = useRef(null);
  const ref44 = useRef(null);
  const ref45 = useRef(null);
  const ref46 = useRef(null);
  const ref47 = useRef(null);
  const ref48 = useRef(null);
  const ref49 = useRef(null);
  const ref50 = useRef(null);
  const ref51 = useRef(null);
  const ref52 = useRef(null);
  const ref53 = useRef(null);
  const ref54 = useRef(null);
  const ref55 = useRef(null);
  const ref56 = useRef(null);
  const ref57 = useRef(null);
  const ref58 = useRef(null);
  const ref59 = useRef(null);
  const ref60 = useRef(null);
  const ref61 = useRef(null);
  const ref62 = useRef(null);
  const ref63 = useRef(null);
  const ref64 = useRef(null);
  const ref65 = useRef(null);
  const ref66 = useRef(null);
  const ref67 = useRef(null);
  const ref68 = useRef(null);
  const ref69 = useRef(null);
  const ref70 = useRef(null);
  const ref71 = useRef(null);
  const ref72 = useRef(null);
  const ref73 = useRef(null);
  const ref74 = useRef(null);
  const ref75 = useRef(null);
  const ref76 = useRef(null);
  const ref77 = useRef(null);
  const ref78 = useRef(null);
  const ref79 = useRef(null);
  const ref80 = useRef(null);
  const ref81 = useRef(null);
  const ref82 = useRef(null);
  const ref83 = useRef(null);
  const ref84 = useRef(null);
  const ref85 = useRef(null);
  const ref86 = useRef(null);
  const ref87 = useRef(null);
  const ref88 = useRef(null);
  const ref89 = useRef(null);
  const ref90 = useRef(null);
  const ref91 = useRef(null);
  const ref92 = useRef(null);
  const ref93 = useRef(null);
  const ref94 = useRef(null);
  const ref95 = useRef(null);
  const ref96 = useRef(null);
  const ref97 = useRef(null);
  const ref98 = useRef(null);
  const ref99 = useRef(null);
  const ref100 = useRef(null);
  const ref101 = useRef(null);
  const ref102 = useRef(null);
  const ref103 = useRef(null);
  const ref104 = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const scrollRefIntoView = (ref) => {
    return () => {
      setTimeout(() => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
      }, 10);
    };
  };

  return (
    <div>
      <div className="top-row">
        <button className="toggle-show-links" onClick={toggleLinks}>
          {showLinks ? "Hide" : "Show"} Title Links{" "}
        </button>
      </div>

      {showLinks && (
        <div className="links-container">
          {/* <button className="title-link" onClick={scrollRefIntoView()}>
           
          </button> */}
          <button className="title-link" onClick={scrollRefIntoView(ref104)}>
           Red Eye
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref103)}>
           The Good Liar
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref102)}>
           Clueless
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref101)}>
           Ed Wood
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref100)}>
           A Simple Plan
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref99)}>
           Dune 2
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref98)}>
           Dune
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref97)}>
           Gladiator II
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref96)}>
           Face/Off
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref95)}>
           Come Back to the Five and Dime, Jimmy Dean, Jimmy Dean
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref94)}>
           A Real Pain
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref93)}>
           Apollo 13
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref92)}>
           The Long Kiss Goodnight
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref91)}>
           Unforgiven
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref90)}>
           Almost Famous
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref89)}>
           Queer
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref88)}>
           Juror # 2
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref87)}>
           Conclave
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref86)}>
           Husbands and Wives
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref85)}>
           My Cousin Vinny
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref84)}>
           Wicked
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref83)}>
           Scream VI
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref82)}>
           Emilia Perez
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref81)}>
           While You Were Sleeping
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref80)}>
           The Last Days of Disco
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref79)}>
           The Rainmaker
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref78)}>
           The Firm
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref77)}>
           Anora
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref76)}>
           The Post
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref75)}>
           Dick
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref74)}>
           Bachelorette
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref73)}>
           American President
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref72)}>
           Primary Colors
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref71)}>
            Rivals (TV)
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref70)}>
            Generation Kill (TV)
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref69)}>
            Fallout (TV)
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref68)}>
            Baby Reindeer (TV)
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref67)}>
            Shogun (TV)
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref66)}>
            Howards End
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref65)}>
            Strange Darling
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref64)}>
            Longlegs
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref63)}>
            Remains of the Day
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref62)}>
            Let Them All Talk
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref61)}>
            The Ref
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref60)}>
            Jerry Maguire
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref59)}>
            The Pelican Brief
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref58)}>
            Haywire
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref57)}>
            Bad Boys: Ride or Die
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref56)}>
            Lincoln Lawyer
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref55)}>
            The Knick Season 1
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref54)}>
            Ocean’s Twelve
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref53)}>
            Pride and Glory
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref52)}>
            The Bourne Ultimatum
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref51)}>
            The Three Faces of Eve
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref50)}>
            Silence
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref49)}>
            The Verdict
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref48)}>
            Shakespeare in Love
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref47)}>
            Hit Man
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref46)}>
            Elizabeth
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref45)}>
            Central Station
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref44)}>
            The Bourne Supremacy
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref43)}>
            The Bourne Identity
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref42)}>
            Superbad
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref41)}>
            The Batman
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref1)}>
            Reacher
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref2)}>
            Logan Lucky
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref3)}>
            Femme
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref4)}>
            I Care a Lot
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref5)}>
            Mission Impossible Dead Reckoning
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref6)}>
            Fabulous Baker Boys
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref7)}>
            Death Becomes Her
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref8)}>
            The Challengers
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref9)}>
            Devil Wears Prada
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref10)}>
            eXistenZ
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref11)}>
            Constantine
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref12)}>
            Dewey Cox
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref13)}>
            Last Duel
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref14)}>
            Before the Devil Knows Your Dead
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref15)}>
            Eastern Promises
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref16)}>
            Dredd
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref17)}>
            Civil War
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref18)}>
            Speed
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref19)}>
            Talented Mr. Ripley
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref20)}>
            Videodrome
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref21)}>
            Southland Tales
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref22)}>
            Miss Congeniality
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref23)}>
            Rounders
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref24)}>
            American Gigolo
          </button>
          {/* <button className="title-link" onClick={scrollRefIntoView(ref25)}>
            Witness
          </button> */}
          {/* <button className="title-link" onClick={scrollRefIntoView(ref26)}>
            Silver Linings Playbook
          </button> */}
          <button className="title-link" onClick={scrollRefIntoView(ref27)}>
            The Quiet Girl
          </button>
          {/* <button className="title-link" onClick={scrollRefIntoView(ref28)}>
            Are You There God? It’s Me, Margaret
          </button> */}
          <button className="title-link" onClick={scrollRefIntoView(ref29)}>
            The Holdovers
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref30)}>
            Godzilla Minus One
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref31)}>
            Clemency
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref32)}>
            The Usual Suspects
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref33)}>
            Phantom Thread
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref34)}>
            Triple Frontier
          </button>
          {/* <button className="title-link" onClick={scrollRefIntoView(ref35)}>
            The Age of Innocence
          </button> */}
          {/* <button className="title-link" onClick={scrollRefIntoView(ref36)}>
            Sea of Love
          </button> */}
          <button className="title-link" onClick={scrollRefIntoView(ref37)}>
            Barfly
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref38)}>
            Jaws
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref39)}>
            Devil’s Advocate
          </button>
          <button className="title-link" onClick={scrollRefIntoView(ref40)}>
            Ocean’s 11
          </button>
          {/* <button className="title-link" onClick={scrollRefIntoView(ref40)}>
            A Man for All Seasons
          </button> */}
        </div>
      )}

      <div
        className={classNames(
          "container",
          !showLinks && "container-margin-top"
        )}
      >
      {/* <Review 
        title="" 
        director=""
        ref={}
        date=""
        releaseDate=""
        text="" 
        text2=""
        text3=""
        theater=""
        rating={}
      />  */}
      <Review 
        title="Red Eye" 
        director="Wes Craven"
        ref={ref104}
        date="12/30/2024"
        releaseDate="2005"
        text="Solid, brisk, boilerplate thriller about Cillian Murphy torturing Rachel McAdams on a plane. This Bush Era film contains explicit propaganda in favor of the War on Terror, and does what a lot of media did back then: sidestep race by making the terrorist a blue-eyed Cillian Murphy. In the early 2000s, when I was a more militant leftist, I would have rejected this movie on political grounds. Today, I am charmed by this movie, and even the propaganda of the War on Terror era seems charming compared to the more nihilistic culture and polarized political culture of the present. Also, very young fresh-faced McAdams and Murphy play to nostalgia." 
        text2=""
        text3=""
        theater=""
        rating={7}
      /> 
      <Review 
        title="The Good Liar" 
        director="Bill Condon"
        ref={ref103}
        date="12/30/2024"
        releaseDate="2019"
        text="Solid film about conman Ian McKellen romancing Helen Mirren in order to steal her money. There is a twist that is somewhat predictable, but there is another deeper twist with historical implications that make this movie surprisingly meaningful. You can tell this is a book adaptation by the flurry of ideas that arrive by the third act. The movie opens with a question about how to date in one’s advanced years, and closes with observations about how British people see and misinterpret their elders who lived through World War II. Great work! On the downside, fear of aging is challenged a bit, but ultimately encouraged by this film. Family is reinforced. Family redeems having to age. And lifelong single men like Ian McKellen are, of course, sociopaths." 
        text2=""
        text3=""
        theater=""
        rating={7}
      /> 
      <Review 
        title="Clueless" 
        director="Amy Heckerling"
        ref={ref102}
        date="12/27/2024"
        releaseDate="1995"
        text="Charming, witty, nearly perfect teen movie about the small problems of rich girl Alicia Silverstone at her high school in Beverly Hills. The movie is based on Jane Austen’s Emma. Alicia, like Emma, is a conceited but well-meaning innocent who decides to help people as a new way to be conceited, and makes a series of social mistakes while attempting to be magnanimous. Silverstone’s mishaps include giving bad dating advice to the new girl in school, misreading signs of affection from boys, failing her driver’s test and dating a gay guy. One of the charms of the movie, and possibly one of the flaws, is it feels episodic. It could have been three episodes of television, which is probably why this movie was made into a television show." 
        text2="Side-notes: This movie is a time capsule and endless source of cultural references. 1) Alicia Silverstone remarks on how Marky Mark is only known for taking his pants off. Times have really changed for Mark Wahlberg. 2) Alicia Silverstone hilariously says “I object” in class in a non-litigation context. I think Legally Blonde stole this joke. 3) Silverstone refers to money as ducats. One of the hosts of the podcast The Read does this, and I suspect he watched Clueless. 4) The movie also has a 90’s minstrel show with the character played by Donald Faison. The film tries to rescue this when Faison eloquently argues about the validity of Ebonics as a language. The joke works. And besides, everyone was more openly racist in the 90’s, and that’s charming to me now for some reason."
        text3=""
        theater=""
        rating={9}
      /> 
      <Review 
        title="Ed Wood" 
        director="Tim Burton"
        ref={ref101}
        date="12/27/2024"
        releaseDate="1994"
        text="I remember recoiling from this film when my family watched it on tv or DVD when I was a kid. The film’s cast of social misfits and its queer content frightened me because I was closeted then. I was enamored with the escapism of Hollywood and repulsed by depictions of failure. Now that I am in my thirties, I see that this is possibly one of the best films ever made. It celebrates cinema by, yes, poking fun at, but also humanizing one of cinema’s worst, yet most earnest pseudo artists: Ed Wood." 
        text2="This film has a specific role, I think, in queer cinema because of its discussion of failure. Ed Wood, himself, was not queer, but he was a cross dresser who associated with queers, lowlifes and drug addicts. A lot of the jokes in the movie are jokes about the queers and has-beens that surround Ed Wood, but the jokes are in good fun. Sanitized portraits of queerness, like Will and Grace, present queerness as clean, successful and upwardly mobile. But the outsider status or queers (in the 20th century, before queerness became mainstream) is more associated with failure than success. Failure to approximate the glamour and heteronormativity of Hollywood. This film celebrates Ed Wood’s determination to realize his vision despite adversity. He can never get approval from a major studio, so he makes B-movies on shoestring budgets. Similarly, queers have historically been enamored with mainstream Hollywood images, while constructing alternative lifestyles outside of the mainstream."
        text3="Side-note: This is one of the better performances by Johnny Depp. His acting here is effective and hacky. He found a few tricks to do and repeats them throughout the film to comedic affect. Depp is a hacky actor."
        theater=""
        rating={10}
      /> 
      <Review 
        title="A Simple Plan" 
        director="Sam Raimi"
        ref={ref100}
        date="12/27/2024"
        releaseDate="1998"
        text="Decent movie about ordinary people attempting to commit a major crime and stumbling at every turn. Reminiscent of Fargo, but not as biting and not as good. Worth the watch." 
        text2="Side note: Bridget Fonda disappeared from the movies after the 90s. She’s one of the hapless small-time criminals here."
        text3=""
        theater=""
        rating={7}
      /> 
      <Review 
        title="Dune 2" 
        director="Denis Villeneuve"
        ref={ref99}
        date="12/24/2024"
        releaseDate="2024"
        text="Much better than the prequel because it tells a complete story. In Dune, Timothée Chalamet was a cypher. In Dune 2, he becomes a character with a personality and an arc. The problem with planning sequels is many movies are incomplete. Dune was incomplete. This one is complete. Still, as much as I appreciate Chalamet’s arc, there is a flaw in it. After more than five hours of runtime between the two movies, it is unclear how or why Chalamet transforms from being ambivalent about his royal status to ruthlessly seeking power by means of violence and manipulation. In the blink of an eye, he becomes a sociopath. I think this is because the storytelling of Dune is plot driven, not character driven. The plot demanded that Chalamet change, so he did. I prefer character over plot, personally, but the plot here is very good. Watching various characters contend for power is interesting. It took two movies, but I finally understand Dune/Dune 2. It’s a sci-fi palace intrigue story. Game of Thrones in space." 
        text2=""
        text3=""
        theater=""
        rating={7}
      /> 
      <Review 
        title="Dune" 
        director="Denis Villeneuve"
        ref={ref98}
        date="12/23/2024"
        releaseDate="2021"
        text="I don’t have inside whatever is required to really like this movie. Denis Villeneuve’s approach to sci fi is self-serious, brooding, humorless and sexless. This is not a fun movie on purpose. But it looks good. The actors are beautiful. The CGI is great. The shots are very nice individually. But the shots last too long sometimes. I prefer Dune’s meditative style of film-making in a small indie like Nomadland. For sci-fi, I like moving cameras, stylization over realism, and a sense of humor. There’s a disconnect between the heaviness of this film and the adult actors LARPing in silly costumes with toy swords." 
        text2="Sci fi products tend to use fake science and an imagined world to say something about the world we live in. Dune does not do that in a way that pleases any “woke” person. The bad guy is fat and probably not straight. This is out of step with the now over body positivity “movement.” There’s a white savior narrative. There’s imperialism in the film, without any real critique of imperialism. There’s a bad emperor who merely needs to be replaced with a good one is all. Timothée Chalamet’s power comes from careful mixing of bloodlines. Enough said. Also, Chalamet has an innate understanding of the culture of the colonized “sand people,” kind of like how some white people “go native.” The “sand people,” who appear to be Middle Eastern and black, are one with nature, like how Native Americans are supposed to be. Any attempt to extract political or social meanings from this film leads to trouble, so you may as well not. "
        text3="I don’t think this film is supposed to be interpreted. It does not have intellectual ambition. It’s just a hero’s journey set in some remote place in space and time that doesn’t do anything except look nice and excite you, if, that is, the film excites you. While everything is beautiful, nothing is iconic. This movie made a lot of money, but I don’t think it matters."
        theater=""
        rating={5}
      /> 
      <Review 
        title="Gladiator II" 
        director="Ridley Scott"
        ref={ref97}
        date="12/23/2024"
        releaseDate="2024"
        text="Critics have not been too kind to this film as an over-correction of the many Oscars the first installment won. The first movie probably paved the way for better products like Rome and Game of Thrones (Olden times are olden times. Fantasy or not, it’s just men in costumes with swords). We’ve seen it done better so Gladiator II disappoints if you expect high art. There are problems. The CGI animals are a downer, some of the actors don’t seem to have a handle of their characters, the plot is sloppy, and Paul Mescal’s hero’s journey does not make sense on a character level. But, as an unserious movie, it succeeds. It’s a mostly handsome looking movie and Denzel Washington is fun. It’s a good bad movie. So was the first one."
        text2="Side note: A feature of Ridley Scott’s historical epics is he does not care about history. Paul Mescal’s character is vaguely motivated by some concept of democracy that may be more modern and American than ancient and Roman. Also, the characters talk about Rome and acculturation as if Rome were a modern nation state with a unifying national culture. A movie with CGI killer monkeys is not going to tease apart the difference between ancient empire and modern nation."
        text3=""
        theater=""
        rating={6}
      /> 
      <Review 
        title="Face/Off" 
        director="John Woo"
        ref={ref96}
        date="11/22/2024"
        releaseDate="1997"
        text="Fascinating and peculiar high concept action film with sci fi elements. FBI agent John Travolta goes undercover by surgically stealing the face of comatose terrorist Nicolas Cage, only to get the tables turned when Cage wakes up and steals Travolta’s face. The film prepares you for how unserious it is with it's opening scene. Cage huddles in some bushes somewhere, aiming his gun at Travolta, who is riding a carousel with his small son at a carnival. At first, it seems that Cage lowers his gun because of the presence of the small boy. Turns out that Cage paused to take a sip of soda before firing, injuring Travolta and killing the boy. As in many Hollywood films, trauma is just plot. This highly stylized scene on the carousel is played for laughs. After an injured Travolta and his son fall off the plastic carousel horse in slow motion, the camera rests on the horse for a second, and it neighs. Does every hardened movie cop need a loved one to die within the first five minutes of a movie in order to establish character motivation? Maybe. Can an inanimate blood-spattered carousel horse say neigh? TBD."
        text2="There are not that many concepts in this high concept movie. Does the film use visual language to explore any of the psychological and philosophical implications of changing identity a la Ingmar Bergman’s 1966 film Persona? No. Does the film explore the nature of trauma? In a bizarre way, sort of. When he and his son were shot, Travolta acquired a bruise on his chest that symbolizes grief. When he first transforms into Nicolas Cage, Travolta asks the plastic surgeon to duplicate the bruise. [Spoilers] At the end of the movie, when Travolta gets yet more plastic surgery to restore his old face, he has the bruise removed, because he's healed now that the movie is over. Also, at the end of the movie, after killing Cage, Travolta adopts Cage’s son, who looks exactly like the boy Nicolas Cage killed. So, is this film saying that trauma can be overcome with violence, murder, theft and replacing one kid with a new one? Not really. That meaning comes from interpreting the things that happened in this movie, and that’s not what you’re supposed to do. You already understand what happens in this movie before watching it because it’s the same as happens in every movie. Bad guy threatens nuclear family. Bad guy dies. Good guy wins. Family restored. There’s really no room for discussion of trauma within that template, even if the entire plot is about trauma."
        text3="This film may be stupid but it’s not shallow. Director John Woo is good at stuff I am not good at writing about. The sights and sounds are great and timeless. In addition, I think all movies, even good bad movies, are metaphors for something. I think Face/Off, like many movies of the 90s, is a metaphor for infinite potential. You can do anything in the movies, even take someone’s face, as long as you have the resources of the FBI and cutting-edge modern science. In the 90’s, white men could do anything. Everything was possible back then for them. In the movies."
        text4=""
        theater=""
        rating={9}
      /> 
      <Review 
        title="Come Back to the Five and Dime, Jimmy Dean, Jimmy Dean" 
        director="Robert Altman"
        ref={ref95}
        date="11/20/2024"
        releaseDate=""
        text="Visually compelling  tale of traumatized women in James Dean fan club in small town Texas. Adapted from a play and seems like it." 
        text2=""
        text3=""
        theater=""
        rating={7}
      /> 
      <Review 
        title="A Real Pain" 
        director="Jesse Eisenberg"
        ref={ref94}
        date="11/19/2024"
        releaseDate="2024"
        text="Sad and boring." 
        text2=""
        text3=""
        theater="Village East By Angelika"
        rating={3}
      /> 
      <Review 
        title="Apollo 13" 
        director="Ron Howard"
        ref={ref93}
        date="12/14/2024"
        releaseDate="1995"
        text="Celebrated docudrama about a 1970 mission to the Moon in which an explosion happens on the spacecraft. “Christopher Columbus, Charles Lindbergh and Neil Armstrong,” says dreamy eyed astronaut Tom Hanks staring off at the moon from his suburban lawn. He refers to the history of Western imperialism, culminating in America’s attempted colonization of the Moon before Communist Russia could get to it. Despite appearances, I try to appreciate films as they are, regardless of politics, but perhaps politics are unavoidable. Perhaps it is political to appreciate this movie. I think the watcher must bring knowledge of, if not belief in, certain images of American empire in order to appreciate this movie. Imperial iconography includes space travel as the final frontier, the awesome and intimidatingly massive institutions of NASA, the wife and kids waiting for dad to come back to their suburban home, and space filled only with white people. Some of the shots are nice and technically accomplished, but the ideas are so specifically American that I wonder if the appeal is limited to Americans who believe in America and the sanctity of the nuclear suburban family and the excitement of an imagined frontier. Movies make magic when there is a confluence of image and idea. If this film were as beautiful as Alfonso Cuarón’s Gravity, maybe the ideas would be more palatable. The ideas alone are not romantic to me, especially because the culture has turned the idea of space travel into a frontier for billionaires once they are done gobbling up planet Earth. Politics aside, good enough movie, I suppose."
        text2="Side note: “Houston, we have a problem” originates from this historical event."
        text3=""
        theater=""
        rating={6}
      /> 
      <Review 
        title="The Long Kiss Goodnight" 
        director="Renny Harlin"
        ref={ref92}
        date="12/13/2024"
        releaseDate="1996"
        text="Deeply unserious film about an amnesiac (Geena Davis) who does not recall anything that happened to her more than eight years ago. A confusing plot happens and Davis recovers her lost identity and discovers a deep state conspiracy. The arc of the plot is clear, but the basic logic of cause and effect from one scene to the next is lost on me. I don’t really know what happened in the movie I just watched. I am so confused that I don’t know what questions to ask. I’d have to watch this movie many times to understand how stupid it is. Some story elements are secret agents, guns, water torture, casual sexual harassment, terrible wigs, many jokes about prison anal rape, horrid 90s saxophone synth, and Geena Davis racing a car on ice skates and winning despite being visibly slower and on ice skates. Academy award winner Geena Davis gives a committed performance and Samuel L. Jackson gives a Samuel L. Jackson performance. This film has a libido and shows Geena Davis in wifebeaters, in underwear and in the shower. Even Samuel L. Jackson gets a nude scene somebody asked for. I’m not complaining. During the climax when the villain explains that the whole plot hinges on the C.I.A. plotting terrorist attacks in order to force Congress to increase the security budget, I was afraid this 90s paranoia about the security state stood some danger of making this movie smarter. Don’t worry. It doesn’t. This movie couldn’t be stupider. Perfect 90s crap."
        text2=""
        text3=""
        theater=""
        rating={10}
      /> 
      <Review 
        title="Unforgiven" 
        director="Clint Eastwood"
        ref={ref91}
        date="12/12/2024"
        releaseDate="1992"
        text="Clint Eastwood western about assassin (Eastwood) hired by prostitutes to murder a cowboy who brutalized and permanently scarred the face of one of the women while she provided services. Solid, well-paced, efficient, straightforward, classic American filmmaking at its finest. The morals are clear. The bad men are bad (Gene Hackman). The good men are good (Morgan Freeman). Some men are in-between. Eastwood is a reformed bad man turned good by his now dead wife, turned semi-bad again when he is pulled from retirement by a $1000 bounty. Film portrays Eastwood and his rival Gene Hackman as exceptional men of the west who lived close to death because they do not fear guns. Most men are cowards, of course. In addition to gun-ness and Western-ness, film doubles down on American-ness when Gene Hackman humiliates and brutalizes an English assassin named English Bob, and chastises Bob about celebrating the Queen on Independence Day. Clint Eastwood is an American. And a man. Says the movie." 
        text2="The gender politics are straightforward and predictable. Clint Eastwood is a man, therefore a killer, but he is good because a good woman loved him, and because the gentle wise sex worker who got knifed seems to fall for him, and because he does not have sex with the sex worker out of respect for his dead wife, who was at least three decades younger than Eastwood based on her tombstone (died at 29: God forbid she turn 30). Morgan Freeman’s “Injun” wife is silent and stern as she watches her man ride off into the distance. She says absolutely nothing. She is a good woman. The red headed sex worker who placed the bounty (Frances Fisher) is bad because she demands the disproportionate punishment of many men dying on behalf of her coworker. Fisher is perhaps Eastwood’s counterclaim against the ravages of feminism. Or a plot device to demonstrate what men do on behalf of women. Remember the days when men were men? And women were prostitutes."
        text3="As easy to critique the politics as to enjoy. This is very good film. Only flaw is ending. [Spoiler] A better ending has Eastwood killed. Instead, Eastwood lives and runs off to San Francisco to run a prosperous dry goods store. Anglo-American Dream. All of the sins and blood of the past washed off, dirty money converted into legitimate business. A better ending would not suggest there is something redemptive about violence."
        text4="Side note: bad guys exist so that audiences can revel in dark desires without shame. The camera shows a woman get beat by a bad guy. The camera shows a black man get whipped by a bad guy. The camera shows it. We watch it. And are good."
        theater=""
        rating={9}
      /> 
      <Review 
        title="Almost Famous" 
        director="Cameron Crowe"
        ref={ref90}
        date="12/09/2024"
        releaseDate="2000"
        text="Romantic coming of age tale about 15-year-old aspiring music journalist who travels with band to write cover story for Rolling Stone Magazine. Very implausible. Recognizable Cameron Crowe gloss of unreality. Band is quirky, instead of abusive. Bandmember’s philandering with sixteen-year-old played as sexy and cute. Everyone is adorable. The main character who kisses a passed-out girl on booze and Quaaludes just before her stomach gets pumped, is adorable. Some very clever lines. Crowe once again invented a memorable cliché. “It’s all happening” originates here."
        text2="I cannot fully shed my pessimism and give in to the white adorability of this too cute movie, but, obliterating my subjectivity, this is a very good vibes film I almost vibe with."
        text3=""
        theater=""
        rating={8}
      /> 
      <Review 
        title="Queer" 
        director="Luca Guadagnino"
        ref={ref89}
        date="12/08/2024"
        releaseDate="2024"
        text="Written by Justin Kuritzkes and based on novella by William S. Burroughs, but true author is director Luca Guadagnino. About middle aged white expat drug addict Daniel Craig haunting streets of Mexico City, looking for brown and white twinks to bed who may or may not be queer and may or may not be sex workers. He always pays them. Craig, of course, uses brown boy Omar Apollo for sex, but falls in deep obsession and lust with white boy Drew Starkey."
        text2="Film is vague about whether Starkey has any affection for Craig. Perhaps Starkey is using Craig. Perhaps Starkey enjoys sleeping with Craig. Starkey always barely consents. He says, “alright,” and then politely grins. He has no personality. Starkey is empty. An idea to Daniel Craig. Daniel Craig never asks Drew Starkey any questions about his hopes and dreams because old letches require young people remain empty objects of lust on which to project their own ideas."
        text3="Film succeeds if you are interested in a community of feckless queer expats who have nothing in particular to do except chase boys. I appreciated the gay mannerisms of Craig’s sissy friends. Less appreciated their accounts of sex tourism. At times I felt compassion for middle aged gay men who do not seem to have access to loving relationships and are each plagued by some aspect of queerness, or the oppression of queers. Compassion evaporated during epilogue when old and dying Daniel Craig’s last thought is a memory of spooning a semi sex worker. I blame Daniel Craig for leading a life in which that was his greatest moment of intimacy. I blame Guadagnino for romanticizing this."
        text4="“Come as You Are” by Nirvana plays as camera zooms in on Drew Starkey the first time Craig sees hm. Reminiscent of much parodied scene of Can’t Hardly Wait when everyone at party stops to notice that Jennifer Love Hewitt entered the room. Analogous scene here is equally absurd Caucasian nonsense. I have suspected that there may be no underlying philosophy or meaning to Guadagnino’s flair for visual art, just libido. This film all but confirms that."
        theater="Alamo Drafthouse, 28 Liberty Street, New York, New York"
        rating={4}
      /> 
      <Review 
        title="Juror #2" 
        director="Clint Eastwood"
        ref={ref88}
        date="12/07/24"
        releaseDate="2024"
        text="Straightforward mostly linear high concept legal thriller about juror who guilty of crime he assigned to reach verdict on. Feels like a 90s film so breath of fresh air. Efficient. No bloat. Clint Eastwood’s bare bones directing has less flair than an episode of Succession. Perfectly good movie seemingly from past when movies were movies."
        text2=""
        rating={7}
      /> 
      <Review 
        title="Conclave" 
        director="Edward Berger"
        ref={ref87}
        date="12/07/24"
        releaseDate="2024"
        text="Palace intrigue story about the election of new pope. Liberal cardinals (pro-diversity, pro-women) vs conservatives (anti-black, xenophobic Italians). Straightforward. Fewer twists and turns than expected. Perfectly digestible. In past would rail against unchallenging liberal narratives, but given election of Trump maybe this needed." 
        text2=""
        rating={6}
      /> 
      <Review 
        title="Husbands and Wives" 
        director="Woody Allen"
        ref={ref86}
        date="11/29/24"
        releaseDate="1992"
        text="This was Woody Allen’s last decent movie (I don’t like Match Point. I don’t like Blue Jasmine. I don’t like Midnight In Paris. Etc). It’s supposed to be about two married couples that experience relationship issues, but it’s really about Woody Allen, who started publicly dating the adopted daughter of his partner Mia Farrow when this movie was released. This film explores Allen’s perversities indirectly. In the movie, his wife, played by Mia Farrow, is passive aggressive and the most unlikeable of the ensemble. Farrow is the one who cheats emotionally and pushes Allen away. In the movie, a young student of Allen, Juliette Lewis, is sexually aggressive and attempts to seduce Allen, and Allen declines. Allen’s perversities and actions in reality are displaced onto women in the film. Allen’s flair for writing confessional, intimate, funny, intellectual-seeming screenplays is apparent here, but so is his solipsism. None of the characters say or do anything that seems loving. They are all mean, petty and self-centered. They are all Woody Allen, I think. Characters that love themselves, maybe, and ideas, perhaps, but not other people. Allen casts himself once again as the guy at the center of the film who is overlooked and abandoned by the end. In reality, Allen got what he wanted. He married a child and had nothing left to express as an artist. He never wrote another good film." 
        text2="There’s one good scene in which Juliette Lewis’s character critiques how Woody Allen’s character reductively writes women. In reality, Allen was good at writing women and bad at writing men. Allen was willing to write about women’s flaws. The men in this film, however, are victims of their sexual desires they cannot control. Victims of women and girls."
        text3="Watched this to see if Judy Davis deserved the Oscar over Marisa Tomei. Judy Davis is maybe slightly better here than Tomei in My Cousin Vinny, but only slightly, and not enough to make Tomei’s win as controversial as it was. Actresses can do something as minor as win Oscars while being second best to be controversial. Meanwhile, Allen married his daughter."
        rating={7}
      /> 
      <Review 
        title="My Cousin Vinny" 
        director="Jonathan Lynn"
        ref={ref85}
        date="11/27/24"
        releaseDate="1992"
        text="Pleasing, unchallenging court procedural as comedy (instead of as thriller; John Grisham). Was on television a lot in the 90s. Feels more like tv than film. Standard 90s elements: multiple extended jokes about prison rape, casual jokes about death penalty, terrible score. Marisa Tomei plays the girl who just wants to be a support to her man and get married. Tomei becomes an unexpected expert witness at climax of the film. Her New York (Staten Island Italian?) accent and classlessness supposed to make her expertise in cars palatable and winning. No idea what she was talking about when she testified car technicals. Seemed like Gandalf waving a wand. Magic. Everything ends well and there were never any stakes, even though two kids were falsely accused of murder in Alabama. Everything cute."
        text2="Tomei maligned for years after winning Oscar for this role. Tomei deserved to win over Vanessa Redgrave and Miranda Richardson. Have to check out Judy Davis in Husbands and Wives, who was the critical darling of 1992 Supporting Actress race."
        rating={5}
      /> 
      <Review 
        title="Wicked" 
        director="Jon M. Chu"
        ref={ref84}
        date="11/27/20"
        releaseDate="2024"
        text="Saw this on the far right of the front row of a packed theater opening weekend and really liked it. Ariana Grande is great and silly and over the top and Cynthia Erivo is even greater because of restraint. Interesting world building. World is raceless. Oppression of animals. Tyrant constructing enemy in order to form state. Reminds of Nazi philosopher who wrote about construction of state enemies (Carl Schmitt?). I would love this if I were a child. As an adult, I can appreciate deeper themes (how elite institutions invite oppressed people just to exploit them; Michelle Yeoh & Erivo), and I can appreciate that my inner child would appreciate this movie. Singing is amazing. Cameo of Kristin Chenoweth great. Wish visuals more iconic." 
        text2=""
        rating={9}
      /> 
      <Review 
        title="Scream VI" 
        director="Matt Bettinelli-Olpin, Tyler Gillett"
        ref={ref83}
        date="11/25/20"
        releaseDate="2023"
        text="Watched Scream V and VI on laptop in quick succession while coding, so this is a “review” of both. Even if hadn’t watched both at same time, hard tell difference. VI is a little better, I guess. Either you are bought in to this artificial world of attractive nerds who are hyper literate in horror film language and surrounded by serial killers who want to re-enact murders from a horror film franchise within the franchise or not. I’m bought in." 
        text2="Scream V and Scream VI are worse than Scream IV. Wes Craven’s loss is felt. RIP. V and VI seem more artificial because the physical world (the trains of New York City) are realistic. The artificiality of the first more suburban Scream films works. The clunky language. The goofy killer. Something’s wrong with the newer filmmaking. Something uncanny. Something mismatched. Maybe brighter colors are needed. A stronger departure from realism."
        text3="This new era came to an end already because the two leads were fired from upcoming Scream 7 because they voiced solidarity with Palestine. The franchise lives on. The franchise about killing teens is squeamish about genocide."
        rating={5}
      /> 
      <Review 
        title="Emilia Perez" 
        director="Jacques Audiard"
        ref={ref82}
        date="11/18/24"
        releaseDate="2024"
        text="Musical about lawyer entangled in world of trans Mexican cartel leader. Artfully directed. Not great songs that are more talky than singy. Subjects include trans identity, mass killings and atonement, but these subjects are setting and props. Film is interesting aesthetic experiment unlike films I’ve seen before, but all aesthetics. Any analysis of the trans cartel leader and concept of atonement puts morality of film in question because this is an amoral film pretending to be about something, but it’s not. It’s an empty pretty telenovela." 
        text2=""
        rating={7}
      /> 
      <Review 
        title="While You Were Sleeping" 
        director="Jon Turteltaub"
        ref={ref81}
        date="11/16/24"
        releaseDate="1995"
        text="Classic 90s rom com that reran on tv a lot in the 90s that I never really saw. Sandra Bullock is single, childless, parentless. Stranger she is infatuated with has coma and, after classic rom com miscommunications and misunderstandings, she pretends to be fiancé of comatose man to his family. Delivers exactly what expected: charm and no real stakes. Even when Bullock rescues coma man from train tracks, soundtrack lets you know there no danger and everything going to work out. Some 90s cheese. Bullock is in love with snow globes because they “contain the whole world.” Romanticism glosses over not nice that Bullock lied to a family for weeks, but this far less sociopathic than later rom coms like How to Lose a Guy in Ten Days. This film’s cuteness seems earnest, sorta. Plausible that a lonely woman would fall in love quickly because of idea of joining a loving family, but there’s something wrong with that and film uninterested in psychological complexity. Charming movie. Would just be released on a streamer these days."
        text2="Side-note: The guy Bullock falls in love with loves making furniture and quits his job to make furniture full-time. Classic! (Ryan Gosling in the Notebook; Channing Tatum in Magic Mike)"
        rating={5}
      /> 
        <Review 
        title="The Last Days of Disco" 
        director="Whit Stillman"
        ref={ref80}
        date="1998"
        releaseDate="2024"
        text="Pleased to say this is a new top ten. Perfect movie I make worse by writing about it. Saw this as a teen when too young to appreciate because was younger than characters depicted. Watching baby faced Chloe Sevigny and Kate Beckinsale in my 30s, I love it. Depicts Chloe Sevigny and her yuppie social circle exploring the Disco scene of New York in the late 70s. Very lived-in movie that, I imagine, accurately depicts Harvard grads who yuppified Disco and New York, based on clubbing experiences of writer-director. Sympathetic and critical of yuppies. Passing of an era in the lives of the young characters compared to the end of Disco. In one scene, characters have a discussion of The Lady and the Tramp that is predictive of how the love story in the movie ends (reminiscent of how, in Adaptation, Nicolas Cage says that stupid movies end with gun fight and murder, which is how Adaptation ends)." 
        text2=""
        rating={10}
      /> 
      <Review 
        title="The Rainmaker" 
        director="Francis Ford Coppola"
        ref={ref79}
        date="11/09/24"
        releaseDate="1997"
        text="Another John Grisham adaptation also set in Memphis, like The Firm. Has hallmarks of legal thrillers: corrupt incompetent lawyers working for the evil corporation, underfinanced idealist lawyer working for the little guy, deep voiced promiscuous woman whose sexual past makes her testimony inadmissible. Matt Damon is working-class recent law school grad trained in ambulance chasing by Danny DeVito. He pretty much becomes social worker for ordinary folk of Memphis. Film explicitly narrates thesis that most lawyers are scum but some idealistic lawyers protect the rights of the powerless. Gamesmanship of lawyers representing corporations vs lawyers representing ordinary folk is endless fodder for legal procedurals and belief in the American system of arcane legalese. Just like how The Firm posits that idealistic Tom Cruise could become jaded Gene Hackman if he compromises his morals/the law one too many times, Rainmaker suggests Matt Damon could become corrupt John Voight. The Marxist in me argues this sidesteps structural critique/institutional analysis, but that Marxist is pretty annoying. Did not make that much money. One of my least favorite John Grishams. Too obvious. Still very watchable 90s film."
        text2=""
        rating={6}
      /> 
      <Review 
        title="The Firm" 
        director="Sydney Pollack"
        ref={ref78}
        date="11/07/24"
        releaseDate="1993"
        text="Took years to get to this one since it combines three things I hate – sports, capitalism, and little guy who succeeds against big business. Watchable and pleasant if you let yourself watch a rom com/sports story sandwich. Tom Cruise is Jerry Maguire sports agent who has moral crisis and writes manifesto about having less clients and making less money. Vague act of petulant moralizing in corporate setting gets him fired, and Renee Zellweger follows broke Tom Cruise to independent company despite being single mother. [Spoiler] Cruise’s business succeeds, his romantic life blossoms and he gets a kid (Renee’s) for free."
        text2="Very good performance from Cruise. Scenes in which he is charismatic predict his later reputation for manic cult leader energy. His acting style is specific and a little weird: manic and earnest and honest and dishonest at the same time. Sometimes he seems like he’s acting against Cuba Gooding Jr. Sometimes he seems like he is acting against ideas in his head even when giving eye contact to Cuba. Cruise’s unique acting style works well here and in most of his films."
        text3="Signature Cameron Crowe insidious cuteness. Underlayer of liberal 90s “cute” racism. College educated Regina King suddenly becomes violent and ghetto in her final scene. Gooding Jr. gives Cruise permission to say things like “show me the money” and “shoplift the pootie.” Lots of 90s cheesy lines. “You complete me” and “you had me at hello” come from here. Movie earnestly wants to promote love and optimism. But the cynicism of the world is smoothed over with jokes and cheesiness. Adult workspaces seem naïve and childish in the movies."
        text4="Politics not good. Many scenes of single middle aged women’s group where they say reasonable things about valuing female friendship played for laughs. Women need Tom Cruise, who interrupts a feminist lady-gathering to demand that Zellweger take him back. She broke up with him because they couldn’t articulate why they loved each other. They get back together because he finally articulates that he wants a family to talk to at night after achieving professional success (Cuba Gooding Jr. scores a touchdown so Cruise ready for family). This is good enough for Zellweger. Contradiction of celebrating “small business” in a major film starring bankable Tom Cruise is so glaring that hardly worth mentioning. Acoustic guitar and soundtrack melt one scene into another. Music video vibe of director Cameron Crowe.  This is what 90s optimism looked like, compared to the 90s pessimism of Reality Bites or The Simpsons."
        rating={9}
      /> 
      <Review 
        title="Anora" 
        director="Sean Baker"
        ref={ref77}
        date="11/03/24"
        releaseDate="2024"
        text="Saw this with brother couple weeks ago with mostly older audience at fancy Lincoln Center. In restroom after movie ended, waiting in line to piss, a very nice short elderly man told me he would be as tall as me in his next life. I love being charmed and being charming. Sometimes being tall is enough to charm folks." 
        text2="I missed the apparently very good beginning (according to bro) so maybe my opinion will change. Film about sex worker who is drawn into world of son of Russian billionaire. Has Sean Baker elements: working class struggle, sex workers, shot on location(s) (I think), naturalistic dialogue. Made use of non-diegetic (yeah! I took a film studies class for two weeks before dropping out) pop music, which is new to Baker, I think. I think non-diegetic pop music is naturalistic at this point, given how much pop is ingrained in the lives of people and given the characters depicted."
        text3="Very good film that is getting more praise and Oscar buzz than Baker’s previous films. I don’t think this is better than other Baker films. I think that because it is about sex worker interacting with rich people, critics and audiences find it more palatable. There is wealth porn. Just like how Mike White finally won awards by depicting rich people in The White Lotus after years of focusing on oddballs."
        rating={9}
      /> 
      <Review 
        title="The Post" 
        director="Steven Spielberg"
        ref={ref76}
        date="11/03/24"
        releaseDate="2017"
        text="About Meryl Streep, inheritor of the Washington Post, battling against sexist all male board and deciding to publish Pentagon Papers. Very little tension since plot is historical, and no moral complexity since everyone is against Nixon and Vietnam war. Spielberg never morally complex. Ends with silly cliffhanger about break in of Watergate, as if there will be an exciting sequel. Feminist, I suppose, because of Streep’s coming to power, but another movie about Nixon controversy, Dick, is more feminist because seemingly silly high school girls are the savior of the nation there, instead of rich girl boss. Much less entertaining than Dick. Run time is at least less than two hours. Watched this as Meryl Streep Oscar nomination homework." 
        text2="Film buzzed as socially relevant in 2017 because of election of Trump, but I don’t know what Nixon has to do with Trump. Film suggests that the Press and its highest operators are oddly naïve and good and Nixon was bad (even though several presidents were exposed by the Pentagon Papers). No institutional analysis about when the Press is complicit (Iraq War, 2000s) and when it is opposed to the White House (Pentagon Papers, 70s). Another Spielbergian patriotic piece. No challenges. No surprises."
        rating={5}
      /> 
      <Review 
        title="Dick" 
        director="Andrew Fleming"
        ref={ref75}
        date="11/02/24"
        releaseDate="1999"
        text="Something about 90s movies, or something about my millennial brain, makes them more watchable than other films. I didn’t want to stop watching this movie and I didn’t get bored once. Cute silly comedy about teenage girls getting embroiled in Watergate scandal. A few great lines, such as Terri Garr yelling to babyfaced Kirsten Dunst and Michelle Williams, “I asked you to come to the dinner table fifteen minutes ago. Now your tv dinners are ice cold. In fact, they’re frozen again. So, come to the table or I’m never fixing you dinner again. Ever!” " 
        rating={7}
      /> 
      <Review 
        title="Bachelorette" 
        director="Leslye Headland"
        ref={ref74}
        date="11/02/24"
        releaseDate="2012"
        text="Watched in several sittings on HBO Max more than a month ago, but I think I remember it. Rom com about mean skinny girls who are bachelorettes at wedding of fat former friend. Good concept. I like unlikeable characters. Pretty good but could have been a lot meaner and I didn’t need forced personal growth at end. Film made little impact on culture and on me but does have my fav, Kirsten Dunst." 
        rating={5}
      /> 
      <Review 
        title="American President" 
        director="Rob Reiner"
        ref={ref73}
        date="10/31/24"
        releaseDate="1995"
        text="Aaron Sorkin political rom com about widower president falling in love with lobbyist and risking reputation/reelection. Blueprint for The West Wing. Has typical Sorkinesque American patriotism; liberal politicians and their advisors are sitcom-cute and morally decent; Republicans corrupt. Presidential dating scandal very quaint/naïve by modern standards. Movie released two years before Lewinsky trial and decades before Trump. Younger more radical me would argue that making American political system cute and quaint is insidious. In minor subplot, film blithely accepts president duty to support state of Israel and attack Libya. Quintessential liberalism of the 90s. Now that I am starved for political optimism, I get the charm of cute portraits of the White House, but Sorkin’s optimism is not to my taste. I assume Sorkin is a nice guy and Clinton is not. Prefer the ambivalence of Primary Colors." 
        rating={5}
      /> 
      <Review 
        title="Primary Colors" 
        director="Mike Nichols"
        ref={ref72}
        date="10/30/24"
        releaseDate="1998"
        text="Fictionalized account of the 1992 election of Bill-Clinton-like figure played by John Travolta. Travolta recruits black grandson of civil rights leader to be advisor. Topics: pragmatism vs. radicalism, idealism, being a part of history, whether philandering disqualifies candidate. Ultimately ambivalent about Travolta/Clinton; whether his charm is inspirational or smokescreen. Compared to heinous post-Trump politics, film’s ambivalence seems charming, naïve, optimistic. " 
        text2="Many scenes are very 90s and conservative. Black characters are emotional support/labor for white characters. Black girlfriend is always angry and unsupportive. Several white characters resent well-educated black man for being a Hotchkiss graduate with a profession, played for laughs. Sexual harassment of woman at work taken lightly. On ladies Travolta/Clinton has affairs with, Kathy Bates character says he “poked his pecker in some sorry trash bins [Monica Lewinski].” Support for Israel. Promotes education as solution to good factory jobs disappearing. Pre-woke conservatism was liberal in the 90s."
        text3="When I was more “radical” teenager, I thought Primary Colors and shows like The West Wing were insidious by making political class seem like cute characters in sitcom. At this point, this movie seems quaint."
        text4="Side note: Kathy Bates character mentions that Hitler was faithful, therefore philandering is not indication of bad moral leadership. Given Me Too and Clinton’s connections to Jeffrey Epstein, this is no longer a valid liberal point of view."
        rating={6}
      /> 
      <Review 
        title="Rivals (TV)" 
        ref={ref71}
        date="11/19"
        releaseDate="2024"
        text="Based on popular (light?) fiction. Lots of plotting around various people in the television industry in Britain competing for status, money, power and sex. Watched it because I heard the show on Disney + is frank about sex, but it’s not that frank or raunchy. Mostly a light comedy about people falling in or out of love. There’s a very sexy British playboy aristocrat played by Alex Hassell and a villainous social climber who’s jealous of those who are born rich, played by David Tenant. Jealous social climbers who are born poor is an effective trope, and maybe a conservative one. There’s a hypercompetent hypersexual black lady boss who voted for Reagan. There are likeable Tories. There’s a penis in episode 1. Compelling light fluff. It passes the time amiably." 
        rating={7}
      /> 
      <Review 
        title="Generation Kill (TV)" 
        ref={ref70}
        date="11/19/24"
        releaseDate="2024"
        text="David Simon co-created this miniseries about marines in Iraq in 2003. Portrays the red tape and incompetence of the military bureaucracy and the masculinity, homoeroticism, homophobia, cynicism and joviality of soldiers. The show is a vibe. Slice of life feel. Simon thinks about institutions so the soldiers regularly say things to reflect generally on the military, but the show is a mood. A vibe." 
        rating={9}
      /> 
      <Review 
        title="Fallout (TV)" 
        ref={ref69}
        date="11/16/24"
        releaseDate="2024"
        text="Critically acclaimed video game adaptation. Second best show of the year, after Baby Reindeer. Straightforward anti-capitalist plot [spoilers] – corporation manufactures pods for use during nuclear fallout and creates nuclear disaster in order to profit/control people. Show has black actress (Frances Turner) as both mother to a biracial child and corporate exec who comes up with the idea of manufacturing disaster in order to benefit the corporation. Always interesting when media put a black woman in the position of evil corporate exec." 
        text2="First season well done so I don’t need another. More world building left and a little bit of mystery, but the metaphor for capitalism is clear so I don’t need more."
        rating={9}
      /> 
      <Review 
        title="Baby Reindeer (TV)" 
        ref={ref68}
        date="11/16/24"
        text="Best show I’ve seen this year. [Spoilers] Based on experiences of the show’s star and creator caught in cycles of bad relationships and self-doubt after being repeatedly raped by an established showrunner who falsely promised to write a show with him. Has the personality, cringe and solipsism of prestige tv like Girls and Louie, except this show creator engages in cutting self-critique as he exploits his own story for televisual success/fame/Emmys. Lena Dunham and Louis C.K. created auteur shows that did not do self-critique this well. Probably because people who are raped, even narcissistic comedians, tend to blame themselves. " 
        releaseDate="2024"
        rating={9}
      /> 
        <Review 
        title="Shogun (TV)" 
        ref={ref67}
        date="11/16/24"
        text="Opens with white man (Cosmo Jarvis) and then centers Japanese characters and mostly has subtitles for English speakers. Early instance, I think, of future of Americans reading subtitles as much as everyone else." 
        text2="More than the pretty Japanese female lead, show sexualizes Jarvis. Show seems to have a female or gay gaze. Show is not that interested in sex or complex emotions. More philosophical and plot heavy and about military/political tactics. All of the characters, like in most genre television, are one-note and can be summed up in a few adjectives – the plot/historical setting move the human chess pieces." 
        text3="Well done historical drama with probable historical inaccuracies. Some 21st century feminism inserted. Not sure how women back then would be literate, speak several languages and know how to use swords." 
        releaseDate="2023"
        rating={8}
      /> 
        <Review
          title="Howards End"
          ref={ref66}
          date="09/28/2024"
          text="Watched in two sittings on mac over the course of two to four weeks. Merchant Ivory film adapted from novel. Class, property, love, melodrama. Emma Thompson won Best Actress for this one but deserved it more for Remains of the Day. Not my favorite Merchant Ivory. Not even particularly aesthetically pleasing. But good."
          rating={6}
          director="Ismail Merchant"
          releaseDate="1992"
        />
        <Review
          title="Strange Darling"
          ref={ref65}
          date="09/28/2024"
          text="Saw this at my new fav theater Syndicated Bar Kitchen Theater with Lisa. In climax, male cop says to a female cop, “you stupid bitch,” and that was the point of this movie – feminism allows female serial killer to get away with murder; [spoiler] a stupid lady cop wrongly assumed bruised and bound woman was victim. Well made done. Well acted. Gets point across, like perfect misogynist movie Straw Dogs. Oddly, not critiqued as misogynist by critics. Made by men only, including at least one scientologist (Gio Rabisi)."
          rating={7}
          director="JT Mollner"
          releaseDate="2024"
        />
        <Review
          title="Longlegs"
          ref={ref64}
          date="09/28/2024"
          text="Arthouse horror film with Nicolas Cage and actress from It Follows. Liked it. No interpretation. Not social messagey like Get Out."
          rating={7}
          director="Osgood Perkins"
          releaseDate="2024"
        />
        <Review
          title="Remains of the Day"
          ref={ref63}
          date="08/23/2024"
          text="Celebrated Merchant Ivory production (Ismail Merchant = producer,  James Ivory = director, both = gay?) of the 90s. British, upstairs-downstairs, book adaptation, costume dramas dominated the Oscars in the 90s and have disappeared. Character study of a butler who is too committed to his work and British manners to object to Nazi leanings of his master feels very literary but translates well on film. I have not and will not read the book. Subtle observations about reducing life to work and repressing emotions. I may have watched this in my teens and forgot all about it because I was far more into “fun” films like Fight Club. Much nostalgia baked into watching an old movie about a historical moment. Instant nostalgia. Flecks of sadness. I am glad that Emma Thompson and Anthony Hopkins, the stars, are still alive."
          rating={9}
          director="James Ivory"
          releaseDate="1993"
        />
        <Review
          title="Let Them All Talk"
          ref={ref62}
          date="08/23/2024"
          text="Meryl Streep plays respected pompous writer who takes transatlantic crossing to England to receive literary award, and invites her nephew and old college friends to boat. Procrastinated for four years to see this because I knew it would be good but also knew it would be a “just so” film. Film set on a boat with minimal plot about literature starring mostly older female film veterans (Meryl Streep, Candace Berge, Dianne Wiest) is only for film snobs and gay men of a certain type (gay men who like Judy Garland). Not sure that the film does the thing it says books do, which is reach across time and space and give people a sense of a unified humanity. I liked the film, but films for film snobs no longer give a sense of identity, just a sense that they need to be more popular or they will disappear. Bergen is hilarious."
          rating={7}
          director="Steven Soderbergh"
          releaseDate="December 10, 2020"
        />
        <Review
          title="The Ref"
          ref={ref61}
          date="07/20/2024"
          text="Same genre as American Beauty and The Ice Storm – white family with problems illustrates dark underbelly of the suburbs. This is the silly comedic version. Got tepid reviews and low box office. Nostalgic for me because I was very attracted to scruffy Denis Leary with his nasty facial hair when I saw this as a kid on tv. I still like it. Still somewhat attracted to Leary. Leary plays thief who kidnaps bickering couple Kevin Spacey and Judy Davis and ultimately helps them work through their marriage problems."
          text2="Facts. Kevin Spacey is in both American Beauty and this movie playing the same cuckold middle-aged sad sack. Judy Davis looks a lot like Annette Benning in American Beauty and plays a similar character. Sigourney Weaver of the Ice Storm looks somewhat like these women as well. The mean matriarch of the film, Glynis Johns, passed away this year at 100."
          rating={6}
        />
        <Review
          title="Jerry Maguire"
          ref={ref60}
          date="06/23/24"
          text="Took years to get to this one since it combines three things I hate – sports, capitalism, and little guy who succeeds against big business. Watchable and pleasant if you let yourself watch a rom com/sports story sandwich. Tom Cruise is Jerry Maguire sports agent who has moral crisis and writes manifesto about having less clients and making less money. Vague act of petulant moralizing in corporate setting gets him fired, and Renee Zellweger follows broke Tom Cruise to independent company despite being single mother. [Spoiler] Cruise’s business succeeds, his romantic life blossoms and he gets a kid (Renee’s) for free. "
          text2="Very good performance from Cruise. Scenes in which he is charismatic predict his later reputation for manic and cult leader energy. His acting style is specific and a little weird and manic and earnest and honest and dishonest at the same time. Sometimes he seems like he’s acting against Cuba Gooding Jr, sometimes he seems like he is acting against ideas in his head even when giving eye contact to Cuba. Cruise’s specific acting style works well here and in most of his films."
          text3="Signature Cameron Crowe insidious cuteness. Underlayer of liberal 90s “cute” racism. College educated Regina King suddenly becomes violent and ghetto in her final scene. Gooding Jr. gives Cruise permission to say things like “show me the money” and “shoplift the pootie.” Lots of 90s cheesy lines. “You complete me” and “you had me at hello” also come from here. Movie earnestly wants to promote love and optimism. But the cynicism of the world is smoothed over with jokes and cheesiness. Adult workspaces seem so naïve and childish in the movies."
          text4="Politics not good. Many scenes of single middle aged women’s group where they say reasonable things about valuing female friendship played for laughs. Women need Tom Cruise, who interrupts a feminist lady-gathering to demand that Zellweger take him back. She broke up with him because they couldn’t articulate why they loved each other. They get back together because he finally articulates that he wants a girl and free child to talk to when Cuba Gooding Jr. scores a touchdown and secures financial success. This is good enough for Zellweger. Contradiction of celebrating “small business” in a major film starring bankable Tom Cruise is so glaring that hardly worth mentioning. Acoustic guitar and soundtrack melt one scene into another. Music video vibe of director Cameron Crowe.  This is what 90s optimism looked like, compared to the 90s pessimism of Reality Bites or The Simpsons."
          rating={7}
        />
        <Review
          title="The Pelican Brief"
          ref={ref59}
          date="06/18/24"
          text="John Grisham adaptation. Incompetent president and corruption in high offices and agencies. A smart law student (Julia Roberts) and a reporter (Denzel Washington) save the day and root out the bad guys. News montage at the end confirms that evil men are punished. Opens with Julia Roberts in class saying something like “the law is wrong.” But she, the American individual, is right and that’s the point. Ultimately patriotic. Movie for a second made me feel like a young smiling Julia Roberts and a baby-faced Denzel really could save America and preserve its institutions. But they are middle aged now."
          rating={5}
        />
        <Review
          title="Haywire"
          ref={ref58}
          date="06/18/24"
          text="Light  breezy film about black ops contract killer. Contract killers are comforting in films for some reason. Soderbergh cast MMA fighter Gina Carano as lead and her take on acting is fresh."
          rating={5}
        />
        <Review
          title="Bad Boys: Ride or Die"
          ref={ref57}
          date="06/16/24"
          text="30 years since the first version. Since then, 9/11, great recession, George Floyd, Me Too, cancel culture, and Will Smith smacked someone. Some films try to respond to social and political currents. This does not. Maybe less gay jokes than the original. No attempt to justify movie about black cops who kill people in a post George Floyd world. Simple good guys v bad guys story. Supposed to laugh when bad guys shot. Crowd at Magic Johnson AMC in Harlem very happy when Martin Lawrence’s son shot someone in the head and then saluted his father. Despite corrupt cop story line, patriotic and militaristic. No attempt to comment on stand your ground laws despite death of Trayvon Martin. Violence exists alongside very cute domestic scenes of men competing for authority over grill and wife forcing husband to be vegetarian."
          text2="Absurd MacGuffin involving a giant white alligator. Lazy plotting communicated with fake news anchors (cheapest trick). The middle aged men can’t get shirtless anymore, so film has Jacob Scipio do shirtless scene. Martin is the best part. Inability to stick to a diet despite health problems very relatable. He makes unfunny jokes funny. Funny, cute, enjoyable movie that I like. Does not withstand critical analysis. One of the few box office successes of the year so far. "
          text3="Hollywood is in flux. Blockbusters are failing. And disproportionately black audiences have rallied behind a film that revels in police brutality. Black people created cancel culture. Black people never really cancelled Will Smith. If OJ can get away with murder, WM should be able to get away with smacking someone. That is the point of privilege. Not being held accountable for violence. Some black people are privileged and we celebrate that for them because we are not. And hey, why think too much about it. It’s just a movie. It doesn’t have to be political. Too much has been claimed by politics. This movie would be cancellable if it could be political, but it can’t."
          rating={6}
        />
        <Review
          title="Lincoln Lawyer"
          ref={ref56}
          date="06/16/24"
          text="Standard court procedural about morally ambiguous lawyer who does the right thing. Not sure why that is the standard. It has narrative tension, confirming distrust of lawyers, confirms confidence in the system. Specific conceit is Matthew McConaughey must defend his guilty sociopath client and still get him in prison somehow. McConaughey gets street cred because of his black driver and the Latinx prisoner he exonerates. His driver literally gives him street cred. White people."
          rating={6}
        />
        <Review
          title="The Knick Season 1"
          ref={ref55}
          date="06/13/24"
          text="Engrossing, binge-able prestige peak tv period show about a hospital in New York. Discusses modernity, science, race, abortion, feminism, all from current progressive/liberal perspective reflecting on the past. The political and moral intent of the show is clear, well intentioned and inoffensive to people like me who went to liberal universities. Peak tv for liberals. I did not revel in watching Clive Owen play a racist doctor who grows to accept a black underling because the man happens to be excellent. I appreciate the interracial love story but am also put off by how much this is in vogue. The well-meaning white liberal rich family whose patriarch is on the board of the hospital is very enviable. Must be nice to run things and be kind to one’s social inferiors whose civil rights you support. Like most tv, this show is a melodrama. Has all the prestige tv elements (great director/Soderbergh, period piece, good writing, progressive values) but this all boils down to melodrama: using drugs to deal with difficult job, racial strife, forbidden romance, owing money to loan shark."
          text2="I am still trying to find a through line with Soderbergh. I have not found it."
          rating={9}
        />
        <Review
          title="Ocean’s Twelve"
          ref={ref54}
          date="06/12/24"
          text="Rewatchable. Light. Charming. In one scene, Julia Roberts pretends to be someone pretending to be Julia Roberts. A big swing I like and I hate. Driven by movie stars and funny-ish screenplay."
          rating={7}
        />
        <Review
          title="Pride And Glory"
          ref={ref53}
          date="06/11/24"
          text="Story of police corruption that is more of family melodrama than thriller. Most narratives of cops and crime hold off on the plot reveal in order to bury melodrama beneath genre trappings, but this reveals everything upfront and foregrounds the melodrama: bald lady with cancer, tense family gatherings, sibling rivalry. I think the melodrama/soap opera aspect is why this film is less respected than a more masculine thriller like Training Day. Silly scene in which Ed Norton and Colin Farrell put down guns to have fist fight while Irish music plays. Film uninterested in Dominican gangsters and colored protesters. Race mishandled. Commentary on cops muddled."
          rating={6}
        />
        <Review
          title="The Bourne Ultimatum"
          ref={ref52}
          date="06/11/24"
          text="Highest rated installment in Bourne series. Bourne finds out more details about CIA/NSA? program that “created” him. Post 9/11 film skeptical of surveillance and lethal covert operations with no civilian oversight. Joan Allen is the good cop, versus various white guys (David Strathairn) who are bad cops. I suppose institutions exist in this film, but nothing provokes political and intellectual analysis. This is entertainment. Action. Shaky cam. Dour Julia Styles. Brainwashing. Hot guys with guns. Old men in rooms. Damon at end of his baby face era. Green tint. Pretty good. As much as I liked the first movie twenty years ago, I don’t think I saw this sequel before, so carries no nostalgia for me. Think I would love this as much as the first one if it did."
          text2="I’ve been thinking about how “the medium is the message” is an overstatement. Films and tv can have all sorts of messages. But, for the most part, films tend to aim at entertainment, not edification. [Spoiler] That final moment when Jason jolts back to life after appearing dead and that Moby soundtrack riff plays is deeply anti-thought movieish euphoric climax. Just a movie."
          rating={7}
        />
        <Review
          title="The Three Faces of Eve"
          ref={ref51}
          date="06/09/24"
          text="Finally watched Oscar winning performance by Joanne Woodward (Paul Newman’s wife). Early depiction of dissociative personality disorder handled with surprising subtlety by Woodward. From the 50s so movie has framing devices of white male experts talking. Also, [spoiler] Eve manages to integrate into one personality and remarry and ride of in car with her kid (who she was a danger to when sick) alongside new man. Family restored. Men are good except for the country bumkin first husband who doesn’t understand mental illness and slaps Woodward/Eve. And women are good if they get rid of their slutty second personalities and become good wives."
          text2="Homework because it is an important Oscar winner and I’ve been meaning to explore Woodward and Newman. This is not a movie I needed to see, but I’m glad I have another film reference for some reason. I’ll never watch all the movies I’ve been meaning to watch, but I can cross off this one."
          rating={6}
        />
        <Review
          title="Silence"
          ref={ref50}
          date="06/09/24"
          text="Homework I assigned myself. Scorsese 406 (101 is Goodfellas). Watched in two to three sittings over the course of several weeks, sometimes on a tv, sometimes on a computer while making coffee and eating breakfast. Even more than Age of Innocence, the novel that I never read is probably better at teasing apart ideas of Christianity, Buddhism and imperialism. But I stopped reading the novel on page 1 so I guess this film has value for people who have given up on literacy. But has limited appeal because is an adaptation and not very movieish movie. Takes religion seriously while doing the atheist thing of putting religion in historical context."
          text2="[spoilers] Whether the Portuguese priest  (Andrew Garfield) should have apostatized upon being threatened by sociopath brutal Japanese leader, whether he maintained faith in his heart while compromising in order to save lives, whether faith of any kind is worth practicing – film is skeptical but open ended. Pop culture has replaced some of what religion used to do – a thing to think about and organize some of the events of one’s life around and admire the beauty of. Pop culture, including this movie, offers no coherence or absolutes or moral certainty. So, maybe faith is better. I have an empty feeling. Yearning for answers. Meaning."
          rating={7}
        />
        <Review
          title="The Verdict"
          ref={ref49}
          date="06/08/24"
          text="Finally saw what is called Paul Newman’s greatest performance in 80s medical malpractice drama with standard elements: [spoilers] drunk, down on his luck lawyer finds sobriety and legal success by representing the little guy, corrupt institutions, surprise witness tracked down by lawyer opens up the case at the last minute, abstract heartfelt stump speeches about justice or something. At first I predicted Charlotte Rampling was a spy sent to seduce Newman, then I thought that was too obvious. Turns out she is a spy. By the numbers, but not bad. The 80s pace was too slow in the beginning and bored me, but the slower pace worked at the end; better than forced euphoria. 90s movies just sped up 80s movies and made them more Xtreme!!! Newman is better in Hud, a better movie. Glad to get this movie off of my “movie bucket list” but I think I want to relieve myself of anxiety over not seeing key movies and performances. Nothing much changes with a movie."
          text2="Newman slaps Rampling in the face in one scene and film suggests this is okay. Screenplay David Mamet. Director Sydney Lumet."
          text3="Rampling always looked severe and cold and old in spirit even when young. Icy version of the seductress. White actresses often cold and remote even when supposed to be sexy. White man fantasy?"
          rating={6}
        />
        <Review
          title="Shakespeare in Love"
          ref={ref48}
          date="06/03"
          text="This is the second time I’ve watched this film after about 20 years and my impression is exactly the same. Nothing to think about, but entertaining. Better than Saving Private Ryan, which it beat due to Harvey Weinstein, his one good deed."
          rating={6}
        />
        <Review
          title="Hit Man"
          ref={ref47}
          date="06/03"
          text="Boring professor reignites his life and finds sex/love by posing as hitman for police, and then becoming actual hitman. Linklater frontloads movie with philosophical exposition and then movie unfolds in typical heightened fashion. Based on real story. The fake Hollywood stuff is Glen Powell becoming a hitman. I’m surprised that Linklater has a scene in which the newly self-actualized Powell has sex with his girl next to a dying body, both turned on by their reckless dangerous actions. Many Hollywood films are sociopathic and I though Linklater might critique this. He just revels in it. The philosophical component, I guess, is existentialist. The construction of the film is obvious. I thought Linklater might comment on the process of adapting a real story to suit the Hollywood format. Maybe he does."
          text2="Seen at Regal Union Sq."
          rating={7}
        />
        <Review
          title="Elizabeth"
          ref={ref46}
          date="06/03"
          text="Pretty mediocre Best Picture nominee. No real narrative tension since there isn’t really an antagonist. More of a coming of age story about Elizabeth learning to be a ruthless ruler more so than taught palace intrigue story. People are killed so that Cate Blanchett may secure the throne, but the deaths are not thrilling because the male antagonists, like Christopher Ecclestone and Daniel Craig, do not matter because the movie does not care about them. The movie only cares about Elizabeth. Blanchett is good. Starts demure and increases in power, but you can tell she is powerful even when she is “sweet” in the beginning. Some indication of greater performances to come in Tar and Blue Jasmine."
          text2=""
          rating={6}
        />
        <Review
          title="Central Station"
          ref={ref45}
          date="06/01/2024"
          text="Is and looks like 90s Miramax awards bait movie, which is not a bad thing. Boy with deadbeat dad and dead mom navigates violent, impoverished Brazilian society. Pain of lost boy elided by an older woman who takes an interest in him and an over the top piano score. Embarrassed to say that the score and the manipulative ending brought tears despite my resistance. Maybe it’s okay that films like this obscure poverty and suffering with fantasy. But maybe not because of the nefarious Weinstein behind the scenes. Discussion of older woman’s deadbeat dad, romantic failures and inability to be a permanent figure in the boy’s life is compelling. Some argue that Fernanda Montenegro should have beaten Paltrow for Oscar and I agree. (Paltrow should have won for Royal Tenenbaums.) Been meaning to watch this movie for 15 years, ever since I started exploring film through the Best Actress Oscar (I moved on to directors later). Thought it would be hard because of foreign language and depiction of darkness, but the Miramax broth subsumed the bitterness with sweetness and hominess."
          text2="Interesting that A24 tactics are diff from Miramax aesthetics. Is it the director? The production company that determines the look? The state of tech? There is a Miramax look, I think. A reddish brown tint of Oscar bait."
          rating={7}
        />
        <Review
          title="The Bourne Supremacy"
          ref={ref44}
          date="06/01/2024"
          text="Okay"
          rating={5}
        />
        <Review
          ref={ref43}
          title="The Bourne Identity"
          date="05/31/2024"
          text="Nostalgia fuel. Charming actress from Run Lola Run, young Matt Damon, the boots Damon wore, the striped sweater someone wore in one scene, all so early 2000s. Brought me back to that time when I felt strongly about movies and got lost in them. I remembered a striped shirt I wore then. My old boots. Liquid days of youth when everything is changing. So much possibility. In my heart, 9/10. My brain says 7 or 8."
          text2="The story is a bit preposterous. Some of the action sequences do not make sense. Yet, on a physical and visual level, relatively grounded compared to John Wick or current Mission Impossible films. Not as maximalist as “event” movies are these days. Less bad guys to kill per scene."
          text3="Damon lost memory of his “identity” but never forgets how to be a white man. Some men rescue him from drowning, remove his bullets, and feed him, yet he has a hissy fit about not knowing who he is instead of being grateful. He is approached by cops and, upon suddenly recalling martial arts skills, beats them up. Destroys public property. Kills people. And gets the girl he trauma bonds with, who is “the only person [he] knows.” He gets to forget all of the murders he committed as an assassin and date a hot drifter (someone calls her a Gypsy, which I guess was less offensive in the early aughts) chick with cool hair. His broke drifter chick also happens to fail upwards into owning a cute shop in Mykonos overlooking the sea by the end of the movie. White people can do anything. Nonsense aside, one of the most effective romances in an action film. Really."
          text4="Not sure what this film is trying to say about the FBI hiring assassins to kill African dictators. I suppose narrative is anti-institutionalist pro-rogue-individual-with-karate-skills-who-repents-a-forgotten-murderous-past."
          rating={8}
        />

        <Review
          ref={ref42}
          title="Superbad"
          date="5/29/2024"
          text="I like this more now than I did when I first saw it. I’ll never be that into straight bro humor which makes me feel as alienated as I did in boarding school in a dorm full of jocks. Some jokes work. Some don’t. I like the black actress who plays the checkout girl even if her scene was clearly written by and for white people. I am working on being receptive to films by and for other kinds of people but Judd Appatow stirs the identity politics in me."
          rating={6}
        />
        <Review
          ref={ref41}
          title="The Batman"
          date="5/28/2024"
          text="Sure."
          rating={6}
        />
        <Review
          ref={ref1}
          title="Reacher (tv)"
          text="Ex-military vigilante commits murder. Dirty Harry fantasy mixed with attempts at representing groups other than white men with well-drawn black Harvard grad police chief and tough lady cop. Refuses cavity search and prevents someone from being raped in prison. Hints of homophobia. Good show."
        />
        <Review
          ref={ref2}
          title="Logan Lucky"
          text="Solid comedy written by wife of Soderbergh. Adam Driver good at being weird character actor. Meaningless fun."
          rating={7}
        />
        <Review
          ref={ref3}
          title="Femme"
          text="Uncomfortable but successful discussion of a closeted white gay chav who attacks a black drag queen, ultimately concluding that the white guy is more broken and worthy of pity. Not visually interesting. The black actor seemed to be a boring drag queen to me. Spoiled by American Drag Race?"
          rating={7}
        />
        <Review
          ref={ref4}
          title="I Care a Lot"
          text="Sociopath exploits old people and contends with the Russian mob boss of one of her elderly victims. Overt discussion of the sociopathy of capitalism. Rosamund Pike hilariously transitions between adorable cheery fake healthcare provider and icy calculator. Pike’s take on white woman sociopathy is distinct from Cate Blanchett’s in Tar. Blanchett’s sociopathy never disappears. Pike is at least as good as she is in Gone Girl. Movie too cynical to be successful?"
          rating={8}
        />
        <Review
          ref={ref5}
          title="Mission: Impossible - Dead Reckoning"
          text="The monster is AI but this franchise has no idea how technology or anything in reality works. Silly fun. Perfect. 10/10"
          rating={10}
        />
        <Review
          ref={ref6}
          title="Fabulous Baker Boys"
          text="Simple movie that would never be in theaters today."
          rating={6}
        />
        <Review
          ref={ref7}
          title="Death Becomes Her"
          text="Funny. Perfect. When I was younger I was not able to receive Meryl as a villain. Now I am. She’s naturalistic, even in a campy villainous role."
          rating={9}
        />
        <Review
          ref={ref8}
          title="The Challengers"
          rating={8}
          text="Unlike any movie I’ve seen before. Essentially about nothing of importance, but fun. Zendaya is very good. She nearly transcends race by playing a rich (half?) black women in a love triangle with white guys. Race and class are present and yet sidestepped. No social commentary."
        />
        <Review
          ref={ref9}
          title="Devil Wears Prada"
          rating={8}
          text="Good movie with bad politics. Fantasy of professionalizing oneself by working for an abusive rich boss. Fantasy of New York and Paris. Fantasy of consumerism. But what else does capitalism offer except a few good professional jobs and stuff to buy. Bakeries with croissants."
        />
        <Review
          ref={ref10}
          title="eXistenZ"
          text="Cronenberg examines danger of video game addiction displacing reality with signature organic technology body horror. Compares video games to sex, especially anal sex, and drugs. Young Jude Law is charming."
          rating={8}
        />
        <Review
          ref={ref11}
          title="Constantine"
          text="Fun blockbuster that takes Christian faith literally. Queer coded devil and demons (the moment when devil spreads Keanu’s legs is sexy). [Spoiler Alert] Gets a 7 instead of a 6 because of the scene in which Constantine gives the Devil the finger as he floats off to heaven and the Devil prevents Constantine from going to heaven by taking the tar out of his lungs."
          rating={7}
        />
        <Review ref={ref12} title="Dewey Cox" text="Yes" rating={8} />
        <Review
          ref={ref13}
          title="Last Duel"
          text="Perfect. Beautiful. Adam Driver should only play weirdos and it shows here but he is actually fine here despite not embodying traditional leading male masculinity."
          rating={10}
        />
        <Review
          ref={ref14}
          title="Before the Devil Knows Your Dead"
          text="Very good family melodrama about consequences of sibling rivalry and bad parenting. Hoffmann is the sociopath older brother who was over-disciplined and Hawke is the silly cute younger brother conned into robbing their parents. The final minutes are excessive and lessen the impact of the film. It would be better if the father just decided to be a parent, like Tilda Swinton hugging her son in We Need to Talk about Kevin."
          rating={8}
        />
        <Review
          ref={ref15}
          title="Eastern Promises"
          text="Story is about the sexual exploitation of Russian/Ukrainian girls but the camera actually exploits Viggo Mortensen’s nudity, which, it seems, he was not super comfortable about. Between this, The Fly, and eXistenz, I think Cronenberg is a little gay. In addition, Mortensen is very touchy feely with the closeted Vincent Cassell in the film."
          text2="Addendum: See comments on Videodrome below. Here are excerpts from article: Cronenberg says he deliberately filmed heterosexual sex scenes in a cold way while much of the violence feels passionate and intimate. 'I try to make the violence real There is an underlying eroticism to it and by making it real I have made it sexual' 'I don't want to do a Bourne -type film… where you don't have to pay a penalty for that violence as an audience,' the director said in reference to the Jason Bourne trilogy starring Matt Damon."
          rating={9}
        />
        <Review
          ref={ref16}
          title="Dredd"
          text="Comic book adaptation written by Alex Garland that uses futuristic setting to critique violent criminal justice system. Witty and subtle social commentary that is not didactic. I wonder if Lena Headey’s acting is the right size for tv and small for the movies."
          rating={9}
        />
        <Review
          ref={ref17}
          title="Civil War"
          text="I do not mind that this film abstracts away from politics and institutions and just discusses the nature of people who document violence. A good use of movie abstraction from reality."
          rating={9}
        />
        <Review ref={ref18} title="Speed " text="Dumb" rating={5} />
        <Review
          ref={ref19}
          title="Talented Mr. Ripley"
          text="I remember being turned on by the hints of nudity in this film when I was younger. Gay awakening."
          rating={10}
        />
        <Review
          ref={ref20}
          director="David Cronenberg"
          title="Videodrome"
          text="Parable about danger of television and porn displacing reality. Signature Cronenberg body horror and Freudian sex negativity. Discussion of using torture and violence as pornography. Blames both the watcher and producer of snuff films – watchers are complicit."
          text2="Recurring theme of sadism in Cronenberg films. This film’s discussion of torture porn reveals that Viggo Mortensen’s nude fight scene in Eastern Promises was pornography for Cronenberg. Though that film was taken as art and though the scene is violent and not overtly sexual, to a sadistic eye, Viggo Mortensen’s body being flung about a bathhouse by people trying to kill him is porn. Some directors actually want to make porn but make art instead."
          rating={8}
        />
        <Review
          ref={ref21}
          title="Southland Tales"
          text="I would give it a 5 but I gave it a 6 because it takes big swings, attempting to comment on way too much – police state, radical leftists, feminists, corporations – with a confusing sci fi plot. Some jokes work. Most don’t. In interviews, director Richard Kelly is oddly childlike in demeanor. Film seems like it was written by someone in high school."
          rating={6}
        />
        <Review
          ref={ref22}
          title="Miss Congeniality"
          text="Pretty funny. Sandra Bullock is perfect. I was wrong to dismiss movies like this in my youth. Perfect set up in which FBI must use resources on training agent for beauty pageant. The jokes and set up could have been pushed further. Some don’t work. Several gay panic jokes and a really bizarre scene making fun of militant lesbian pageant finalist. And yet, the movie is kind of gay friendly. Black FBI boss and Benjamin Bratt wear dress in scene in which computer program generates images of agents in pageant dress. Opportunity to shame homely women, show men in drag (appealing to gay and anti-gay gaze) and objectify Sandra Bullock. Nice legs on black guy."
          rating={8}
        />
        <Review
          ref={ref23}
          title="Rounders"
          text="Breezy meaningless film about high stakes poker with no stakes. Great Ed Norton performance. John Malkovich does a silly Russian accent. Gretchen Mol plays the Michael-Mann-girl type who tries to domesticate the man obsessed with his work."
          rating={7}
        />
        <Review
          ref={ref24}
          title="American Gigolo"
          text="Not as good as other Schrader films (Taxi Driver, First Reformed, Hardcore, Blue Collar) but very stylish. I think you have to be into the fashion and glamour of a certain image of LA to appreciate."
          rating={7}
        />
        {/* <Review
          ref={ref25}
          title="Witness"
          text="Fun movie that forces Harrison Ford cop to live with the Amish. Could have done more with the fish out of water concept. The corrupt cops are idiots. [Spoiler] The final moment improves the movie because it evokes lost possibility for a life with the Amish woman, comparing lost love to going to a modern city away from the farm."
          rating={8}
        /> */}
        {/* <Review
          ref={ref26}
          title="Silver Linings Playbook"
          text="Not sure how rom com inevitability of the two coming together can ever be exciting climax. From dance competition onwards, film  drags. I like the montage of Sunday family gatherings at the end. I think of how the film stars likely do not have access and/or do not want “ordinary” suburban domesticity. I do not know suburban ordinary family life either."
          rating={8}
        /> */}
        <Review
          ref={ref27}
          title="The Quiet Girl"
          text="Irish film about neglected girl who experiences love for the first time when she spends a summer with childless family members. Ending is heartbreaking. Reminds of the time I didn’t want to go back home when I visited family in Florida."
          rating={8}
        />
        {/* <Review
          ref={ref28}
          title="Are You There God? It’s Me, Margaret"
          text="Cute. Slight. I like seeing a film from a child’s perspective. I believe children think they are the center of the universe, but I don’t think that Margaret is the center of the lives of the adults. I believe that the grandparents would continue arguing about whether she should be Jewish or Christian even after she stormed off."
          rating={6}
        /> */}
        <Review
          ref={ref29}
          title="The Holdovers"
          text="Slight. Unambitious. Good acting from the three main characters. "
          rating={7}
        />
        <Review
          ref={ref30}
          title="Godzilla Minus One"
          text="I have not finished Jaws but reminds me of Jaws. Standard and well-done hero’s journey. This kind of blockbuster is just not that compelling to me. I wish the acting were naturalistic instead of stylized and melodramatic in a specifically Japanese way. Too psychologically simple?"
          rating={7}
        />
        <Review
          ref={ref31}
          title="Clemency"
          text="Maybe one of the best performances I’ve ever seen."
          rating={9}
        />
        <Review
          ref={ref32}
          title="The Usual Suspects"
          text="Very stylistic. Very plot driven. Amoral filmmaking. Just plot. Just clever twist. There’s a barely tertiary female character to give Gabriel Byrne some heart. Slick non-humanistic film making at its 90s finest."
          rating={9}
        />
        <Review
          ref={ref33}
          title="Phantom Thread"
          text="A lot of appreciation hinges on the final “twist.” I’d have to rewatch to catch everything. I’m still not sure that I appreciate PTA. This is art. Feels like a smart short story. Maybe should be a short story. Not really a movie."
          rating={8}
        />
        <Review ref={ref34} title="Triple Frontier" text="Meh." rating={5} />
        {/* <Review
          ref={ref35}
          title="The Age of Innocence"
          text="[Spoiler] Felt so bad watching DDL retain Michelle Pfeiffer as an idea of a life he gave up decades prior instead of doing the modern thing of taking up a second wife. Are other people ideas? Makes me regret wasting my own life. I feel like Saoirse Ronan would have been scarier and steelier in the Wynona Ryder part. Ryder should have been nominated for Girl Interrupted. Not for this."
          rating={9}
        /> */}
        {/* <Review
          ref={ref36}
          title="Sea of Love"
          text="[Spoiler] Some imagery that is reminiscent of pegging (when the killer is assumed female) and gay sex (when killer revealed to be man). Erotic thriller. Stalking. Obsession. Cop falls for woman who seems to drive men to murder. Ellen Barkin believably/charmingly working class chick from New York."
          rating={7}
        /> */}
        <Review
          ref={ref37}
          title="Barfly"
          text="Best depiction of low life drunks I’ve seen so far. Interesting blend of high and low class – the two leads are both and neither."
          rating={8}
        />
        <Review
          ref={ref38}
          title="Jaws"
          text="The jokes are cringe. The characters are line drawings. The doting wife bores and unnerves me (like she belonged in a Robert Altman movie and is trapped in a Spielberg movie; looks like Shelley Duvall). But the opening was solid. The scenes on the boat gripping. Perfect blockbuster with that lack of real humanity that permeates Spielberg films. I am slowly beginning to appreciate Spielberg despite how there’s very little of me that resonates with his instincts. He is the best director and I can’t help but be impressed."
          rating={8}
        />
        <Review
          ref={ref39}
          title="Devil’s Advocate"
          text="Wish high concept original films like this were still made. Weird how Keanu Reeves can act his ass off in the screaming match with Pacino and fumble dialogue in a scene with Charlize. When Keanu is “bad,” I don’t really mind. He's just a movie star, I guess."
          text2="Horny filmmaker. Fully naked ladies."
          rating={9}
        />
        <Review
          ref={ref40}
          title="Ocean’s Eleven"
          text="I watched this because SFennessy and ADobbins of The Big Picture podcast ranked this high among Soderbergh films. I think that Sex Lies and Videotape is the only Soderbergh film that does not seem artificial to me. He makes you pay attention to the construction of the film and the editing techniques and references he plays with. Beautiful scene of the guys looking at a water fountain at night and for a second it looks like day as Claire de Lune plays. Nice to see so many beautiful actors at the peak of their power as movie stars. The last generation of movie stars as we once knew them. I think that the hosts of The Big Picture have a much higher appreciation of MOVIES that are very white and divorced from reality than I do. The scene in which Bernie Mac pretends to play the race card in order to enable Matt Damon to play a bumbling white person and trick the casino owner was unfunny enough to be offensive. That white people find black people complaining inherently funny is the offense, I think. Fakeness of complaint makes it worse. Waste of Bernie Mac. RIP."
          rating={8}
        />
        {/* <Review
          ref={ref41}
          title="A Man for All Seasons"
          text="Smart historical movie based on play about Thomas More’s refusal to approve of Henry VIII’s divorce. Play is probably better at teasing apart notions of law, justice, principle, the king, pragmatism. Perfect but loses a point for lack of levity, stunning visuals and sex. "
          rating={9}
        /> */}
      </div>
    </div>
  );
}

export default App;
