import image from "./404_pages.jpg";

const NotFoundPage = () => {
  return (
    <div>
      <img src={image} alt="error 404" style={{ borderRadius: "5px" }} />
    </div>
  );
};

export default NotFoundPage;
