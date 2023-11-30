import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Container from "../../../Shared/Container/Container";
import Swal from "sweetalert2";

const MakeAnnouncement = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.img[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(res.data);
    if (res.data.success) {
      const announcementInfo = {
        name: data.name,
        title: data.title,
        email: data.email,
        details: data.details,
        img: res.data.data.display_url,
      };
      const addedAnnouncement = await axiosSecure.post(
        "/announcement",
        announcementInfo
      );
      console.log(addedAnnouncement);
      if (addedAnnouncement.data.insertedId) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your announcement has been added successfully",
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
            Make announcement
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
                  {...register("name", { required: true })}
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
                  {...register("email", { required: true })}
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
              {/* post title */}
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Announcement title*</span>
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
                  <span className="label-text">Announcement Details*</span>
                </label>
                <textarea
                  className="textarea textarea-bordered h-32"
                  name="details"
                  {...register("details", { required: true })}
                  placeholder="Announcement Details"
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
                {...register("img", { required: true })}
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

export default MakeAnnouncement;
