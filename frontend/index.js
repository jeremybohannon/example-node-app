const backendURL = 'http://localhost:3000/'

const backEndResponseElement = document.getElementById('backend-response')

const getBackEndResponse = async () => {
    // Make network call to backend
    const resp = await fetch(backendURL)
    // Get text data returned
    const data = await resp.text()
    // Update UI to reflect backend data
    backEndResponseElement.innerText = data
}

getBackEndResponse()
