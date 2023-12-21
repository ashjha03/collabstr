import Navbar from "@/components/Navbar";

const page = ({ params }) => {
  const { user } = params;
  return (
    <div>
      <Navbar />
      <div className="user-profile p-12 gap-2">
        <h1 className="text-4xl">{user}</h1>
        <h3 className="text-2xl pl-2">@{user}</h3>
      </div>
    </div>
  );
};

export default page;
