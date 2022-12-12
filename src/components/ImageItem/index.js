import './index.css'

const ImageItem = props => {
  const {eachImageItem, getThumbnailId} = props

  const {id, thumbnailUrl} = eachImageItem
  const onClickThumbnailItem = () => {
    getThumbnailId(id)
  }

  return (
    <li className="thumbnail-item">
      <button
        type="button"
        className="thumbnail-btn"
        onClick={onClickThumbnailItem}
      >
        <img src={thumbnailUrl} alt="thumbnail" className="thumb-nail-image" />
      </button>
    </li>
  )
}

export default ImageItem
