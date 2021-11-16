export default async function getData(url = '') {
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        // headers: { 'Content-Type': 'application/json' },
        referrerPolicy: 'no-referrer',
    };

    const response = await fetch(url, options)
        .then(response => {
            if (!response.ok) {
                console.warn(response.body);
                throw new Error('Fetch error: ' + response.statusText);
            }

            // If the request was successful but doesn't include any data don't try and parse the json.
            if (response.status === 204) {
                return;
            } else {
                return response.json();
            }
        })
        .catch(err => {
            throw new Error(err);
        });

    return response;
}
