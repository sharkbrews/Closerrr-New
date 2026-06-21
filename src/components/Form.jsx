import React, { useState, useRef } from "react";
import axios from "axios";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    instagram: "",
    others: "",
    about: "",
  });

  const [errors, setErrors] = useState({});
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim())
      newErrors.name = "(Oops! This field can't be empty)";
    if (!formData.email.trim())
      newErrors.email = "(Please enter a valid email address)";
    if (!formData.instagram.trim())
      newErrors.instagram = "(Oops! This field can't be empty)";
    if (!formData.about.trim())
      newErrors.about = "(Oops! This field can't be empty)";
    if (!file) newErrors.file = "(Please upload your CV to continue)";
    else if (file.size > 50 * 1024 * 1024)
      newErrors.file = "(File size exceeds 50 MB)";
    return newErrors;
  };

  const handleFileDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) setFile(droppedFile);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) setFile(selectedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const foundErrors = validate();

    if (Object.keys(foundErrors).length > 0) {
      setErrors(foundErrors);
      setIsLoading(false);
    } else {
      setErrors({});
      try {
        const formPayload = new FormData();
        formPayload.append("name", formData.name);
        formPayload.append("email", formData.email);
        formPayload.append("instagram", formData.instagram);
        formPayload.append("others", formData.others);
        formPayload.append("about", formData.about);
        if (file) formPayload.append("file", file);

        await axios.post("/api", formPayload, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        setIsLoading(false);
        setSubmitted(true);

        setFormData({
          name: "",
          email: "",
          instagram: "",
          others: "",
          about: "",
        });
        setFile(null);
      } catch (err) {
        setIsLoading(false);
        alert("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="w-full h-fit flex justify-center px-4">
      <div className="w-full flex flex-col md:flex-row md:justify-center gap-16 md:gap-20 lg:gap-24 py-10">
        <div className="w-full md:w-[45vw] xl:w-[38vw] flex justify-center items-center p-4 md:p-6">
          <div className="w-[100%] lg:text-creator-subheading text-lg min-h-fit border-4 border-customPink-500 rounded-2xl p-4 md:p-6 px-6 md:px-6 flex flex-col items-center">
            <h1 className="lg:text-cv-heading text-3xl md:text-3xl font-hellix-bold text-customPurple-500 mb-2">
              CV Guidelines:
            </h1>
            <p className="font-hellix-medium text-customBrown-500 mb-4 text-start">
              We're so excited to learn more about you! To help us truly
              understand your unique journey and creative spirit, here's what
              would be wonderful to include in your CV:
            </p>
            <ul className="list-disc font-hellix-medium text-customBrown-500 pl-0  md:pl-8">
              <li className="mb-2">
                <span className="font-hellix-bold">A short bio —</span> just a
                few lines about who you are, what you do, where you're from, and
                the kind of content you love creating.
              </li>
              <li>
                <span className="font-hellix-bold">
                  Your main social media links —
                </span>{" "}
                Instagram, YouTube, X, Facebook, or wherever you connect most
                deeply with your community.
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center md:justify-start">
          {submitted ? (
            <div className="max-w-[43vmax] h-full flex flex-col items-center justify-center gap-2">
              <img src="/submit.svg" alt="" className="animate-success-pop animate-float success-glow" />
              <h1 className="text-center text-customPink-500 lg:text-creator-heading-lg text-4xl font-hellix-bold mb-0 leading-tight animate-fade-in-up">
                <span>You're One Step Closer to </span>
                <span className="font-fredoka text-customPurple-500">
                  {" "}
                  Closerrr.
                </span>
              </h1>
              <p className="font-hellix-medium w-[85%] lg:text-subheading-md text-xl text-center animate-fade-in-up">
                Thanks for reaching out! We're so excited to have received your
                submission and truly appreciate you taking the time to connect.
                We'll be in touch with you at your provided email address as
                quickly as we can once we've reviewed your submission.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="w-[95%] md:w-[95%]  xl:w-[85%] flex flex-col gap-7"
            >
              {[
                {
                  name: "name",
                  label: "Full Name",
                  placeholder: "Enter your full name here",
                  required: true,
                },
                {
                  name: "email",
                  label: "Email Address",
                  placeholder: "Where can we reach you?",
                  required: true,
                  type: "email",
                },
                {
                  name: "instagram",
                  label: "Instagram Handle",
                  placeholder: "Your Instagram Handle or Profile Link",
                  required: true,
                },
                {
                  name: "others",
                  label: "Other Social Handles (if you’d like to share)",
                  placeholder:
                    "YouTube, X, Facebook, or any other social links",
                  required: false,
                },
              ].map(({ name, label, placeholder, required, type }) => (
                <div className="flex flex-col" key={name}>
                  <label className="lg:text-subheading-md mb-1 text-xl font-hellix-semiBold text-customPurple-500">
                    {label}{" "}
                    {required && <span className="text-customPink-500">*</span>}
                  </label>
                  <input
                    name={name}
                    type={type || "text"}
                    value={formData[name]}
                    onChange={handleChange}
                    placeholder={`${placeholder}`}
                    className={`w-full md:h-[3.625rem] h-[4rem] lg:text-subheading-md text-lg text-customPurple-500 px-3  rounded-lg bg-formInput-500 border placeholder:text-placeholder-500 lg:placeholder:text-subheading-md  placeholder:text-lg  placeholder:font-hellix-regular  ${
                      errors[name] ? "border-red-500" : "border-inputBorder-500"
                    }`}
                  />
                  {errors[name] && (
                    <span className="text-red-500 font-hellix-semiBold md:text-cv-error text-md mt-1">
                      {errors[name]}
                    </span>
                  )}
                </div>
              ))}

              <div className="flex flex-col">
                <label className="lg:text-subheading-md text-xl font-hellix-semiBold text-customPurple-500 mb-1">
                  Tell us a little about yourself{" "}
                  <span className="text-customPink-500">*</span>
                </label>
                <textarea
                  name="about"
                  value={formData.about}
                  onChange={handleChange}
                  rows={2}
                  placeholder="Like what you do, the kind of content you create, etc "
                  className={`w-full px-3 py-2 lg:text-subheading-md text-lg text-customPurple-500  font-hellix-medium resize-none rounded-lg bg-formInput-500 border lg:placeholder:text-subheading-md placeholder:text-lg placeholder:font-hellix-regular placeholder:text-placeholder-500 ${
                    errors.about ? "border-red-500" : "border-customPink-500"
                  }`}
                />
                {errors.about && (
                  <span className="text-red-500 md:text-cv-error text-md font-hellix-semiBold mt-1">
                    {errors.about}
                  </span>
                )}
              </div>

              <div className="flex flex-col">
                <label className="lg:text-subheading-md text-xl font-hellix-semiBold text-customPurple-500 mb-1">
                  Upload Your CV (PDF, max 50 MB)
                  <span className="text-customPink-500">*</span>
                </label>
                <p className="font-hellix-medium text-md lg:text-subheading-sm leding-[1.375rem] mb-2">
                  Before uploading, please take a moment to review our CV
                  guidelines so that you include everything that helps us get to
                  know you best.
                </p>
                <div
                  onClick={() => fileInputRef.current.click()}
                  onDrop={handleFileDrop}
                  onDragOver={(e) => e.preventDefault()}
                  className="w-full min-h-[15vmax] py-4  px-4 md:px-0 md:min-h-[10vmax] border-2 border-dashed border-customPurple-500 bg-formInput-500 text-[2.4vmax] md:text-[1.4vmax] text-customPurple-500 rounded-lg flex flex-col items-center justify-center text-center gap-4 md:gap-2 cursor-pointer transition hover:border-customPink-500 "
                >
                  {file ? (
                    <p className="text-customBrown-500">{file.name}</p>
                  ) : (
                    <>
                      <img
                        className="h-[1.75rem]"
                        src="/drag.svg"
                        alt="drag file"
                      />
                      <p className="font-hellix-semiBold text-lg lg:text-subheading-md">
                        Click to Upload Or Drag & Drop Your File Here
                      </p>
                    </>
                  )}
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </div>
                {errors.file && (
                  <span className="text-red-500 md:text-cv-error text-md font-hellix-semiBold mt-1">
                    {errors.file}
                  </span>
                )}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="mt-8 cursor-pointer w-full px-6 py-4 text-white lg:text-subheading-md text-xl bg-customPurple-500 hover:bg-customPink-600 transition rounded-xl font-hellix-bold"
              >
                {isLoading ? "Submitting..." : "Let's Go"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Form;
