const logout = async () => {
	try {
		const response = await fetch('/api/users/logout', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (response.ok) {
			document.location.replace('/');
		} else {
			const errorData = await response.json();
			throw new Error(errorData.message || 'Logout failed');
		}
	} catch (error) {
		alert(error.message);
	}
};

document.querySelector('#logout').addEventListener('click', logout);
