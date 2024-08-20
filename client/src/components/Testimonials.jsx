import { useState, useEffect } from "react";
import FeedbackCard from "./FeedbackCard";
import Button from "./Button";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";
import bgImage from "../assets/bg2.png";

const Testimonials = () => {
  const [share, setShare] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    title: "",
    avatar: null,
    comment: "",
  });
  const [file, setFile] = useState(undefined);
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [comments, setComments] = useState([]);
  const [showMore, setShowMore] = useState(true);
  const [limit, setLimit] = useState(3);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePerc(Math.round(progress));
      },
      (error) => {
        setFileUploadError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData({ ...formData, avatar: downloadURL })
        );
      }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/comment/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFormData({
          username: "",
          title: "",
          avatar: null,
          comment: "",
        });
        setShare(false);
        alert("Ihr Kommentar wurde zur Genehmigung eingereicht.");
      } else {
        console.error("Failed to create comment");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const fetchComments = async () => {
    try {
      const res = await fetch(`/api/comment/getApproved?limit=${limit}`);
      const data = await res.json();
      if (res.ok) {
        setComments(data);
        if (data.length < limit) {
          setShowMore(false);
        }
      }
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const handleShowMore = () => {
    setLimit((prevLimit) => prevLimit + 3);
  };

  useEffect(() => {
    fetchComments();
  }, [limit]);

  return (
    <section
      id="clients"
      className="py-16 flex flex-col items-center relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      {!share ? (
        <div className="w-full flex flex-col sm:flex-row justify-between items-center mb-16 relative z-10">
          <h2 className="text-4xl font-semibold text-white text-center sm:text-left">
            Ihr Feedback ist uns wichtig.
          </h2>
          <div className="mt-6 sm:mt-0">
            <Button
              styles="mt-10 bg-yellow-500 text-black px-6 py-3 rounded-md"
              onClick={() => {
                setShare((prev) => !prev);
              }}
            >
              Teilen
            </Button>
          </div>
        </div>
      ) : (
        <div className="w-full mt-6 relative z-10">
          <h2 className="text-4xl font-semibold text-white text-center sm:text-left">
            Was sind Ihre Gedanken über uns?
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Ihr Name"
              className="p-3 rounded-md border border-gray-300"
              required
            />
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Ihr Titel"
              className="p-3 rounded-md border border-gray-300"
              required
            />
            <input
              type="file"
              name="avatar"
              accept="image/*"
              onChange={handleFileChange}
              className="p-3 rounded-md border border-gray-300"
              required
            />
            <p className="text-sm self-center">
              {fileUploadError ? (
                <span className="text-red-700">
                  Fehler beim Hochladen des Bildes (das Bild muss weniger als 2
                  MB groß sein)
                </span>
              ) : filePerc > 0 && filePerc < 100 ? (
                <span className="text-slate-700">{`Hochladen ${filePerc}%`}</span>
              ) : filePerc === 100 ? (
                <span className="text-green-700">
                  Bild erfolgreich hochgeladen!
                </span>
              ) : (
                ""
              )}
            </p>
            <textarea
              name="comment"
              value={formData.comment}
              onChange={handleInputChange}
              placeholder="Ihre Gedanken"
              className="p-3 rounded-md border border-gray-300 h-32"
              required
            />
            <Button
              type="submit"
              styles="mt-4 bg-yellow-500 text-black px-6 py-3 rounded-md"
            >
              Absenden
            </Button>
          </form>
        </div>
      )}

      <div className="flex flex-wrap sm:justify-start justify-center w-full relative z-10">
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <FeedbackCard
              key={comment._id || index}
              {...comment}
              name={comment.username}
              content={comment.comment}
              title={comment.title}
              img={comment.avatar}
            />
          ))
        ) : (
          <p className="text-white text-lg">Derzeit gibt es kein Feedback.</p>
        )}
      </div>

      {showMore && comments.length > 0 && (
        <Button
          styles="mt-6 bg-yellow-500 text-black px-6 py-3 rounded-md"
          onClick={handleShowMore}
        >
          Mehr anzeigen
        </Button>
      )}
    </section>
  );
};

export default Testimonials;
