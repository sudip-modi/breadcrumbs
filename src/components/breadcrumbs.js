import { Link } from "react-router-dom";
import React from "react";
import { useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();

  console.log(location);
  //   filter function will get rid of the falsy values this way, for example an empty string
  const pathnames = location.pathname.split("/").filter((x) => x);

  console.log(pathnames);

  let breadcrumbPath = "";

  return (
    <div className="breadcrumbs">
      {pathnames.length >= 0 && <Link to="/">Home </Link>}
      {pathnames.map((name, index) => {
        breadcrumbPath += `>>${name}`;
        const isLast = index === pathnames.length - 1;

        return isLast ? (
          <span> >> {name} </span>
        ) : (
          <span key={breadcrumbPath}>
             >> <Link to={breadcrumbPath}>{name}</Link>
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
