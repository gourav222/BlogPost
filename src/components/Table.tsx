import { Dispatch, SetStateAction, useEffect, useState } from "react";
import axios from "axios";
import Description from "./Description";

interface TableProps {
  change: boolean;
  setChange: Dispatch<SetStateAction<boolean>>;
}

interface BlogItem {
  launchdate: string;
  image_lnk: string;
  description: string;
  title: string;
  author: string;
}

function Table({ change, setChange }: TableProps) {

  const [data, setData] = useState<BlogItem[]>([]);

  const [showDescription, setShowDescription] = useState<boolean>(false);

  const [description, setDescription] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get(
          "http://demo.api.admin.circlesnow.com/ProductRESTService.svc/getschedmsg",
          {
            headers: {
              token: "gouravparmar775566@gmail.com",
            },
          }
        );
        setData(JSON.parse(response.data.dt));
      } catch (error) {
        console.error("#####", error);
      }
    };

    fetchData();
  }, [change]);

  let allBlogs = data;
  
  return (
    <>
      <div className="blogData">
        <table className="table">
          <tr className="tableHeader">
            <th>Cover image</th>
            <th>Launch date</th>
            <th>Title</th>
            <th>Author</th>
          </tr>
          {allBlogs.length
            ? allBlogs.map((items, index) => {
                const dateStr = items["launchdate"];
                const date = new Date(dateStr);
                const options = {
                  year: "numeric" as const,
                  month: "long" as const,
                  day: "2-digit" as const,
                };
                const formattedDate = new Intl.DateTimeFormat(
                  "en-IN",
                  options
                ).format(date);
                return (
                  <tbody key={index} className="tableBody">
                    <tr>
                      <td>
                        <img
                          className="coverImage"
                          src={items["image_lnk"]}
                          alt="dfd"
                        />
                      </td>
                      <td className="launchDate">{formattedDate}</td>
                      <td>
                        <button
                          className="titleButton"
                          onClick={() => {
                            setShowDescription(true);
                            setDescription(items["description"]);
                          }}
                        >
                          {items["title"]}
                        </button>
                      </td>
                      <td>{items["author"]}</td>
                    </tr>
                  </tbody>
                );
              })
            : null}
        </table>
      </div>
      {showDescription ? (
        <Description
          setShowDescription={setShowDescription}
          description={description}
        />
      ) : (
        null
      )}
    </>
  );
}

export default Table;
