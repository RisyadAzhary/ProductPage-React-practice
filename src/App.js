import "./App.css";

function App() {
	return (
		<div className="ParentBox">
			<PhotoProduct />
			<ProductInfo isDiscount="yes" name="Razer Blackwidow"category="Mechanical keyboard"/>
			< ReviewItems />
		</div>
	);
}

function ReviewItems() {
	const users = [
		{
			id: 1,
			name: "Gajel crozz",
			review: "bagus tp salah beliiiii, ada yg minat? ",
		},
		{
			id: 2,
			name: "AA utap",
			review: "mantap gan",
		},
		{
			id: 3,
			name: "ngab berti",
			review: "mantab ngab",
		},
	];
	const listReview = users.map((itemReview) => (
		<div className="Item">
			<img src="https://i.ibb.co/rw7hdq5/randog.png" alt="randog" border="0" />
			<div className="User">
				<h3> {itemReview.name} </h3>
				<p> {itemReview.review} </p>
			</div>
		</div>
	));
	return (
		<div className="Testimonial-box">
			<h2>Reviews</h2>
			{listReview}
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
	const { isDiscount } = props;
	if (isDiscount === "yes") {
		return <p>Diskon 50% Off</p>;
	} else {
		return <p>Tidak ada diskon</p>;
	}
}

function ProductInfo(props) {
	const price = "900000";
	const { category, name, isDiscount } = props;
	const benefits = ["Waterr resistant", "comfy", "auto fit"];
	const listBenefits = benefits.map((itemBenefit) => <li> {itemBenefit} </li>);
	return (
		<div>
			<div className="Deskripsi">
				<p className="Cate">{category}</p>
				<h1 className="Title">{name}</h1>
				<p className="Price"> IDR {price} </p>
				<CheckDiscount isDiscount={isDiscount} />
				<p className="Info">
					The BlackWidow X is a new keyboard series, introduced by Razer as a
					budget friendly option in March 2016. The Razer BlackWidow X Ultimate
					is the minimalist version of the BlackWidow Ultimate. And while there
					are some cut-offs, it doesn’t necessary mean, that the BlackWidow X
					model is cheaper than the original model. In a lot of stores, the the
					BlackWidow X is actually more expensive than the BlackWidow Ultimate.
				</p>
				<ul>
					<li>{listBenefits}</li>
				</ul>
				<a onClick={(e) => AddToCart(name, e)} href="#">
					Add to Cart
				</a>
			</div>
		</div>
	);
}

export default App;
