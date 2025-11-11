import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { Input } from "antd";
import { PrimaryButton } from "../../../Buttons/PrimaryButton";
import styles from "./index.module.css";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { GrAnnounce } from "react-icons/gr";
import galleryImg from "../../../../assets/images/icons/gallery.svg";
import { MdCancel } from "react-icons/md";

// react-quilljs imports
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

interface PostFormStep1Props {
  setProgressValue: (value: number) => void;
}

interface FormValues {
  title: string;
  url: string;
  category: string;
  cover_image: File | null;
  html_content: string;
}

export const PostFormStep1: React.FC<PostFormStep1Props> = ({
  setProgressValue,
}) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [imageName, setImageName] = useState<string>("");

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      title: "",
      url: "",
      category: "",
      cover_image: null,
      html_content: "",
    },
  });

  const { quill, quillRef } = useQuill();

  useEffect(() => {
    if (!quill) return;

    const handleChange = () => {
      setValue("html_content", quill.root.innerHTML);
    };

    quill.on("text-change", handleChange);
    return () => {
      quill.off("text-change", handleChange);
    };
  }, [quill, setValue]);

  const onSubmit = (data: FormValues) => {
    console.log("Form data:", data);
    setProgressValue(100);
  };

  const handleDeleteImage = () => {
    setPreviewUrl(null);
    setImageName("");
    setValue("cover_image", null);
    const input = document.getElementById("cover_input") as HTMLInputElement;
    if (input) input.value = "";
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.titleAndUrl}>
        <div className={styles.input_wrapper}>
          <label>Title</label>
          <Controller
            name="title"
            control={control}
            rules={{
              required: "Title is required",
              minLength: { value: 3, message: "Minimum 3 characters" },
            }}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Enter title"
                className={styles.textInput}
              />
            )}
          />
          {errors.title && (
            <p className={styles.error}>{errors.title.message}</p>
          )}
        </div>

        <div className={styles.input_wrapper}>
          <label>URL</label>
          <Controller
            name="url"
            control={control}
            rules={{
              required: "URL is required",
              pattern: {
                value: /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/\S*)?$/,
                message: "Enter a valid URL",
              },
            }}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="naa.edu.az/"
                className={styles.textInput}
              />
            )}
          />
          {errors.url && <p className={styles.error}>{errors.url.message}</p>}
        </div>
      </div>

      <div className={styles.input_wrapper}>
        <label>Category</label>
        <Controller
          name="category"
          control={control}
          rules={{ required: "Category is required" }}
          render={({ field }) => (
            <div className={styles.categories}>
              {["News", "Announcement"].map((item) => (
                <span
                  key={item}
                  onClick={() => field.onChange(item)}
                  className={`${styles.category} ${
                    field.value === item ? styles.category_active : ""
                  }`}>
                  {item === "News" ? (
                    <HiOutlineNewspaper size={20} />
                  ) : (
                    <GrAnnounce size={20} />
                  )}
                  {item}
                </span>
              ))}
            </div>
          )}
        />
        {errors.category && (
          <p className={styles.error}>{errors.category.message}</p>
        )}
      </div>

      {/* cover image start*/}
      <div className={styles.input_wrapper}>
        <label>Cover Image</label>
        <Controller
          name="cover_image"
          control={control}
          rules={{ required: "Cover image is required" }}
          render={({ field: { onChange } }) => (
            <div className={styles.imgInputAndPreview}>
              <div
                className={styles.input_image}
                onClick={() => document.getElementById("cover_input")?.click()}>
                <img src={galleryImg} alt="upload image" />
                Upload Cover Image
              </div>
              <input
                id="cover_input"
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0] || null;
                  onChange(file);
                  if (file) {
                    const preview = URL.createObjectURL(file);
                    setPreviewUrl(preview);
                    setImageName(file.name);
                  } else {
                    setPreviewUrl(null);
                    setImageName("");
                  }
                }}
                style={{ display: "none" }}
              />
              {previewUrl && (
                <div className={styles.preview_wrapper}>
                  <div className={styles.preview}>
                    <img src={previewUrl} alt="Preview" />
                  </div>
                  <span>
                    {imageName}
                    <MdCancel
                      size={16}
                      className={styles.deleteImg}
                      onClick={handleDeleteImage}
                    />
                  </span>
                </div>
              )}
            </div>
          )}
        />
        {errors.cover_image && (
          <p className={styles.error}>{errors.cover_image.message}</p>
        )}
      </div>
      {/* cover image end */}

      {/*Editor */}
      <div className={styles.editor_wrapper}>
        <div className={styles.input_wrapper}>
          <div>
            <label>HTML Content</label>
            <p className={styles.editor_desc}>
              Use the toolbar to format your text with bold, italic, headers,
              lists, and more.
            </p>
          </div>
          <Controller
            name="html_content"
            control={control}
            rules={{
              required: "HTML content is required",
              validate: (value) =>
                value.trim() !== "<p><br></p>" || "HTML content is required",
            }}
            render={() => (
              <div>
                <div ref={quillRef} className={styles.editor} />
                {errors.html_content && (
                  <p className={styles.error}>{errors.html_content.message}</p>
                )}
              </div>
            )}
          />
        </div>
      </div>

      <PrimaryButton className={styles.button} htmlType="submit">
        Next
      </PrimaryButton>
    </form>
  );
};
