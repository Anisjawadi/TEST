import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTache } from '../../../redux/actions/tacheAction';
import { Button } from '@material-ui/core'
import axios from 'axios';
import {
  Card,
  Form,
  Container,
  Row,
  Col,
} from "react-bootstrap";




const initialValue = {
  description: '',
  deadline: '',
}
function AddTache() {


  const [post, settacheData] = useState(initialValue);
  const { description, deadline } = post;

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(post);
    await axios.post("/tache", post);



  };

  return (
    <div>
      <>

        <Container fluid>
          <Row>
            <Col md="8">
              <Card>
                <Card.Header>
                  <Card.Title as="h4">Ajouter une tache</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col className="pr-1" md="6">
                        <Form.Group>
                          <label>description </label>
                          <Form.Control
                            defaultValue=""
                            onChange={(e) => settacheData({ ...post, description: e.target.value })}
                            placeholder="name"
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="pl-1" md="6">
                        <Form.Group>
                          <label defaultValue="this is a software categorie">
                            deadline
                          </label>
                          <Form.Control
                            defaultValue=""
                            onChange={(e) => settacheData({ ...post, deadline: e.target.value })}
                            placeholder="description"
                            type="date"

                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>


                    <Row>






                    </Row>


                    <Button
                      sx={{ m: 2 }}
                      type="submit"
                      variant="contained" color="primary"
                    >
                      Ajouter une tache
                    </Button>
                    <div className="clearfix"></div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>

          </Row>
        </Container>
      </>
    </div>
  );
}
export default AddTache;
