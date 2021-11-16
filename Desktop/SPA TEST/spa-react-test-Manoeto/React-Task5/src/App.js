import React from "react";
class App extends React.Component {

	
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DetailsLoaded: false
		};
	}

	
	componentDidMount() {
		fetch(
"https://www.anapioficeandfire.com/api/books")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DetailsLoaded: true
				});
			})
	}
	render() {
		const { DetailsLoaded: DetailsLoaded1, items } = this.state;
		if (!DetailsLoaded1) return <div>
			<h1> Pleases wait some time.... </h1> </div> ;

		return (
		<div className = "App">
			<h1> Game of Thrones Books</h1> {
				items.map((item) => (
				<ol key = { item.id } >
					
					Book_Name: { item.name },
					
					</ol>
				))
			}
		</div>
	);
}
}

export default App;
