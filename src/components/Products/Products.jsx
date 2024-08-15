import Product from "./Product";
import img1 from '../../assets/product/1.webp';
import img2 from '../../assets/product/2.webp';
import img3 from '../../assets/product/3.jpg';
import img4 from '../../assets/product/4.webp';
import img5 from '../../assets/product/5.jpeg';
import img6 from '../../assets/product/6.webp';
import img7 from '../../assets/product/7.webp';
import img8 from '../../assets/product/8.jpg';
import img9 from '../../assets/product/9.webp';
import img10 from '../../assets/product/10.webp';
import img11 from '../../assets/product/11.webp';
import img12 from '../../assets/product/12.jpg';
import img13 from '../../assets/product/13.jpg';
import img14 from '../../assets/product/14.webp';
import img15 from '../../assets/product/15.webp';
import img16 from '../../assets/product/16.webp';
import img17 from '../../assets/product/17.webp';
import img18 from '../../assets/product/18.jpg';
import img19 from '../../assets/product/19.webp';
const Products = () => {
    return (
        <div>
            <div className="text-center">
                <h3 className="text-xl font-bold">Featured Products
                </h3>
                <p className="mb-[30px]">Check & Get Your Desired Product!</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                <Product image={img1} checkout={"499৳ Discount on Checkout"} name={"OnePlus Nord N30 SE 5G Smartphone (4/128GB)"} price={"15,999"} discount={"1,999"}></Product>

                <Product image={img2} checkout={"499৳ Discount on Checkout"} name={"Intel Core i3-12100 12th Gen Budget Desktop PC"} price={"15,999"} discount={"1,999"}></Product>

                <Product image={img3} checkout={"499৳ Discount on Checkout"} name={"OnePlus Nord N30 SE 5G Smartphone (4/128GB)"} price={"15,999"} discount={"1,999"}></Product>

                <Product image={img4} checkout={"499৳ Discount on Checkout"} name={"OnePlus Nord N30 SE 5G Smartphone (4/128GB)"} price={"15,999"} discount={"1,999"}></Product>

                <Product image={img5} checkout={"499৳ Discount on Checkout"} name={"OnePlus Nord N30 SE 5G Smartphone (4/128GB)"} price={"15,999"} discount={"1,999"}></Product>

                <Product image={img6} checkout={"499৳ Discount on Checkout"} name={"OnePlus Nord N30 SE 5G Smartphone (4/128GB) OnePlus Nord N30 SE 5G Smartphone (4/128GB)"} price={"15,999"} discount={"1,999"}></Product>
               
                <Product image={img7} checkout={"499৳ Discount on Checkout"} name={"OnePlus Nord N30 SE 5G Smartphone (4/128GB)"} price={"15,999"} discount={"1,999"}></Product>
                <Product image={img8} checkout={"499৳ Discount on Checkout"} name={"OnePlus Nord N30 SE 5G Smartphone (4/128GB)"} price={"15,999"} discount={"1,999"}></Product>
                <Product image={img9} checkout={"499৳ Discount on Checkout"} name={"OnePlus Nord N30 SE 5G Smartphone (4/128GB)"} price={"15,999"} discount={"1,999"}></Product>
                <Product image={img10} checkout={"499৳ Discount on Checkout"} name={"OnePlus Nord N30 SE 5G Smartphone (4/128GB)"} price={"15,999"} discount={"1,999"}></Product>
                <Product image={img11} checkout={"499৳ Discount on Checkout"} name={"OnePlus Nord N30 SE 5G Smartphone (4/128GB)"} price={"15,999"} discount={"1,999"}></Product>
                <Product image={img12} checkout={"499৳ Discount on Checkout"} name={"OnePlus Nord N30 SE 5G Smartphone (4/128GB)"} price={"15,999"} discount={"1,999"}></Product>

                <Product image={img13} checkout={"499৳ Discount on Checkout"} name={"OnePlus Nord N30 SE 5G Smartphone (4/128GB)"} price={"15,999"} discount={"1,999"}></Product>

                <Product image={img14} checkout={"499৳ Discount on Checkout"} name={"OnePlus Nord N30 SE 5G Smartphone (4/128GB)"} price={"15,999"} discount={"1,999"}></Product>

                <Product image={img15} checkout={"499৳ Discount on Checkout"} name={"OnePlus Nord N30 SE 5G Smartphone (4/128GB)"} price={"15,999"} discount={"1,999"}></Product>
                <Product image={img16} checkout={"499৳ Discount on Checkout"} name={"OnePlus Nord N30 SE 5G Smartphone (4/128GB)"} price={"15,999"} discount={"1,999"}></Product>

                <Product image={img17} checkout={"499৳ Discount on Checkout"} name={"OnePlus Nord N30 SE 5G Smartphone (4/128GB)"} price={"15,999"} discount={"1,999"}></Product>
                <Product image={img18} checkout={"499৳ Discount on Checkout"} name={"OnePlus Nord N30 SE 5G Smartphone (4/128GB)"} price={"15,999"} discount={"1,999"}></Product>
                <Product image={img19} checkout={"499৳ Discount on Checkout"} name={"OnePlus Nord N30 SE 5G Smartphone (4/128GB)"} price={"15,999"} discount={"1,999"}></Product>
                <Product image={img12} checkout={"499৳ Discount on Checkout"} name={"OnePlus Nord N30 SE 5G Smartphone (4/128GB)"} price={"15,999"} discount={"1,999"}></Product>
            </div>
        </div>
    );
};

export default Products;