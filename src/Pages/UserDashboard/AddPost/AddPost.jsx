import useAuth from "../../../Hooks/useAuth";
import Container from "../../../Shared/Container/Container";

const AddPost = () => {
  const { user } = useAuth();
  const upVote = 0;
  const downVote = 0;
  const seeData = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const tags = form.tags.value;
    const title = form.title.value;
    const details = form.details.value;
    const all = {
      name,
      email,
      tags,
      title,
      details,
      upVote,
      downVote,
    };
    console.log(all);
  };
  return (
    <div>
      <Container>
        <div>
          <h3 className="text-center font-medium text-3xl my-14 underline">
            Add Post
          </h3>
        </div>
        <div className="space-y-6">
          <form onSubmit={seeData}>
            {/* Author Name */}
            <div className="flex flex-col lg:flex-row gap-3">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Your Name*</span>
                </label>
                <input
                  type="text"
                  placeholder="Author Name"
                  className="input input-bordered w-full"
                  name="name"
                />
              </div>
              {/* author email */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Your email*</span>
                </label>
                <input
                  type="text"
                  placeholder="Author email"
                  defaultValue={user.email}
                  name="email"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            {/* tags  */}

            <div className="flex gap-4">
              <div className="flex-1">
                <label className="label">
                  <span className="label-text">Tags*</span>
                </label>
                <select
                  defaultValue="default"
                  name="tags"
                  className="select select-bordered w-full"
                >
                  <option disabled value="default">
                    Select Tags
                  </option>
                  <option value="salad">TechTalk</option>
                  <option value="pizza">ArtistryHub</option>
                  <option value="soup">HealthyLiving</option>
                  <option value="desert">TravelJunkie</option>
                  <option value="drinks">EcoEnthusiasts</option>
                </select>
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
                  className="input input-bordered w-full"
                />
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
                  placeholder="Post Details"
                ></textarea>
              </div>
            </div>
            {/* file input */}

            <div>
              <input
                type="file"
                className="file-input file-input-bordered w-full max-w-xs mt-7"
              />
              <p>Chose your Image</p>
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
