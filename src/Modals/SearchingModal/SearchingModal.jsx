import React from "react";

export default function SearchingModal() {
  return (
    <div
      className="modal fade"
      id="SearchModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content p-3 min-vh-75">
          <div class="modal-body">
            <input
              class="form-control mr-sm-2 rounded-5"
              type="search"
              aria-label="Search"
              placeholder="Search"
            />
            <div className="result">
              <h5 className="text-muted m-3 text-center">No Search Result</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
