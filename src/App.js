import React, { Component } from 'react';
import { Col, Row, Input, Button } from 'react-materialize'
import * as jsPDF from 'jspdf'

import './App.css';

let doc = new jsPDF()

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fieldOne: '',
      fieldTwo: '',
    }
  }

  updateForm(field, data) {
    this.setState({[field]: data})
  }

  createPDF() {
    doc.text(this.state.fieldOne, 20, 20)
    doc.text(this.state.fieldTwo, 20, 30)
    doc.save('PDF_Demo.pdf')
  }

  render() {
    return (
      <Row className="Form">
        <Col l={12} m={12} s={12} className="margin-top"></Col>
        <Col l={4} m={4} s={3}></Col>
        <Col l={4} m={4} s={6}>
          <Input placeholder="Test Text" s={12} label="PDF_Demo" onChange={e => this.updateForm('fieldOne', e.target.value)}/>
          <Input s={12} label="Another Value" onChange={e => this.updateForm('fieldTwo', e.target.value)}/>
          <Button onClick={()=> this.createPDF()}>Create PDF</Button>
        </Col>
      </Row>
    );
  }
}

export default App;
