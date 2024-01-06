import React from "react";
import indexRoles from "../../../assets/Images/Admin_images/Users & Roles management/Roles/MainRoles.jpeg";
import MangePermissions from "../../../assets/Images/Admin_images/Users & Roles management/Roles/MangePermissions.jpeg";
import Image from "../../../Components/Image/Image";

export default function Roles() {
  return (
    <div className="w-100 d-flex align-items-center justify-content-center flex-column">
      <h1 className="text-muted">Main Roles</h1>
      <Image src={indexRoles} alt={"Main Roles"} className={"rounded"} />
      <h1 className="text-muted">Mange Permissions</h1>
      <Image
        src={MangePermissions}
        alt={"Mange Permissions"}
        className={"rounded"}
      />
    </div>
  );
}
