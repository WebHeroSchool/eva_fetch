fetch('https://api.github.com/users/KsuBurn')
	.then(res => res.json())
	.then(json => {
		console.log(json.avatar_url);
		console.log(json.name);
		console.log(json.bio);
		console.log(json.url);

		const avatar = json.avatar_url;
		const name = json.name;
		const bio = json.bio;
		const link = json.url;

		const body = document.body;
		const newPhoto = body.createElement('img');
		const newName = body.createElement('a');
		const profileDescription = body.createElement('p');
		newPhoto.src = avatar;
		body.appendChild(newRhoto);
		newName.innerHTML = name;
		newName.setAttribute('href', link);
		body.appendChild(newName);
		profileDescription.innerHTML = bio;
		body.appendChild(profileDescription);
	})

	.catch(err => console.log("Информация о пользователе не доступна"))