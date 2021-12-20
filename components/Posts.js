import {
  BookmarkIcon,
  ChatIcon,
  DotsVerticalIcon,
  HeartIcon,
  LibraryIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";

const users = [
  {
    pic: "/ava.jpg",
    username: "fahrifz",
    img: "/ava.jpg",
    caption: "test caption",
  },
  {
    pic: "/1.jpg",
    username: "fawwazfz",
    img: "/1.jpg",
    caption: "caption",
  },
  {
    pic: "1.jpg",
    username: "fawwazfz",
    img: "/2.jpg",
    caption: "",
  },
];

function Posts() {
  return (
    <div>
      {users.map((user) => (
        <div key={user.username} className="my-5 border">
          {/* Top */}
          <div className="bg-white p-3 flex items-center justify-between">
            <div className="flex space-x-3 items-center">
              <img
                className="h-7 w-7 object-cover rounded-full"
                src={user.pic}
                alt=""
              />
              <h2 className="text-sm font-bold cursor-pointer">
                {user.username}
              </h2>
            </div>
            <DotsVerticalIcon className="h-5" />
          </div>
          {/* Mid */}
          <div>
            <img src={user.img} alt="" />
          </div>
          {/* Bottom */}
          <div className="p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <HeartIcon className="h-6" />
                <ChatIcon className="h-6" />
                <PaperAirplaneIcon className="h-6" />
              </div>
              <BookmarkIcon className="h-6" />
            </div>
            {/* Caption */}
            <div className="mt-2 flex space-x-3 items-center">
              <h2 className="font-bold text-sm">{user.username}</h2>
              <p className="text-sm">{user.caption}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Posts;
