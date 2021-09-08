import React from "react";
import { Link } from "components/link";

const admin = () => {
  return (
    <div>
      <h1>Admin page</h1>

      <Link path="/admin/events">Events</Link>
      <br />
      <Link path="/admin/news">News</Link>
      <br />
      <Link path="/admin/testimonials">Testimonials</Link>
    </div>
  );
};

export default admin;
