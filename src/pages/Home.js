import React from 'react';
import styled from 'styled-components';
import Carousel from '../components/Carousel';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeContainer = styled.div`
  padding: 20px;
  text-align: center;
  color: #2F9ABF;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
`;

const BreadSliceContainer = styled.div`
  width: 350px; /* Increased width */
  height: 400px; 
  background-color: #f5deb3; 
  border-radius: 100px 100px 0 0; 
  overflow: hidden;
  position: relative;
  margin-right: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Added shadow */
  
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const Logo = styled.img`
  width: 100%;
  height: 111%;
  object-fit: cover;
  margin: -45px auto 0; /* Move up by 20px and center horizontally */

`;

const WelcomeText = styled.h1`
  font-family: 'Arial', sans-serif;
  color: #2F9ABF;
`;

const AboutSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f8f8f8;
  padding: 40px;
  border-radius: 10px;
  margin-top: 20px;
`;

const AboutTextContainer = styled.div`
  flex: 1;
  text-align: left;
  margin-right: 20px;
`;

const AboutTitle = styled.h2`
  font-family: 'Pacifico', cursive;
  color: #2F9ABF;
  margin-bottom: 20px;
`;

const AboutText = styled.p`
  font-family: 'Roboto', sans-serif;
  color: #2F9ABF;
  margin-bottom: 30px;
  font-size: 1.2em;
`;

const SatisfactionBars = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const BarContainer = styled.div`
  width: 100%;
  text-align: left;
  margin-bottom: 20px;
`;

const BarTitle = styled.h4`
  font-family: 'Roboto', sans-serif;
  color: #2F9ABF;
  margin-bottom: 10px;
`;

const Bar = styled.div`
  background-color: #ffd6e7;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  height: 30px;
  margin-top: 10px;
`;

const Progress = styled.div`
  background-color: #ff85a2;
  width: ${({ width }) => width};
  height: 100%;
  transition: width 0.5s ease;
`;

const TeamSection = styled.section`
  background-color: #BEEEFF;
  padding: 40px;
  border-radius: 10px;
  margin-top: 20px;
  text-align: center;
`;

const TeamTitle = styled.h2`
  font-family: 'Pacifico', cursive;
  color: #2F9ABF;
  margin-bottom: 20px;
`;

const TeamContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const TeamMember = styled.div`
  background-color: #BEEEFF;
  padding: 20px;
  border-radius: 10px;
  width: 45%;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const MemberImage = styled.img`
  border-radius: 50%;
  width: 300px;
  height: 300px;
  margin-bottom: 10px;
`;

const MemberName = styled.h2`
  font-family: 'Roboto', sans-serif;
  color: #2F9ABF;
`;

const MemberRole = styled.p`
  font-family: 'Roboto', sans-serif;
  color: #2F9ABF;
`;

const TestimonialsSection = styled.section`
  background-color: #fff7f8;
  padding: 40px;
  border-radius: 10px;
  margin-top: 20px;
  text-align: center;
`;

const TestimonialTitle = styled.h2`
  font-family: 'Pacifico', cursive;
  color: #2F9ABF;
  margin-bottom: 20px;
`;

const TestimonialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Testimonial = styled.div`
  background-color: #ffe6f2;
  padding: 20px;
  border-radius: 10px;
  margin: 10px;
  width: 90%;
  max-width: 900px;
  text-align: left;
`;

const TestimonialText = styled.p`
  font-family: 'Roboto', sans-serif;
  color: #2F9ABF;
  font-size: 1.2em;
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const AuthorImage = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

const AuthorName = styled.h4`
  font-family: 'Roboto', sans-serif;
  color: #2F9ABF;
`;

const InstagramSection = styled.section`
  display: flex;
  align-items: center;
  padding: 40px;
  border-radius: 10px;
  margin-top: 20px;
`;

const InstagramTextContainer = styled.div`
  flex: 1;
  max-width: 50%;
  margin-right: 20px;
  background: rgba(255, 255, 255, 0.8); /* Slightly transparent background */
  padding: 20px;
  border-radius: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px; /* Uniform gap between texts */
`;

