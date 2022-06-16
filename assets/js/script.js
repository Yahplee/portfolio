tailwind.config = {
	darkMode: "class",
};

const htmlEl = document.querySelector("html");
const repoListEl = document.getElementById("repoContainer");
const collabRepoEl = document.getElementById("collab");
const moonBtn = document.getElementById("moon");
const sunBtn = document.getElementById("sun");

moonBtn.addEventListener("click", (event) => {
	event.preventDefault();

	htmlEl.setAttribute("class", "scroll-smooth dark text-xl");
	moonBtn.setAttribute("class", "hide");
	sunBtn.setAttribute("class", "-mt-0.5 mr-1");
});
sunBtn.addEventListener("click", (event) => {
	event.preventDefault();

	htmlEl.setAttribute("class", "scroll-smooth text-xl");
	moonBtn.setAttribute("class", "-mt-0.5 mr-1");
	sunBtn.setAttribute("class", "hide");
});

const getChrisRepo = () => {
	const chrisRepo = "https://api.github.com/repos/chrispobrien/project-1";

	fetch(chrisRepo)
		.then(function (response) {
			return response.json();
		})
		.then((chris) => {
			renderCollabRepo(chris);
		});
};

const getSelfApi = () => {
	const getRepo =
		"https://api.github.com/users/yahplee/repos?per_page=6&sort=updated";

	fetch(getRepo)
		.then(function (response) {
			return response.json();
		})
		.then((data) => {
			renderRepo(data);
		});
};

const renderCollabRepo = (data) => {
	const collabdivEl = document.createElement("div");
	collabdivEl.setAttribute("id", `${data.name}`);
	collabdivEl.setAttribute(
		"class",
		"bg-white dark:bg-neutral-700 rounded overflow-hidden shadow-xl col-auto hover:scale-105 hover:delay-50"
	);

	const collabdivEl1 = document.createElement("div");
	collabdivEl1.setAttribute("class", "px-6 py-4 col-auto");

	const collabdivEl2 = document.createElement("div");
	collabdivEl2.setAttribute("class", "card-text-background");

	const collabAEl = document.createElement("a");
	collabAEl.setAttribute(
		"class",
		"font-medium text-lg mb-2 hover:text-2xl hover:text-indigo-500 hover:delay-100"
	);
	collabAEl.setAttribute("href", `${data.html_url}`);
	collabAEl.textContent = `${data.name}`;

	const collabpEl = document.createElement("p");
	collabpEl.setAttribute(
		"class",
		"text-gray-700 dark:text-neutral-300 text-sm font-normal select-none"
	);
	collabpEl.textContent = `${data.description}`;

	collabRepoEl.appendChild(collabdivEl);
	collabdivEl.appendChild(collabdivEl1);
	collabdivEl1.appendChild(collabdivEl2);
	collabdivEl2.appendChild(collabAEl);
	collabdivEl2.appendChild(collabpEl);
};

const renderRepo = (data) => {
	for (let i = 0; i < 6; i++) {
		const divEl = document.createElement("div");
		divEl.setAttribute("id", `${data[i].name}`);
		divEl.setAttribute(
			"class",
			"bg-white dark:bg-neutral-700 max-w-sm rounded overflow-hidden shadow-xl hover:scale-105 hover:delay-50"
		);

		const divEl1 = document.createElement("div");
		divEl1.setAttribute("class", "px-6 py-4");

		const divEl2 = document.createElement("div");
		divEl2.setAttribute("class", "card-text-background");

		const aEl = document.createElement("a");
		aEl.setAttribute(
			"class",
			"font-medium text-lg mb-2 hover:text-2xl hover:text-indigo-500 hover:delay-100"
		);
		aEl.setAttribute("href", `${data[i].html_url}`);
		aEl.textContent = `${data[i].name}`;

		const pEl = document.createElement("p");
		pEl.setAttribute(
			"class",
			"text-gray-700 dark:text-neutral-300 text-sm font-normal select-none"
		);
		pEl.textContent = `${data[i].description}`;

		repoListEl.appendChild(divEl);
		divEl.appendChild(divEl1);
		divEl1.appendChild(divEl2);
		divEl2.appendChild(aEl);
		divEl2.appendChild(pEl);
	}
};
getSelfApi();
getChrisRepo();
