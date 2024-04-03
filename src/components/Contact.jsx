import { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

export function Contact() {
  const serviceId = import.meta.env.VITE_EMAIL_JS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID;
  const publicKey = import.meta.env.EMAIL_JS_PUBLIC_KEY;

  console.log(publicKey)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const [disabled, setDisabled] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    display: false,
    message: '',
    type: '',
  });


  // Shows alert message for form submission feedback
  const toggleAlert = (message, type) => {
    setAlertInfo({ display: true, message, type });

    setTimeout(() => {
      setAlertInfo({ display: false, message: '', type: '' });
    }, 5000);
  };

  const onSubmit = async (data) => {
    const { name, email, subject, message } = data;
    try {
      setDisabled(true);
      const templateParams = {
        name,
        email,
        subject,
        message
      };
      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );
    toggleAlert('Message Sent!', 'success');
    } catch (e) {
      console.error(e);
      toggleAlert('Uh oh. Something went wrong.', 'danger');
    } finally {
      setDisabled(false);
      reset();
    }
  };

  return (
    <div>
      <h2>Contact</h2>
      <div className='ContactForm'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='contactForm'>
                <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                  {/* Row 1 of form */}
                  <div className='row py-2 formRow'>
                    <div className='col'>
                      <input
                        type='text'
                        name='name'
                        {...register('name', {
                          required: { value: true, message: 'Please enter your name' },
                          maxLength: {
                            value: 30,
                            message: 'Please use 30 characters or less'
                          }
                        })}
                        className='form-control formInput'
                        placeholder='Name'
                      ></input>
                      {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                    </div>
                  </div>
                  {/* Row 2 of form */}
                  <div className='row py-2 formRow'>
                    <div className='col'>
                      <input
                        type='email'
                        name='email'
                        {...register('email', {
                          required: true,
                          pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                        })}
                        className='form-control formInput'
                        placeholder='Email address'
                      ></input>
                      {errors.email && (
                        <span className='errorMessage'>Please enter a valid email address</span>
                      )}
                    </div>
                  </div>
                  {/* Row 3 of form */}
                  <div className='row py-2 formRow'>
                    <div className='col'>
                      <input
                        type='text'
                        name='subject'
                        {...register('subject', {
                          required: { value: true, message: 'Please enter a subject' },
                          maxLength: {
                            value: 75,
                            message: 'Subject cannot exceed 75 characters'
                          }
                        })}
                        className='form-control formInput'
                        placeholder='Subject'
                      ></input>
                      {errors.subject && (
                        <span className='errorMessage'>{errors.subject.message}</span>
                      )}
                    </div>
                  </div>
                  {/* Row 4 of form */}
                  <div className='row py-2 formRow'>
                    <div className='col'>
                      <textarea
                        rows={5}
                        name='message'
                        {...register('message', {
                          required: true
                        })}
                        className='form-control formInput'
                        placeholder='Message'
                      ></textarea>
                      {errors.message && <span className='errorMessage'>Please enter a message</span>}
                    </div>
                  </div>
                  <div className='row py-2 formRow'>
                    <div className='col text-left'>
                      <button
                        className='btn btn-primary'
                        type='submit'
                        disabled={disabled}
                      >
                        {disabled ? 'Submitting...' : 'Submit'}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
        {alertInfo.display && (
          <div
            className={`alert alert-${alertInfo.type} alert-dismissible mt-2 mx-2`}
            role='alert'
          >
            {alertInfo.message}
            <button
              type='button'
              className='btn btn-close'
              data-bs-dismiss='alert'
              aria-label='Close'
              onClick={() =>
                setAlertInfo({ display: false, message: '', type: '' })
              }
            ></button>
          </div>
        )}
    </div>
  );
};
