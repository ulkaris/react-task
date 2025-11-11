import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { PrimaryButton } from "../../../Buttons/PrimaryButton";
import styles from "./index.module.css";
import uploadIcon from "../../../../assets/images/icons/upload-icon.svg";
import deleteIcon from "../../../../assets/images/icons/trash.svg";

interface PostFormStep2Props {
  setProgressValue: (value: number) => void;
  handleCancel: () => void;
}

interface FormValues {
  gallery_images: File[];
}

export const PostFormStep2: React.FC<PostFormStep2Props> = ({
  handleCancel,
  setProgressValue,
}) => {
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    trigger,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      gallery_images: [],
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form data:", data);
    setProgressValue(50);
    handleCancel();
  };

  const handleDeleteImage = (index: number) => {
    setPreviewUrls((prev) => prev.filter((_, i) => i !== index));

    const currentFiles = getValues("gallery_images") || [];
    const updatedFiles = currentFiles.filter((_, i) => i !== index);
    setValue("gallery_images", updatedFiles);

    const input = document.getElementById("gallery_input") as HTMLInputElement;
    if (input) input.value = "";
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.container}>
        <div className={styles.title}>Gallery Images</div>
        <p className={styles.desc}>JPG/PNG, multiple allowed</p>

        <Controller
          name="gallery_images"
          control={control}
          rules={{ required: "At least one image is required" }}
          render={({ field: { onChange, value } }) => (
            <div
              className={styles.input_wrapper}
              onClick={() => document.getElementById("gallery_input")?.click()}>
              <div className={styles.input_image}>
                <img src={uploadIcon} alt="upload image" />
                Upload an image
              </div>

              <input
                id="gallery_input"
                type="file"
                accept="image/*"
                multiple
                style={{ display: "none" }}
                onChange={(e) => {
                  const files = Array.from(e.target.files || []);
                  if (!files.length) return;

                  const newPreviews = files.map((f) => URL.createObjectURL(f));
                  setPreviewUrls((prev) => [...prev, ...newPreviews]);

                  const updatedFiles = [...(value || []), ...files];
                  onChange(updatedFiles);
                  setValue("gallery_images", updatedFiles);

                  trigger("gallery_images");
                }}
              />
            </div>
          )}
        />

        {previewUrls.length > 0 && (
          <div className={styles.preview_wrapper}>
            {previewUrls.map((url, index) => (
              <div key={index} className={styles.preview}>
                <img src={url} alt={`Preview ${index}`} />
                <span>
                  <img
                    src={deleteIcon}
                    alt="delete image"
                    onClick={() => handleDeleteImage(index)}
                    className={styles.deleteIcon}
                  />
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {errors.gallery_images && (
        <p className={styles.error}>{errors.gallery_images.message}</p>
      )}

      <div className={styles.btns}>
        <button
          className={styles.btn_cancel}
          onClick={() => {
            reset();
            setPreviewUrls([]);
            handleCancel();
            setProgressValue(50);
          }}>
          Cancel
        </button>
        <PrimaryButton className={styles.btn_submit} htmlType="submit">
          Submit
        </PrimaryButton>
      </div>
    </form>
  );
};
