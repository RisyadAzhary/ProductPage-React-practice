import React from 'react'
import "./App.css";


function Reviews() {
	const users = [
		{
			id: 1,
			name: "Gajel crozz",
			review: "bagus tp salah beliiiii, ada yg minat? ",
			photo: "https://i.ibb.co/rw7hdq5/randog.png",
		},
		{
			id: 2,
			name: "AA utap",
			review: "mantap gan",
			photo:
				"https://d2p8jjwwnx090z.cloudfront.net/689/044/780/-129996992-202e0em-2rpefhn8s8aifgk/original/avatar.jpg",
		},
		{
			id: 3,
			name: "ngab berti",
			review: "mantab ngab",
			photo:
				"https://sociabuzz.com/assets/files/profile/influencer/ryanberti/ryanberti__thumb.png",
		},
	];
	const listReview = users.map((itemReview) => (
		<div key={itemReview.id} className="Item">
			<img src={itemReview.photo} alt="user" />
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

export default Reviews;