import React from "react";

export default function ModalToViewImage({ src }) {
  return (
    <>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl my-2">
          <div class="modal-content">
            <div class="modal-body">
              <img
                src={src}
                alt="AVMS"
                className="w-100 rounded h-100"
                data-bs-dismiss="modal"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
