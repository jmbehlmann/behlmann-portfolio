export function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      <div className='ContactForm'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='contactForm'>
                <form id='contact-form' noValidate>
                  {/* Row 1 of form */}
                  <div className='row py-2 formRow'>
                    <div className='col'>
                      <input
                        type='text'
                        name='name'
                        className='form-control formInput'
                        placeholder='Name'
                      ></input>
                    </div>
                  </div>
                  {/* Row 2 of form */}
                  <div className='row py-2 formRow'>
                    <div className='col'>
                      <input
                        type='email'
                        name='email'
                        className='form-control formInput'
                        placeholder='Email address'
                      ></input>
                    </div>
                  </div>
                  {/* Row 3 of form */}
                  <div className='row py-2 formRow'>
                    <div className='col'>
                      <input
                        type='text'
                        name='subject'
                        className='form-control formInput'
                        placeholder='Subject'
                      ></input>
                    </div>
                  </div>
                  {/* Row 4 of form */}
                  <div className='row py-2 formRow'>
                    <div className='col'>
                      <textarea
                        rows={3}
                        name='message'
                        className='form-control formInput'
                        placeholder='Message'
                      ></textarea>
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
