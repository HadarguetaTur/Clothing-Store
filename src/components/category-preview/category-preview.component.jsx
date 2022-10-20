import './category-preview.styles.scss'
import ProuctCard from '../product-card/product-card.component'


const CategoryPreview = ({ title, products }) => {
    return (
        <div className='category-preview-container'>
            <h2>
                <span className='title'>
                    {title.toUpperCase()}
                </span>
            </h2>
            <div className='preview'>
                {
                    products.filter((_, idx) => idx < 4)
                        .map((product) =>
                            <ProuctCard key={product.id} product={product} />
                        )}
            </div>
        </div>
    )
}

export default CategoryPreview