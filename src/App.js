import "./App.css";
import ReviewsItem from "./Reviews";
import propTypes from "prop-types";

function App() {
	return (
		<div className="ParentBox">
			<PhotoProduct />
			<ProductInfo
				isDiscount="yes"
				name="Razer Blackwidow"
				category="Mechanical keyboard"
			/>
			<ReviewsItem />
		</div>
	);
}

function PhotoProduct() {
	return (
		<div className="Foto">
			<img
				src="https://www.mechanical-keyboard.org/wp-content/uploads/2016/11/Razer-BlackWidow-X-Ultimate-800x450.jpg"
				alt="keyboard"
			/>
		</div>
	);
}

function AddToCart(e) {
	console.log("membeli " + e);
}

function CheckDiscount(props) {
	const { isDiscount, discount } = props;
	if (isDiscount === "yes") {
		return <p>Diskon {discount}% Off</p>;
	} else {
		return <p>Tidak ada diskon</p>;
	}
}

function ProductInfo(props) {
	const price = "900000";
	const { category, name, isDiscount } = props;
	const benefits = ["Waterr resistant", "comfy", "auto fit"];
	const listBenefits = benefits.map((itemBenefit) => (
		<li key={itemBenefit}> {itemBenefit} </li>
	));
	return (
		<div>
			<div className="Deskripsi">
				<p className="Cate">{category}</p>
				<h1 className="Title">{name}</h1>
				<p className="Price"> IDR {price} </p>
				<CheckDiscount isDiscount={isDiscount} discount={50} />
				<p className="Info">
					The BlackWidow X is a new keyboard series, introduced by Razer as a
					budget friendly option in March 2016. The Razer BlackWidow X Ultimate
					is the minimalist version of the BlackWidow Ultimate. And while there
					are some cut-offs, it doesn’t necessary mean, that the BlackWidow X
					model is cheaper than the original model. In a lot of stores, the the
					BlackWidow X is actually more expensive than the BlackWidow Ultimate.
				</p>
				<ul>{listBenefits}</ul>
				<button onClick={(e) => AddToCart(name, e)} href="#">
					Add to Cart
				</button>
			</div>
		</div>
	);
}

CheckDiscount.propTypes = {
	discount: propTypes.number.isRequired
};

export default App;
