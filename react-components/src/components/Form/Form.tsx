import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form/dist/types';
import { FormCard, Fields } from '../../types';
import { createImage } from '../../utils';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setCards, setIsSuccess } from '../../store/form/formSlice';

export const Form = () => {
  const { isSuccess } = useAppSelector((state) => state.form);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        dispatch(setIsSuccess(false));
      }, 2000);
    }
  }, [isSuccess, dispatch]);

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
    const img = data.images?.[0] as File;
    const { agreement, country, date, userName, gender } = data;
    const card: FormCard = { agreement, country, date, userName, gender, image: createImage(img) };
    dispatch(setCards(card));
    dispatch(setIsSuccess(true));
    reset();
  };

  const handleChange = () => {
    dispatch(setIsSuccess(false));
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
        <input type="file" defaultValue="" {...register('images', { required: true })} />
      </label>
      {errors.images && <span className="form__error">upload some image file</span>}

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
