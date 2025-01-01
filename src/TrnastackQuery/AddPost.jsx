import axios from "axios";
import React from "react";
import GetPost from "./GetPost";
import useGetData from "./useGetData";

export default function AddPost() {
  const { data, isLoading, refetch } = useGetData();
  const handelPostFor = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const descripton = e.target.descripton.value;
    const postInfo = { name, descripton };
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/addpost`,
      postInfo
    );
    if (response.status === 200) {
      refetch();
    }
    console.log(response);
  };
  return (
    <div className="my-16">
      <section className="grid grid-cols-2 gap-7">
        {/* add post */}
        <form className="space-y-3" onSubmit={handelPostFor}>
          <h3 className="text-3xl text-center font-bold text-gray-600">
            Add Post
          </h3>
          <input
            type="text"
            name="name"
            placeholder="type your name"
            className="w-full outline-0 p-4"
          />
          <textarea
            type="text"
            name="descripton"
            placeholder="type your name"
            className="w-full outline-0 p-4"
          />
          <button className="base-color px-3 py-2 ">Add Post</button>
        </form>
        {/* post list */}
        <div>
          <h3 className="text-3xl text-center font-bold text-gray-600 ">
            {" "}
            Post List
          </h3>
          <GetPost></GetPost>
        </div>
      </section>
    </div>
  );
}
