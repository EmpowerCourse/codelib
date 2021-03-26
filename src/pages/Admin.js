import React, { Component } from 'react';
import { Container, Nav, NavItem, NavLink, TabContent, TabPane, Col, Row, Card, CardBody, Form, Alert, Button, Label, Input} from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';
import {api, helpers} from '../utils';
import _ from "lodash";

export default class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      username: props.username ? props.username : "",
      library: {
        shelves: {
          books: {
            name: ""
          }
        }
      },
      email: ""
    };
    // this.onChange = this.onChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleFlatStateChange = this.handleFlatStateChange.bind(this);
  }

  // TO DO LIST:
  // 1. React Life Cycles __> did upate and will unmount ----
  // 2. Local Storage
  // 3. Object manipulation
  // 4. Array manipulation

  //     "key": value
  // const sampleObject = {
  //   "fruitName": "banana",
  //   fruitName: "banana"
  // }

  // const sampleArray = [];

  // Component is now "active"
  componentDidMount() {
    let orange = {
      smell: "sweetiness",
      shape: "round"
    };
    console.log("first", orange.shape);
    console.log("first change", orange["color"]);
    orange.color = "orange";
    let bloodOrange = Object.assign({}, orange);
    bloodOrange.color = "red";
    console.log("second change", orange["color"]);
    const gerry = ["pear", "apple" , "cucumber", orange];
    // console.log('length 2', ["pear", "apple" , "cucumber", orange].length)
    // console.log("admin", gerry); 
  
  }

 

  // Component has props/state that changed
  componentDidUpdate() {

  }
  // Component has "deactivated"
  componentWillUnmount() {

  }
  // onChange(event, overrideName = 40) {
  //   const eventAction = event;
  //   let newName = eventAction.target.value;
  //   newName = newName + "Bob"
  //   if (newName.length > 10) {
  //     newName = overrideName
  //   }
  //   this.setState({ [eventAction.target.name]: eventAction.target.value})
  // }

  // onChangeEmail(event) {
  //   const eventAction = event;
  //   let newName = eventAction.target.value;
  //   console.log('event', newName)
  //   newName = newName + "@"
  //   console.log('event 2', newName)
  //   this.setState({ [eventAction.target.name]: newName} , () => {
  //     console.log("kittykat" , this.state.email);
  //     if (this.state.email.length > 20) {
  //       this.setState({ username: this.state.email})
  //     }
  //   })
  // }

  handleTextChange(event, callback, overrideName = "kalamazoo") {
    const eventAction = event;
    let newName = eventAction.target.value;
    if (eventAction.target.name === 'username') {
      newName = newName + "Bob"
      if (newName.length > 10) {
        newName = overrideName
      }
    } else {
      newName = newName + "@"
    }
    this.handleFlatStateChange([eventAction.target.name], newName, callback)
  }

  handleFlatStateChange(name, value, callback) {
    this.setState({[name]: value }, () => {
      if (callback && _.isFunction(callback)) {
        callback()
      }
    })
  }
  render(){
      if (this.state.redirect){
        return <Redirect to='/home' />;
      }
      return (
      <Container fluid>
        <Row>
          <Col>
            <h3>Maintain your Ad Lib stories and options</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <CardBody>
                <div>
                  <Form>
                    <Row className="mt-2 mb-2">
                      <Col>
                        <Label className="Label">Enter your username and we will send you a reset link.</Label>
                        <Input type="text"
                          value={this.state.username}
                          placeholder="Username"
                          name="username"
                          onChange={(event) => this.handleTextChange(event, "bwqahahah", "Timothy")}
                        />
                        <Input type="text"
                          value={this.state.email || ""}
                          placeholder="Email"
                          name="email"
                          onChange={(event) => this.handleTextChange(
                            event,
                            () => {
                              if (this.state.email.length > 20) {
                                this.handleFlatStateChange("username", this.state.email)
                              }
                            }
                          )}
                        />
                      </Col>
                    </Row>
                    <Button color="primary" className="float-right">
                      Send Me A Reset Password Email
                    </Button>
                  </Form>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      );
    }
}