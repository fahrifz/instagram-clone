import Posts from "./Posts";
import Sidebar from "./Sidebar";
import Stories from "./Stories";

function Feed() {
  return (
    <main className="grid grid-cols-3 mt-7">
      <section className="lg:col-span-2 col-span-full">
        <Stories />
        <Posts />
      </section>

      <section className="hidden lg:col-span-1 lg:inline-grid">
        <div className="fixed">
          <Sidebar />
        </div>
      </section>
    </main>
  );
}

export default Feed;
