function CreatePost() {
    const handleFormSubmit = e => {
        e.preventDefault()
    }
    return (
        <form className="signup__form" onSubmit={handleFormSubmit}>
            <input type="text" name="username" placeholder="Post Title" />
            <textarea name="post" rows="7" placeholder="Post Description"></textarea>
            <button type="submit">Create Post</button>
        </form>
    )
}

export default CreatePost
