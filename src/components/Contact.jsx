import { useForm } from 'react-hook-form';

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    const { name, email, subject, message } = data;
    try {
      const templateParams = {
        name,
        email,
        subject,
        message
      };
      await emailjs.send(
        import.meta.env.EMAIL_JS_SERVICE_ID,
        import.meta.env.EMAIL_JS_TEMPLATE_ID,
        templateParams,
        import.meta.env.EMAIL_JS_PUBLIC_KEY
      );
      reset();
    } catch (e) {
      console.log(e);
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
                      <button className='btn btn-primary' type='submit'>
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
