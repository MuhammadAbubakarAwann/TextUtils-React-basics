import React, { useState } from 'react'

export default function About() {
	const [mode, setMode] = useState({});
	const [buttonType, setButtonType] = useState({

		color: 'white',
		border: '1px solid white',
		backgroundColor: 'black',
		btnText: 'Enable Dark Mode'
	});

	const enableDarkMode = () => {
		if (mode.color === 'black') {
			setMode({ color: 'white', backgroundColor: 'black' });
			setButtonType({
				backgroundColor: 'white',
				color: 'black',
				border: '1px solid black',
				btnText: 'Enable Light Mode'
			});
		} else {
			setMode({ color: 'black', backgroundColor: 'white' });
			setButtonType({
				backgroundColor: 'black',
				color: 'white',
				border: '1px solid white',
				btnText: 'Enable Dark Mode'
			});
		}
	};

	return (
		<>
			<div className="container p-3" style={mode}>
				<h1>About Us</h1>
				<div className="accordion" id="accordionExample" style={mode}>
					<div className="accordion-item">
						<h2 className="accordion-header" id="headingOne">
							<button className="accordion-button" type="button" style={mode} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
								Accordion Item #1
							</button>
						</h2>
						<div id="collapseOne" className="accordion-collapse collapse show" style={mode} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
							<div className="accordion-body">
								<strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
							</div>
						</div>
					</div>
					<div className="accordion-item">
						<h2 className="accordion-header" id="headingTwo">
							<button className="accordion-button collapsed" type="button" style={mode} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
								Accordion Item #2
							</button>
						</h2>
						<div id="collapseTwo" className="accordion-collapse collapse" style={mode} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
							<div className="accordion-body">
								<strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
							</div>
						</div>
					</div>
					<div className="accordion-item">
						<h2 className="accordion-header" id="headingThree">
							<button className="accordion-button collapsed" type="button" style={mode} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
								Accordion Item #3
							</button>
						</h2>
						<div id="collapseThree" className="accordion-collapse collapse" style={mode} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
							<div className="accordion-body">
								<strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='container'>
				<button className='btn my-3' style={{ backgroundColor: buttonType.backgroundColor, color: buttonType.color, border: buttonType.border }} onClick={enableDarkMode}>{buttonType.btnText}</button>
			</div>
		</>
	)
}
