import { Col, Container, Row } from 'react-bootstrap'
import { FaHome } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Job from './Job'

const FavouriteJob = () => {
  const jobs = useSelector((state) => state.favouriteJob.content)
  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4 ">Favourite Company: </h1>
          <Link to="/" className="btn btn-primary d-inline-block">
            <FaHome />
          </Link>

          {jobs.length > 0 ? (
            jobs.map((jobData) => <Job key={jobData._id} data={jobData} />)
          ) : (
            <Row className="mx-0 mt-3 p-3" style={{ border: '1px solid #00000033', borderRadius: 4 }}>
              <Col>Empty</Col>
            </Row>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default FavouriteJob
