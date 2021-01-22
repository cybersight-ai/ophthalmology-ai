import './App.css';
import "semantic-ui-css/semantic.min.css";
import logo from "./components/cybersight-logo.png"
import {
  Container,
  Header,
  Image,
  Icon,
  Segment,
  } from "semantic-ui-react";
import pubs_data from "./data/publications.json";


function App() {

  const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 3
        }}
    />
);

  return (
    <div className="App">
      <Container>
        <Header as="h1" textAlign="center">
          <Image src={logo} />
          <Header.Content>Awesome AI in Ophthalmology</Header.Content>
          <Header.Subheader>
            Powered by Cybersight-AI
          </Header.Subheader>
        </Header>

        <Segment padded="very" raised size="large">
          <Header as="h3" dividing>
            <Icon name="question circle" />
            <Header.Content>
              About
              <Header.Subheader>
                What is AI in Ophthalmology all about?
              </Header.Subheader>
            </Header.Content>
          </Header>
          <Segment basic size="medium">
            Artificial Intelligence in Ophthalmology is an ever-growing field.
            The aim of this site is to provide a source of truth for all resources
            involving AI in Ophthalmology, to better understand the field, and build
            a community in which we can better help the world see.
            <br />
          <ColoredLine color="black" />
          <Segment basic size="large">
            {pubs_data.map(pubs_data => (
              <li key={pubs_data.id}>
                <div>
                  <Header as="h3">
                    {pubs_data.title}
                    <Header.Subheader>
                      <a href={pubs_data.url}>
                        Visit Publication Here
                      </a>
                    </Header.Subheader>
                  </Header>
                  <Segment basic size="small">
                    Published: {pubs_data.publication_date}
                  </Segment>
                  <Segment basic size="medium">
                    Authors: {pubs_data.authors}
                  </Segment>
                  <Segment basic size="medium">
                    {pubs_data.abstract}
                  </Segment>
                </div>
              </li>
                ))}
          </Segment>
          </Segment>
        </Segment>
      </Container>
    </div>
  );
}


export default App;