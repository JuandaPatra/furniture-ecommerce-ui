import React from "react";
import {} from "react-icons";
import { Container, Nav, NavDropdown, Navbar, Image, Button, FormControl } from "react-bootstrap";
import "./app.scss";

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      urlHandyCraft : [
        "https://images.unsplash.com/photo-1536000800373-5b5e6020910a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=752&q=80",
        "https://images.unsplash.com/photo-1574492909849-65ec00d8a2f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=751&q=80",
        "https://images.unsplash.com/photo-1616452311131-20a5aa12c4f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
      ],
      urlWooden : [
        "https://images.unsplash.com/photo-1564383424695-05a0668266ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=811&q=80",
        "https://images.unsplash.com/photo-1617325710236-4a36d46427c4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",
        "https://images.unsplash.com/photo-1568536475170-8481d47207ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"

      ],
      urlRattan : [
        "https://images.unsplash.com/photo-1617325721270-06dce2689456?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=751&q=80",
        "https://images.unsplash.com/photo-1469026227579-2c49c44af087?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80",
        "https://images.unsplash.com/photo-1616627687285-a0dec970e4fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=728&q=80"

      ]
    }
  }

  // handyCraft =()=>{
  //   this.state.urlHandyCraft.map(item => console.log(item))
  // }
  render() {
    return (
      <div className="home">
        <div>
          <Navbar bg="transparent" expand="lg">
            <Container>
              <Navbar.Brand href="#home" style={{ color: "#301e0f", fontWeight: "bold", fontSize: "larger" }}>
                Trans-Wooden.ltd
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">Link</Nav.Link>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>

        <div className="banner">
          <div className="banner-top">
            <Image src="https://images.unsplash.com/photo-1616464916356-3a777b2b60b1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" className="banner-img" />
            <div className="banner-capt">
              <h1>We Export Furniture,Handycraft. Wooden and Rattan Combination.</h1>
              <Button variant="secondary" style={{ backgroundColor: "#301e0f", border: "none", height: "10vh", borderRadius: "12px" }}>
                Gallery Product
              </Button>
            </div>
          </div>
        </div>
        <div className="banner-about">
          <h1 style={{ textAlign: "center", fontWeight:"bold" }}>About Us</h1>
          <div className="about-caption">
            <div className="about-cloud1">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, perferendis nostrum necessitatibus quam vitae debitis cupiditate ipsum qui culpa pariatur.</p>
            </div>
            <div className="about-cloud2">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, perferendis nostrum necessitatibus quam vitae debitis cupiditate ipsum qui culpa pariatur.</p>
            </div>
            <Image src="https://images.unsplash.com/photo-1625585598750-3535fe40efb3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" className="about-img" />
          </div>
        </div>

        <div className="catalogue">
          <h1 style={{ textAlign: "center",fontWeight:"bold" }}>CATALOGUE</h1>
          <h1>HandyCraft</h1>
          <div className="handyCraft">
            <Image src="https://images.unsplash.com/photo-1536000800373-5b5e6020910a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=752&q=80" className="cata-handy" />
            <Image src="https://images.unsplash.com/photo-1574492909849-65ec00d8a2f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=751&q=80" className="cata-handy" />
            <Image src="https://images.unsplash.com/photo-1616452311131-20a5aa12c4f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80" className="cata-handy" />
          </div>
          <h1>Wooden</h1>
          <div className="wooden">
            <Image src="https://images.unsplash.com/photo-1564383424695-05a0668266ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=811&q=80" className="cata-handy" />
            <Image src="https://images.unsplash.com/photo-1617325710236-4a36d46427c4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80" className="cata-handy" />
            <Image src="https://images.unsplash.com/photo-1568536475170-8481d47207ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80" className="cata-handy" />
          </div>
          <h1>Rattan</h1>
          <div className="rattan">
            <Image src="https://images.unsplash.com/photo-1617325721270-06dce2689456?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=751&q=80" className="cata-handy" />
            <Image src="https://images.unsplash.com/photo-1469026227579-2c49c44af087?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80" className="cata-handy" />
            <Image src="https://images.unsplash.com/photo-1616627687285-a0dec970e4fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=728&q=80" className="cata-handy" />
          </div>
        </div>

        <div className="contact-us">
          <div>
            <Image src="https://images.unsplash.com/photo-1616627687285-a0dec970e4fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=728&q=80" className="email-img" />
          </div>
          <div className="email">
            <h1 style={{textAlign:"center",fontWeight:"bold"}}>Contact Us</h1>
            <FormControl placeholder="Username" aria-label="Name" aria-describedby="basic-addon1" className="input" />
            <FormControl placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" className="input" />
            <FormControl placeholder="Number" aria-label="Phone Number" aria-describedby="basic-addon1" className="input" />
            <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Message" rows="3"></textarea>
            <div style={{display:"flex", justifyContent:"center", marginTop:"3vh"}}>
            <Button variant="primary">Send</Button>
            </div>
          </div>
        </div>

        {/* {this.handyCraft()} */}
      </div>
    );
  }
}

export default App;
