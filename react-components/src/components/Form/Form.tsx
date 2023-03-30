import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form/dist/types';
import { Countries, FormCard } from '../../types';
import { createImage } from '../../utils';

type Fields = {
  userName: string;
  country: Countries;
  date: string;
  gender: string;
  agreement: boolean;
  image: FileList;
};

export const Form = ({ cb }: { cb: (card: FormCard) => void }) => {
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        setIsSuccess(false);
      }, 2000);
    }
  }, [isSuccess]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Fields>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<Fields> = (data) => {
    const card: FormCard = { ...data, image: createImage(data.image[0]) };
    cb(card);
    setIsSuccess(true);
    reset();
  };

  const handleChange = () => {
    setIsSuccess(false);
  };

  return (
    <form
      className="form-page__form form"
      onSubmit={handleSubmit(onSubmit)}
      onChange={handleChange}
    >
      <input
        type="text"
        placeholder="enter your first-name and last-name as 'Name Lastname'"
        role="name-input"
        {...register('userName', { required: true, pattern: /^[A-Z][a-z]{2,}\s[A-Z][a-z]{2,}$/ })}
      />
      {errors.userName && (
        <span className="form__error">
          enter correct name; first and last name must start with a capital letter and contain at
          least three characters
        </span>
      )}

      <select
        role="select"
        defaultValue=""
        {...register('country', { required: true, pattern: /^.+$/ })}
      >
        <option value="">-- choose your country --</option>
        <option value="belarus">Belarus</option>
        <option value="germany">Germany</option>
        <option value="poland">Poland</option>
      </select>
      {errors.country && <span className="form__error">choose country</span>}

      <input
        type="date"
        placeholder="enter your name"
        role="date-input"
        {...register('date', { required: true })}
      />
      {errors.date && <span className="form__error">enter correct date</span>}

      <div className="form__radio-group">
        <input type="radio" {...register('gender', { required: true })} value="male" /> Male
        <input type="radio" {...register('gender', { required: true })} value="female" /> Female
      </div>
      {errors.gender && <span className="form__error">choose gender</span>}

      <label className="form__upload">
        <input type="file" defaultValue="" {...register('image', { required: true })} />
      </label>
      {errors.image && <span className="form__error">upload some image file</span>}

      <label>
        <input type="checkbox" defaultValue="" {...register('agreement', { required: true })} />
        {'I agree to the processing of information'}
      </label>
      {errors.agreement && (
        <span className="form__error">consent to the processing of information</span>
      )}

      {isSuccess && <div className="form__message">Data processed successfully</div>}
      <button className="form__btn" type="submit">
        Submit
      </button>
    </form>
  );
};
