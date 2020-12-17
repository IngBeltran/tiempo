import { useState } from "react"

const useHttpSearch = () => {
    const [issues, setIssues] = useState([])

    const issueSearch = async (term) => {
        const queryString = 'q=' + encodeURIComponent(term +' in:title, repo:facebook/react');
        const response = await fetch('https://api.github.com/search/issues?'+queryString)
        const data = await response.json();
        setIssues(data.items)
    }

    return [issues, issueSearch]
}

export default useHttpSearch
