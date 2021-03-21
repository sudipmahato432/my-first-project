import logo from './logo.svg';
import './App.css';
import Card from './Card';

function App() {

  return (
    <>
      <div className="App">
        <nav class="navbar navbar-expand-lg navbar-light bg-info">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto ml-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Registrar</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    More
                    </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#">Help</a></li>
                    <li><a class="dropdown-item" href="#">Contact us</a></li>
                    <li></li>

                    <li><a class="dropdown-item" href="#">Support</a></li>
                    <li><a class="dropdown-item" href="#">Donate</a></li>
                    <li><a class="dropdown-item" href="#">Write on us</a></li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </li>
              </ul>
              <div>
                <img style={{ width: 4 + 'rem' }} src="plants.jfif" class="image" alt="plants.jfif" />
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="container1" >
        <div class="row">
          <div class="box bg-secondary col-lg-5 col-md-8">
            <h3>Carousel</h3>
            <p> A slideshow component for cycling through elements—images or slides of text—like a carousel.
            The carousel is a slideshow for cycling through a series of content, built with CSS 3D transforms and a
            bit of JavaScript. It works with a series of images, text, or custom markup. It also includes support
            for previous/next controls and indicators.

            In browsers where the Page Visibility API is supported, the carousel will avoid sliding when the webpage
            is not visible to the user (such as when the browser tab is inactive, the browser window is minimized,
            etc.).

            Please be aware that nested carousels are not supported, and carousels are generally not compliant with
            accessibility standards.

            Lastly, if you’re building our JavaScript from source, it requires util.js.
            </p>
          </div>
          <div id="carouselExampleIndicators" class="carousel slide col-lg-5 col-md-9" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="photograher.jfif" class="d-block w-100" alt="photograher.jfif" />
              </div>
              <div class="carousel-item">
                <img src="city.jfif" class="d-block w-100" alt="city.jfif" />
              </div>
              <div class="carousel-item">
                <img src="https://source.unsplash.com/user/erondu/1600x1200" class="d-block w-100" alt="https://source.unsplash.com/user/erondu/1600x1200" />
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      <div className="container2">

        <div class="row1">

          <Card
            imgsrc="las vegas.jpg"
            title="Las Vegas"
            paragraph="Las Vegas (Spanish for  The Meadows), officially the City of Las Vegas and often known simply as
          Vegas,
          is
          the 28th-most populous city in the United States, the most populous city in the state of Nevada, and
          the
          county seat of Clark County. The city anchors the Las Vegas Valley metropolitan area and is the
          largest
          city
          within the greater Mojave Desert.[7] Las Vegas is an internationally renowned major resort city,
          known
          primarily for its gambling, shopping, fine dining, entertainment, and nightlife. The Las Vegas
          Valley as
          a
          whole serves as the leading financial, commercial, and cultural center for Nevada."
           
          />
          

          <Card
            imgsrc="newyork.jpg"
            title="New York City"
            paragraph="New York City (NYC), often called simply New York, is the most populous city in the United States.
            With
            an
            estimated 2019 population of 8,336,817 distributed over about 302.6 square miles (784 km2), New York
            City is
            also the most densely populated major city in the United States.[11] Located at the southern tip of
            the
            State of New York, the city is the center of the New York metropolitan area, the largest
            metropolitan
            area
            in the world by urban landmass.[12] With almost 20 million people in its metropolitan statistical
            area
            and
            approximately 23 million in its combined statistical area, it is one of the world's most populous
            megacities. New York City has been described as the cultural, financial, and media capital of the
            world,
            significantly influencing commerce,[13] entertainment, research, technology, education, politics,
            tourism,
            art, fashion, and sports. Home to the headquarters of the United Nations,[14] New York is an
            important
            center for international diplomacy."

          />

          <Card
            imgsrc="singapore.jpg"
            title="Singapore"
            paragraph="Singapore , officially the Republic of Singapore, is a sovereign
            island city-state in maritime Southeast Asia. It lies about one degree of latitude (137 kilometres
            or 85
            miles) north of the equator, off the southern tip of the Malay Peninsula, bordering the Straits of
            Malacca
            to the west, the Riau Islands (Indonesia) to the south, and the South China Sea to the east. The
            country's
            territory is composed of one main island, 63 satellite islands and islets, and one outlying islet,
            the
            combined area of which has increased by 25% since the country's independence as a result of
            extensive
            land
            reclamation projects. It has the second greatest population density in the world. The country has
            almost
            5.7
            million residents, 61% (3.4 million) of whom are Singaporean citizens. There are four official
            languages
            of
            Singapore: English, Malay, Chinese and Tamil, with English being the lingua franca. Multiracialism
            is
            enshrined in the constitution, and continues to shape national policies in education, housing, and
            politics."

          />


        </div>


        <div class="row2">
          <Card
            imgsrc="hall.jfif"
            title="Grand Central Oyster Restaurant"
            paragraph="Its architecture features the vaulted, Guastavino tiled ceilings common in the era of its
            construction.
            The
            archway in front of the restaurant is also famous for an acoustical quirk making it a whispering
            gallery
            by
            which someone standing in one corner can hear someone standing in the opposite corner perfectly no
            matter
            how softly they speak."

          />

          <Card
            imgsrc="buildings.jfif"
            title="Flatiron Building"
            paragraph="The Flatiron Building, originally the Fuller Building,[A] is a triangular 22-story,[5] 285-foot-tall
            (86.9 m) steel-framed landmarked building located at 175 Fifth Avenue in the Flatiron District
            neighborhood of the borough of Manhattan, New York City. Designed by Daniel Burnham and Frederick
            Dinkelberg, it was one of the tallest buildings in the city upon its 1902 completion, at 20 floors
            high,[6] and one of only two skyscrapers north of 14th Street – the other being the Metropolitan
            Life
            Insurance Company Tower, one block east. The building sits on a triangular block formed by Fifth
            Avenue,
            Broadway, and East 22nd Street – where the building's 87-foot (27 m) back end is located – with East
            23rd Street grazing the triangle's northern (uptown) peak. As with numerous other wedge-shaped
            buildings, the name Flatiron derives from its resemblance to a cast-iron clothes iron."

          />

          <Card
            imgsrc="street.jfif"
            title="Bal du moulin de la Galette"
            paragraph="Bal du moulin de la Galette (commonly known as Dance at Le moulin de la Galette) is an 1876 painting
            by
            French artist Pierre-Auguste Renoir. It is housed at the Musée d'Orsay in Paris and is one of
            Impressionism's most celebrated masterpieces.[1] The painting depicts a typical Sunday afternoon at
            the
            original Moulin de la Galette in the district of Montmartre in Paris. In the late 19th century,
            working
            class Parisians would dress up and spend time there dancing, drinking, and eating galettes into the
            evening"

          />

        </div>
        <div class="row3">

          <Card
            imgsrc="galiyara.jfif"
            title="Boston National Historical Park"
            paragraph="The Boston National Historical Park is an association of sites that showcase Boston's role in the
            American
            Revolution. It was designated a national park on October 1, 1974. Seven of the eight sites are
            connected
            by
            the Freedom Trail, a walking tour of downtown Boston. All eight properties are National Historic
            Landmarks."

          />

          <Card
            imgsrc="greenary.jfif"
            title="Greenary"
            paragraph="Greenery is the plants, herbs, shrubs, and trees surrounding us. However, with the growing population
            and
            urbanization, this greenery is getting depleted, and cities are getting transformed into concrete
            jungles.

            There is an urgent need to preserve existing greenery as well as grow new plants for the existence
            of
            human
            beings on this planet."

          />

          <Card
            imgsrc="bridge.jfif"
            title="Bridge"
            paragraph="A bridge is a structure built to span a physical obstacle, such as a body of water, valley, or road,
            without
            closing the way underneath. It is constructed for the purpose of providing passage over the
            obstacle,
            usually something that is otherwise difficult or impossible to cross. There are many different
            designs
            that
            each serve a particular purpose and apply to different situations. Designs of bridges vary depending
            on
            the
            function of the bridge, the nature of the terrain where the bridge is constructed and anchored, the
            material
            used to make it and the funds available to build it."

          />

        </div>
      </div>
      <hr />
      <div class="container3">
        <div class="card1" style={{ width: 18 + 'rem' }}>
          <img class="card-img-top" src="street.jfif" alt="street.jfif" />
          <div class="card-body">
            <p class="card-text">
              <h3>Sudip Mahato</h3>
            </p>
          </div>
        </div>
      </div>
    </>
  );

}

export default App;
