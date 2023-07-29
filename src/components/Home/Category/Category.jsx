import { useNavigate } from "react-router-dom";
import "./Category.scss";

const Category = ({ categories }) => {
    const navigate = useNavigate();
    return (
        <div className="shop-by-category">
            <div className="categories">
                {categories?.data?.map((item) => (
                    <div
                        key={item.id}
                        className="category"
                        onClick={() => navigate(`/Category/${item.id}`)}
                    >
                        <img
                            src={
                                process.env.REACT_APP_DEV_URL + item.attributes.img.data[0].attributes.url
                            }
                            alt=""
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
