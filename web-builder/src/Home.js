import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createPage, deletePage } from "./redux/actions/pageAction";

const Home = () => {
  const [name, setName] = useState("");
  const [isValid, setIsValid] = useState(true);
  const dispatch = useDispatch();

  const { pageStore } = useSelector((state) => state);
  const { pages } = pageStore;

  const handleSubmit = async () => {
    if (!name) {
      setIsValid(false);
      return;
    }
    createPage(name)(dispatch);
    setName("");
  };

  const handleDelete = (pageId) => {
    if (window.confirm("Are you sure you want to delete this page?")) {
      dispatch(deletePage(pageId)); // Dispatch deletePage action
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mt-5">
          <form id="create-page">
            <div className="modal-header">
              <h4 className="modal-title" id="addPageModalLabel">
                Create Page Name
              </h4>
            </div>
            <div className="modal-body">
              <div className="col-auto">
                <label htmlFor="name" className="form-label">
                  {/* Name */}
                </label>
                <input
                  type="text"
                  className={`form-control form-control-sm ${
                    isValid ? "" : "is-invalid"
                  }`}
                  id="name"
                  name="name"
                  placeholder="Name of Page"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {!isValid && (
                  <div className="invalid-feedback">
                    Please provide a valid name.
                  </div>
                )}
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={(e) => setName("")}
              >
                Clear
              </button>
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={handleSubmit}
              >
                Save
              </button>
            </div>
          </form>
        </div>
        <div className="col-12 my-2">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                {/* <td>ID</td> */}
                <td>Name</td>
                {/* <td>Slug</td> */}
                <td>Action</td>
                <td>Delete</td>
              </tr>
            </thead>
            <tbody>
              {pages
                ? pages.map((page) => (
                    <tr key={page._id}>
                      {/* <td>{page._id}</td> */}
                      <td>{page.name}</td>
                      {/* <td>{page.slug}</td> */}
                      <td>
                        <Link to={`/editor/${page._id}`}>Edit</Link>
                      </td>
                      <td>
                      <Link to="#" onClick={() => handleDelete(page._id)}>Delete</Link>
                      </td>
                    </tr>
                  ))
                : "No Page"}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