const InstagramTitle = styled.h1`
  font-family: 'Algerian', sans-serif; /* Updated font */
  color: #2F9ABF;
  font-weight: normal; /* Removed boldness */
  font-size: 1.5em; /* Adjust size as needed */
  margin: 0;
`;

const InstagramTagline = styled.p`
  font-family: 'Calbiri', cursive; /* Font for tagline */
  color: #2F9ABF; /* Shade of blue */
  font-size: 2.3em; /* Larger size than the title */
  font-style: italic; /* Italics */
  margin: 0; /* Removed margin for uniform gap */
`;

const InstagramHandleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const InstagramLogo = styled.img`
  width: 30px; 
  height: 30px;
`;

const InstagramHandle = styled.a`
  color: #2F9ABF; /* Adjust color as needed */
  text-decoration: none;
  font-family: 'Arial', sans-serif;
  font-size: 25px;
  &:hover {
    text-decoration: underline;
  }
`;

const InstagramImages = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  justify-content: flex-end;
`;

const InstagramImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  transform: skew(-5deg); /* Skew to create parallelogram effect */
  /* Adjust positioning to achieve the pattern */
  transform: ${({ column }) => column === 2 ? 'skew(0deg)' : 'skew(-5deg)'};
  /* Use CSS Grid to position images */
  grid-row: ${({ row }) => row};
  grid-column: ${({ column }) => column};
`;

const MapSection = styled.section`
  padding: 20px;
  background-color: #f0f8ff; /* Light background color for contrast */
  border-radius: 10px;
  margin-top: 20px;
`;

const MapTitle = styled.h2`
  font-family: 'Pacifico', cursive;
  color: #2F9ABF;
  margin-bottom: 20px;
`;

