import { Dispatch, SetStateAction, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import closeIcon from "../images/close-icon.png";

interface AddNewBlogProps {
  change: boolean;
  setChange: Dispatch<SetStateAction<boolean>>;
}

function AddNewBlog({ change, setChange }: AddNewBlogProps) {
  const [coverImg, setCoverImg] = useState<string>("");

  const [lauchDate, setLaunchDate] = useState<string>("");

  const [title, setTitle] = useState<string>("");

  const [author, setAuthor] = useState<string>("");

  const [description, setDescription] = useState<string>("");

  const addNewBlog = () => {
    const blogData = {
      title: title,
      launchdate: lauchDate,
      author: author,
      image_link: coverImg,
      description: description,
    };

    const url =
      "http://demo.api.admin.circlesnow.com/ProductRESTService.svc/schedMsg";
    axios
      .post(url, blogData, {
        headers: {
          token: "gouravparmar775566@gmail.com",
        },
      })
      .then((res) => console.log("Successfully add the data", res))
      .catch((error) => {
        console.log(error);
      });

    setCoverImg("");
    setLaunchDate("");
    setTitle("");
    setAuthor("");
    setDescription("");

    change ? setChange(false) : setChange(true);
  };

  return (
    <div className="addNewBlog">
      <main className="content">
        <form action="">
          <p>
            <label htmlFor="CoverImage">Cover Image Url</label>
            <input
              type="text"
              placeholder="https://photo.png"
              required
              value={coverImg}
              onChange={(e) => {
                setCoverImg(e.target.value);
              }}
            />
          </p>

          <p>
            <label htmlFor="LaunchDate">Launch date</label>
            <input
              type="text"
              placeholder="January 12,2023"
              required
              value={lauchDate}
              onChange={(e) => {
                setLaunchDate(e.target.value);
              }}
            />
          </p>

          <p>
            <label htmlFor="Title">Title</label>
            <input
              type="text"
              placeholder="The occean"
              required
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </p>
          <p>
            <label htmlFor="Author">Author</label>
            <input
              type="text"
              placeholder="Ruskin Bond"
              required
              value={author}
              onChange={(e) => {
                setAuthor(e.target.value);
              }}
            />
          </p>
          <p>
            <label htmlFor="Description">Description</label>
            <textarea
              rows={7}
              cols={40}
              placeholder="Very good book...."
              required
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></textarea>
          </p>
          <p>
            <label htmlFor="Submit"></label>
            <input
              type="submit"
              value="Add post"
              onClick={() => {
                addNewBlog();
                alert('Blog Successfully Added');
              }}
            />
          </p>
        </form>
        <Link className="close-icon" to="/">
          <img src={closeIcon} alt="" />
        </Link>
      </main>
    </div>
  );
}

export default AddNewBlog;
