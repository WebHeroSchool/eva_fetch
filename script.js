
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
		
		const newPhoto = new Image();
		newPhoto.src = avatar;
		body.appendChild(newPhoto);

		const newName = document.createElement('a');
		newName.innerHTML = name;
		newName.setAttribute('href', link);
		body.appendChild(newName);

		const profileDescription = document.createElement('p');
		profileDescription.innerHTML = bio;
		body.appendChild(profileDescription);
	})


	.catch(err => console.log("Информация о пользователе не доступна"))
