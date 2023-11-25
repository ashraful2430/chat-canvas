import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import Container from "../../../Shared/Container/Container";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddPost = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const upVote = 0;
  const downVote = 0;
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.authorImg[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const postInfo = {
        authorName: data.authorName,
        authorEmail: data.authorEmail,
        tag: data.tag,
        details: data.details,
        title: data.title,
        upVote,
        downVote,
        authorImg: res.data.data.display_url,
        date: new Date(),
      };
      const addedPost = await axiosPublic.post("/posts", postInfo);
      console.log(addedPost);
      if (addedPost.data.insertedId) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your post has been added successfully",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    }
  };
  return (
    <div>
      <Container>
        <div>
          <h3 className="text-center font-medium text-3xl my-14 underline">
            Add A Post
          </h3>
        </div>
        <div className="space-y-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Author Name */}
            <div className="flex flex-col lg:flex-row gap-3">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Your Name*</span>
                </label>
                <input
                  type="text"
                  placeholder="Author Name"
                  defaultValue={user.displayName}
                  {...register("authorName", { required: true })}
                  name=""
                  className="input input-bordered w-full"
                />
                {errors.authorName && (
                  <span className="text-red-500">Your name is required</span>
                )}
              </div>
              {/* author email */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Your email*</span>
                </label>
                <input
                  type="email"
                  placeholder="Author email"
                  defaultValue={user.email}
                  {...register("authorEmail", { required: true })}
                  name="email"
                  className="input input-bordered w-full"
                />
                {errors.authorEmail && (
                  <span className="text-red-500">Your email is required</span>
                )}
              </div>
            </div>
            {/* tags  */}

            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <label className="label">
                  <span className="label-text">Tags*</span>
                </label>
                <select
                  value={watch("tag") || ""}
                  name="tags"
                  {...register("tag", { required: true })}
                  className="select select-bordered w-full"
                >
                  <option value="" disabled>
                    Select Tags
                  </option>
                  <option value="TechTalk">TechTalk</option>
                  <option value="ArtistryHub">ArtistryHub</option>
                  <option value="HealthyLiving">HealthyLiving</option>
                  <option value="TravelJunkie">TravelJunkie</option>
                  <option value="EcoEnthusiasts">EcoEnthusiasts</option>
                </select>
                {errors.tag && (
                  <span className="text-red-500">
                    Please choose an relevant tag for your post
                  </span>
                )}
              </div>
              {/* post title */}
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Post title*</span>
                </label>
                <input
                  type="text"
                  placeholder="Title"
                  name="title"
                  {...register("title", { required: true })}
                  className="input input-bordered w-full"
                />
                {errors.title && (
                  <span className="text-red-500">Title is required</span>
                )}
              </div>
            </div>
            {/* recipe details */}
            <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Post Details*</span>
                </label>
                <textarea
                  className="textarea textarea-bordered h-32"
                  name="details"
                  {...register("details", { required: true })}
                  placeholder="Post Details"
                ></textarea>
                {errors.details && (
                  <span className="text-red-500">Detail is required</span>
                )}
              </div>
            </div>
            {/* file input */}

            <div>
              <input
                type="file"
                {...register("authorImg", { required: true })}
                className="file-input file-input-bordered w-full max-w-xs mt-7"
              />
              <p>Chose your Image</p>
              {errors.authorImg && (
                <span className="text-red-500">Your image is required</span>
              )}
            </div>
            <div>
              <button
                className=" bg-blue-400 text-white py-3 px-5 rounded-md mt-5"
                type="submit"
              >
                <span className="flex justify-center items-center gap-2">
                  Add Post
                </span>
              </button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default AddPost;
