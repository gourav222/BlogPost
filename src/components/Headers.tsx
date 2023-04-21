import { Dispatch, SetStateAction } from "react";
import Table from "./Table";
import { Link } from "react-router-dom";

interface HeaderProps {
  change: boolean;
  setChange: Dispatch<SetStateAction<boolean>>;
}

function Headers({ change, setChange }: HeaderProps) {
  return (
    <div>
      <div className="header">
        <h1>Library</h1>
        <button className="new-blog">
          <Link to="/add">New blog</Link>
        </button>
      </div>
      <Table change={change} setChange={setChange} />
    </div>
  );
}

export default Headers;