const Map = styled.iframe`
  width: 100%;
  height: 300px;
  border: 0;
  border-radius: 10px;
  margin-top: 20px;
`;

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <HomeContainer>
      <HeaderContainer>
        <BreadSliceContainer>
          <Logo src="./drooling tails logo.png" alt="Drooling Tails Logo" />
        </BreadSliceContainer>
        <WelcomeText>
          <h2>WELCOME TO DROOLING TAILS! </h2>
          <h2>The Best Part? It's Pooch Approved !!!!</h2>
          </WelcomeText>
      </HeaderContainer>
      <Carousel />
      <AboutSection>
        <AboutTextContainer>
          <AboutTitle>About the Bakery</AboutTitle>
          <AboutText>
            Drooling Tails Pet Bakery was started by our fussy eater Chef Nemo and his clumsy hooman in her 20s. 
            Here we make pretty and droolicious stuffs for your poochh 🍕🧁. 
          </AboutText>
        </AboutTextContainer>
        <SatisfactionBars>
          <BarContainer>
            <BarTitle>Cake Design</BarTitle>
            <Bar>
              <Progress width="98%" />
            </Bar>
          </BarContainer>
          <BarContainer>
            <BarTitle>Cake Recipe</BarTitle>
            <Bar>
              <Progress width="95%" />
            </Bar>
          </BarContainer>
          <BarContainer>
            <BarTitle>Pet Satisfaction</BarTitle>
            <Bar>
              <Progress width="100%" />
            </Bar>
          </BarContainer>
        </SatisfactionBars>
      </AboutSection>
      <TeamSection>
        <TeamTitle>Meet the Team</TeamTitle>
        <TeamContainer>
          <TeamMember>
            <MemberImage src="./nemo.jpeg" alt="Chef Nemo" />
            <MemberName>Chef Nemo</MemberName>
            <MemberRole>Head Baker</MemberRole>
          </TeamMember>
          <TeamMember>
            <MemberImage src="./hooman.jpeg" alt="Clumsy Hooman" />
            <MemberName>Clumsy Hooman(Saurabhi Deokar)</MemberName>
            <MemberRole>Assistant Baker</MemberRole>
          </TeamMember>
        </TeamContainer>
      </TeamSection>
      <TestimonialsSection>
        <TestimonialTitle>Testimonials</TestimonialTitle>
        <Slider {...settings}>
          <TestimonialContainer>
            <Testimonial>
              <TestimonialText>"The cakes from Drooling Tails are a delight! My dog loves them."</TestimonialText>
              <Author>
                <AuthorImage src="public/author1.jpg" alt="Author 1" />
                <AuthorName>Jane Doe</AuthorName>
              </Author>
            </Testimonial>
          </TestimonialContainer>
          <TestimonialContainer>
            <Testimonial>
              <TestimonialText>"Great variety and quality. My pets can't get enough."</TestimonialText>
              <Author>
                <AuthorImage src="public/author2.jpg" alt="Author 2" />
                <AuthorName>John Smith</AuthorName>
              </Author>
            </Testimonial>
          </TestimonialContainer>
          <TestimonialContainer>
            <Testimonial>
              <TestimonialText>"My dog has never been happier. The treats are amazing!"</TestimonialText>
              <Author>
                <AuthorImage src="public/author3.jpg" alt="Author 3" />
                <AuthorName>Sarah Johnson</AuthorName>
              </Author>
            </Testimonial>
          </TestimonialContainer>
          <TestimonialContainer>
            <Testimonial>
              <TestimonialText>"Highly recommend for any dog owner. Fantastic quality!"</TestimonialText>
              <Author>
                <AuthorImage src="public/author4.jpg" alt="Author 4" />
                <AuthorName>Michael Brown</AuthorName>
              </Author>
            </Testimonial>
          </TestimonialContainer>
          <TestimonialContainer>
            <Testimonial>
              <TestimonialText>"The best bakery for pets in town. Exceptional service."</TestimonialText>
              <Author>
                <AuthorImage src="public/author5.jpg" alt="Author 5" />
                <AuthorName>Linda Davis</AuthorName>
              </Author>
            </Testimonial>
          </TestimonialContainer>
          <TestimonialContainer>
            <Testimonial>
              <TestimonialText>"My dog loves the treats from Drooling Tails. Highly satisfied!"</TestimonialText>
              <Author>
                <AuthorImage src="public/author6.jpg" alt="Author 6" />
                <AuthorName>Chris Lee</AuthorName>
              </Author>
            </Testimonial>
          </TestimonialContainer>
        </Slider>
      </TestimonialsSection>
      <InstagramSection>
        <InstagramTextContainer>
          <InstagramTitle>FOLLOW US ON INSTAGRAM</InstagramTitle>
          <InstagramTagline>Sweet Moments are best saved memories!</InstagramTagline>
          <InstagramHandleContainer>
            <InstagramLogo src="/instagram-logo.png" alt="Instagram Logo" />
            <InstagramHandle href="https://www.instagram.com/droolingtails_petbakery" target="_blank" rel="noopener noreferrer">
              @droolingtails_petbakery
            </InstagramHandle>
          </InstagramHandleContainer>
        </InstagramTextContainer>
        <InstagramImages>
          <InstagramImage src="/p1.jpeg" alt="Instagram 1" column="1" row="1 / span 2" />
          <InstagramImage src="/p10.jpeg" alt="Instagram 2" column="2" row="1 / span 1" />
          <InstagramImage src="/p8.jpeg" alt="Instagram 3" column="3" row="1 / span 2" />
          <InstagramImage src="/p12.jpeg" alt="Instagram 4" column="1" row="2" />
          <InstagramImage src="/p16.jpeg" alt="Instagram 5" column="2" row="2" />
          <InstagramImage src="/p3.jpeg" alt="Instagram 6" column="3" row="2" />
        </InstagramImages>
      </InstagramSection>
      <MapSection>
      <MapTitle>Our Location</MapTitle>
      <Map
        src="https://www.google.com/maps/embed/v1/place?q=dahanukarvadi+kandivali+west&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
        allowFullScreen=""
        loading="lazy"
      ></Map>
    </MapSection>
    </HomeContainer>
  );
};

export default Home;