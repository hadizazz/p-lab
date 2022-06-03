import React,{useState} from 'react'
import Card from 'react-bootstrap/Card'
import { Button, Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import dataProduk from "../../data.json";
import {Link} from "react-router-dom"
import { useParams } from 'react-router-dom';

const CardDetail = () => {
  const [data,setData] = useState(dataProduk)

  const {productid} = useParams();
  const id = productid
  const thisProduct = dataProduk.find (prod => prod.id == id);
  const result = data.filter((item) => {
    return item.kategori === thisProduct.kategori;
    
  });
  function refreshPage(){      
    window.parent.location = window.child.location; 
   }

  return (
    <div>
      <Row>
        <Col className="text-start">
          <h3>Related products</h3>
        </Col>
      </Row>
      <Row xs={1} lg={3} md={2} sm={2} xl={4} className="g-4">
      {result.map((item,index) => {
                return (
                  <Col className="my-5" id="#featured" >
                    <Link onClick={refreshPage} to={{ pathname: `/detail/${item.id}`, 
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

export default CardDetail