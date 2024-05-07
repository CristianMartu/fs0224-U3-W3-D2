import { Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addFavourite, removeFavourite } from '../redux/actions'

const Job = ({ data }) => {
  const dispatch = useDispatch()
  const favourites = useSelector((state) => state.favouriteJob.content)
  const isFavourite = favourites.findIndex((fav) => fav._id === data._id) !== -1

  return (
    <Row
      className={
        isFavourite
          ? 'mx-0 mt-3 p-3 border border-primary rounded'
          : 'mx-0 mt-3 p-3 border border-secondary-subtle rounded'
      }
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={8}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col xs={1}>
        <i
          className={isFavourite ? 'bi bi-star-fill me-2 colorSelected' : 'bi bi-star-fill me-2'}
          onClick={(e) => {
            if (!isFavourite) {
              dispatch(addFavourite(data))
            } else {
              dispatch(removeFavourite(data._id))
            }
          }}
        ></i>
      </Col>
    </Row>
  )
}

export default Job
