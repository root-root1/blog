const getBlog = "SELECT * FROM blogs";
const getBlogByID = "SELECT * FROM blogs WHERE id = $1"
const createBlog = "INSERT INTO blogs (title, author, description) values ($1, $2, $3)";
const updateBlog = "UPDATE blogs SET title = $1, author = $2, description = $3 WHERE id = $4";
const deleteBlog = "DELETE FROM blogs * WHERE id = $1"

module.exports = {
    getBlog,
    getBlogByID,
    createBlog,
    updateBlog,
    deleteBlog
}