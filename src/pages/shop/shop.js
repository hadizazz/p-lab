import React,{useState, useEffect} from 'react';
import { Container, Row,Col,Button,} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import dataProduk from "../../data.json";
import {Link} from "react-router-dom";
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const Shop = () => {
    const [sort,setSort] = useState("")
    const [data,setData] = useState(dataProduk)
    const onChange = (value) => {
        setSort(value)
    }
    useEffect(() => {
    if (sort === "popularity"){
        const sorted = [...data].sort((a, b) => a.popularity - b.popularity)
        setData(sorted)
    }
    if (sort === "low"){
        const sorted = [...data].sort((a, b) => a.price - b.price)
        setData(sorted)
    }
    if (sort === "high"){
        const sorted = [...data].sort((a, b) => b.price - a.price)
        setData(sorted)
    }
    if (sort === "latest"){
        const sorted = [...data].sort((a, b) => a.date_created - b.date_created)
        setData(sorted)
        console.log(sorted)
    }
    if (sort === "rating"){
        const sorted = [...data].sort((a, b) => a.rating - b.rating)
        setData(sorted)
    }
    console.log(sort)

    },[sort]);
    console.log(data);
    const [setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(2);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data.slice(indexOfFirstPost,indexOfLastPost);
    const paginate = pageNumber => setCurrentPage(pageNumber);
    const Pagination = ({postsPerPage, totalPosts, paginate}) => {
     const pageNumbers = [];
    for(let i=1; i<= Math.ceil(totalPosts / postsPerPage); i++){
     pageNumbers.push(i);
    }

    return(
        <div>
          <Row>
          {pageNumbers.map(number => (
            <div className="_paginate" key={number} >
                <Button variant="outline-dark" onClick={() => paginate(number)} >{number}</Button>
            </div>
          ))}
          </Row>
        </div>
    )}
  return (
    <Container className="mb-5">
      <Row className="pt-5 pb-1">
        <div>
            <Breadcrumb>
              <Breadcrumb.Item className="breadcrumb-style" href="/">
                Home
              </Breadcrumb.Item>
              <Breadcrumb.Item active>Shop</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <Col   className="text-start"  >
            <h3 >New Action Figure</h3>
          </Col>
          <Col className="text-end fs-5 pt-2">
          <select name="cars" defaultValue={" "} id="cars" onChange={(e) => onChange(e.target.value)}>
              <option value=" " hidden>Select sort</option>
              <option value="popularity">sort by popularity</option>
              <option value="high">sort by high to low</option>
              <option value="low">sort by low to high</option>
              <option value="latest">sort by latest</option>
              <option value="rating">sort average rating</option>
          </select>
          </Col>
        </Row>
          <Row xs={1} lg={3} md={2} sm={2} xl={5} className="g-4">
              {currentPosts.map((item,index) => {
                return (
                    <Col className="my-5">
                      <Link to={{ pathname: `/detail/${item.id}`, 
                      item: item,}} >
                        <Card style={{ width: "100%", height: "auto" }}>
                          <Card.Img
                            className="___card"
                            variant="top"
                            src={item.image}
                          />
                          <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>{item.price}</Card.Text>
                            {/* <div className="my-3">
                              <Button variant="success" size="sm" href=""> Add To Cart  </Button>
                            </div> */}
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
          <Pagination postsPerPage={postsPerPage} totalPosts={data.length} paginate={paginate}/>
    </Container>
  )
}

export default Shop
