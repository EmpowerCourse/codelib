import React, { Component } from 'react';
import { Container, Nav, NavItem, NavLink, Col, Row, Card, CardBody, Form, Alert, Button, Label, Input} from 'reactstrap';
import {api, helpers} from '../utils';

export default class StoryDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <header className="App-header">
        <a href="/adLib">Do an Ad Lib Now</a> or <a href="/admin">Maintain your ad lib options</a>
      </header>);
  }
}