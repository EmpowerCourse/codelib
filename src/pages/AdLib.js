import React, { Component } from 'react';
import { Container, Nav, NavItem, NavLink, TabContent, TabPane, Col, Row, Card, CardBody, Form, Alert, Button, Label, Input} from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';
import {api, helpers} from '../utils';
import _ from "lodash";

export default class AdLib extends Component {
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
            <h3>Ad Lib Title</h3>
          </Col>
        </Row>
        <Row>
          <Col sm={{size: 4, offset: 4}}>
            <Card>
              <CardBody>
                <div>
                  <Form>
                    <Row className="mt-2 mb-2 melissaCard">
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