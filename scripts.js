function changeContent(page) {
	var contentDiv = document.getElementById("content");
	switch (page) {
		case "services":
			contentDiv.innerHTML = `
            <div class="row services">
            <div class="col-12">
                <p class="text-center">Services We Provide</p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-3">
                <div class="circular-image-container">
                    <img src="./img/jamb.png" alt="" class="img-fluid rounded-circle" />
                </div>
            </div>
            <div class="col-md-3">
                <div class="circular-image-container">
                    <img src="./img/sat.png" alt="" class="img-fluid rounded-circle" />
                </div>
            </div>
            <div class="col-md-3">
                <div class="circular-image-container">
                    <img
                        src="./img/jupeb.jpg"
                        alt=""
                        class="img-fluid rounded-circle" />
                </div>
            </div>
            <div class="col-md-3">
                <div class="circular-image-container">
                    <img
                        src="./img/ielts.png"
                        alt=""
                        class="img-fluid rounded-circle" />
                </div>
            </div>
            <div class="col-md-3">
                <div class="circular-image-container">
                    <img
                        src="./img/neco.jpg"
                        alt=""
                        class="img-fluid rounded-circle"
                        width="500px"
                        height="500px" />
                </div>
            </div>
            <div class="col-md-3">
                <div class="circular-image-container">
                    <img src="./img/waec.png" alt="" class="img-fluid rounded-circle" />
                </div>
            </div>
            <div class="col-md-3">
                <div class="circular-image-container">
                    <img src="./img/gre.png" alt="" class="img-fluid rounded-circle" />
                </div>
            </div>
            <div class="col-md-3">
                <div class="circular-image-container">
                    <img
                        src="./img/toefl.png"
                        alt=""
                        class="img-fluid rounded-circle" />
                </div>
            </div>
        </div>
        `;
			break;
		case "about":
			contentDiv.innerHTML = `
            <div class="row">
            <div class="col-12">
                <p class="text-center" style="font-size: 40px">About Us</p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 col-sm-12">
                <img
                    src="./img/lpa logo.jpg"
                    alt=""
                    class="img-fluid rounded mx-auto d-block"
                     />
            </div>
            <div class="col-md-6 col-sm-12 text-center py-5">
                    <p class="py-5">At Learning Point Academy (LPA), we're dedicated to transforming lives through education. With a focus on personalized support, we offer academic tutoring, test preparation, and enrichment programs tailored to each learner's needs. Our experienced educators are committed to nurturing a love for learning and fostering academic success through innovative teaching methodologies. Beyond academics, we prioritize holistic development, equipping students with critical thinking, creativity, and resilience for lifelong success. As more than just tutors, we're mentors and partners in your educational journey. Whether you're a student seeking support or a parent investing in your child's future, join our vibrant community at LPA. Let's unlock endless possibilities together and pave the way for a brighter tomorrow.
                    </p><figcaption class="blockquote-footer">
                    <cite title="Source Title">Where Learning Thrives!</cite>
                  </figcaption>
            </div>
        </div>
        `;
			break;
		case "contact":
			contentDiv.innerHTML = `
            <div class="row">
            <div class="col-12">
                <p class="text-center" style="font-size: 40px">Contact Us</p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 col-sm-12  py-5">
                <div id="map-container" class="ratio ratio-4x3"">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.982927581642!2d3.3913089142667263!3d6.510485225310315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9353e59aef07%3A0x5ab2b5e17199a204!2sLawani%20St%2C%20Yaba%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1647208283835!5m2!1sen!2sus"
                        width="600" height="450" style="border: 0" allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
            <div class="col-md-6 col-sm-12 px-5">
                <div class="d-flex flex-column align-items-center justify-content-center p-5">
                    <p class="display-5 text-center">Meet Us</p>
                    <ul>
                        <i class="fa fa-phone p-3 px-5" aria-hidden="true"><span class="px-3">+2349156785242</span></i>
                        <i class="fa fa-location-arrow p-3 px-5" aria-hidden="true"><span class="px-3">43,LAWANI
                                STREET,ABULE OJA YABA</span></i>
                        <i class="fa fa-envelope p-3 ps-5" aria-hidden="true"><span
                                class="px-3">learningpoint@gmail.com</span></i>
                    </ul>
                </div>
            </div>
        </div>
        `;
			break;
		default:
			contentDiv.innerHTML = "<h2>Page not found!</h2>";
	}
}

// window.addEventListener("scroll", function () {
// 	var contentDiv = document.getElementById("content");
// 	var sections = ["home", "about", "contact"]; // Add more sections as needed
// 	var currentSection = window.location.hash.substring(1);

// 	if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
// 		// User has scrolled to the bottom of the current section
// 		var nextSectionIndex = sections.indexOf(currentSection) + 1;
// 		if (nextSectionIndex < sections.length) {
// 			// Load the next section content
// 			changeContent(sections[nextSectionIndex]);
// 			// Update the URL hash
// 			window.location.hash = sections[nextSectionIndex];
// 		}
// 	}
// });

