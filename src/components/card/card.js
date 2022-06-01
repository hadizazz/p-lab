import React,{useState} from 'react'
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import dataProduk from "../../data.json";
import {Link} from "react-router-dom"

const Cardhome = () => {
  const [data,setData] = useState(dataProduk)
  const result = data.filter((item) => {
    return item.kategori === 'anime';
    
  });

  return (
    <div className='container my-3'>
      <Row className="py-3 border-bottom border-top border-dark">
        <Col className="text-start font-weight-bold text-uppercase" >
          <h3 style={{lineHeight:"1.4"}}>New Action Figure</h3>
        </Col>
       
        <Col className="text-end">
          <Button href="/shop" size="lg" variant="success">Load More</Button>
        </Col>

      </Row>
      <Row xs={1} lg={3} md={2} sm={2} xl={5} className="g-4">
      {data.map((item,index) => {
                return (
                  <Col className="my-5" key={index} >
                     
                    <Link to={{ pathname: `/detail/${item.id}`, 
                    item: item,}} >
                      <Card style={{ width: "100%", height: "auto" }}>
                        <Card.Img
                          className="__card"
                          variant="top"
                          src={item.image}
                        />
                        <Card.Body>
                          <Card.Title>{item.name}</Card.Title>
                          <Card.Text>Rp.{item.price}</Card.Text>

                          <Card.Footer>
                            <small className="text-muted">
                              {`Last update ${item.last_update} ago`}
                            </small>
                          </Card.Footer>
                        </Card.Body>
                      </Card>
                    </Link>
                  </Col>
                );
            })}
      </Row>
    </div>
  );
}

export default Cardhome