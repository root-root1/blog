const pool = require("../../db");
const query = require("./query");

const getBlog = (req, res) => {
  pool.query(query.getBlog, (err, result) => {
    if (err) throw err;
    res.status(200).json({ result: result.rows });
  });
};

const getBlogByID = (req, res) => {
  let id = parseInt(req.params.id);

  pool.query(query.getBlogByID, [id], (err, result) => {
    if (err) throw err;
    res.status(200).json({ result: result.rows });
  });
};

const createBlog = (req, res) => {
  let { title, author, description } = req.body;
  pool.query(query.createBlog, [title, author, description], (err, result) => {
    if (err) throw err;
    res.status(200).send("Create Blog");
  });
};

const updateBlog = (req, res) => {
  let id = parseInt(req.params.id);
  let { title, author, description } = req.body;
  pool.query(query.getBlogByID, [id], (err, result) => {
    const noBlogFound = !result.rows.length;
    if (noBlogFound) {
      res.status(404).json({ "Not Found": `Blog with ${id} not Found` });
    }
    pool.query(
      query.updateBlog,
      [title, author, description, id],
      (err, result) => {
        if (err) throw err;
        res.status(200).json({ "Update Blog Record": id });
      }
    );
  });
};
const deleteBlog = (req, res) => {
  let id = parseInt(req.params.id);
  pool.query(query.getBlogByID, [id], (err, result) => {
    const noBlogFound = !result.rows.length;
    if (noBlogFound) {
      res.status(404).json({ "Not Found": `Blog with ${id} not Found` });
    }

    pool.query(query.deleteBlog, [id], (err, result) => {
      if (err) throw err;
      res.status(200).json({ "Blog Delete Successfully": id });
    });
  });
};

module.exports = {
  getBlog,
  getBlogByID,
  createBlog,
  updateBlog,
  deleteBlog,
};
