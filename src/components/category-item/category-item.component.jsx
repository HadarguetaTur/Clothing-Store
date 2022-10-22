import { DirectoryItemContainer, BackgroundImage, Body } from './category-item.style.jsx'
import { useNavigate } from 'react-router-dom'


const CategoryItem = ({ category }) => {
  const { imageUrl, title,route } = category

  const navigate=useNavigate()

  const onNavigateHandler=()=>navigate(route)
  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl}>
        <Body>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </Body>
      </BackgroundImage>
    </DirectoryItemContainer>

  )
}

export default CategoryItem