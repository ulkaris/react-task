import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Input } from "antd";
import { PrimaryButton } from "../../../Buttons/PrimaryButton";
import styles from "./index.module.css";

interface PostFormStep1Props {
  setProgressValue: (value: number) => void;
}

interface FormValues {
  title: string;
  url: string;
}

export const PostFormStep1: React.FC<PostFormStep1Props> = ({
  setProgressValue,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      title: "",
      url: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form data:", data);
    setProgressValue(100);
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

      <PrimaryButton className={styles.button} htmlType="submit">
        Next
      </PrimaryButton>
    </form>
  );
};
