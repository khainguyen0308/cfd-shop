import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import { MESSAGE, REGREX } from "../../constants/validate";
import { message } from "antd";
import useQuery from "../../hooks/useQuery";
import { pageService } from "../../services/pageService";

const ContactPage = () => {
  const { data: contactData } = useQuery(() =>
    pageService.getPageDataByName("service")
  );

  const { title, subTitle, data } = contactData || {};
  console.log("contactData", contactData);
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    control,
    formState: { errors },
  } = useForm();
  const _onSubmit = (data) => {
    if (data) message.success("Get in touch successfully");
  };
  return (
    <main className="main">
      <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 mb-0">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Contact us
            </li>
          </ol>
        </div>
      </nav>
      <div className="container">
        <div
          className="page-header page-header-big text-center"
          style={{
            backgroundImage: `url(${data?.banner})`,
          }}
        >
          <h1 className="page-title text-white">
            {title} <span className="text-white">{subTitle}</span>
          </h1>
        </div>
      </div>
      <div className="page-content pb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-2 mb-lg-0">
              <h2 className="title mb-1">{data?.title}</h2>
              <p className="mb-3">{data?.description}</p>
              <div className="row">
                <div className="col-sm-7">
                  <div className="contact-info">
                    <h3>The Office</h3>
                    <ul className="contact-list">
                      <li>
                        <i className="icon-map-marker" /> {data?.address}
                      </li>
                      <li>
                        <i className="icon-phone" />
                        <a href="tel:#">{data?.phone}</a>
                      </li>
                      <li>
                        <i className="icon-envelope" />
                        <a href="mailto:#">{data?.email}</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-5">
                  <div className="contact-info">
                    <h3>The Office</h3>
                    <ul className="contact-list">
                      <li>
                        <i className="icon-clock-o" />
                        <span className="text-dark">{data?.working}</span>
                      </li>
                      <li>
                        <i className="icon-calendar" />
                        <span className="text-dark">{data?.workingSunday}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="title mb-1">Got Any Questions?</h2>
              <p className="mb-2">
                Use the form below to get in touch with the sales team
              </p>
              <form
                action="#"
                className="contact-form mb-3"
                onSubmit={handleSubmit(_onSubmit)}
              >
                <div className="row">
                  <div className="col-sm-6">
                    <Input
                      label="Name"
                      placeholder="Name *"
                      required
                      {...register("name", { required: MESSAGE.required })}
                      error={errors?.name?.message}
                    />
                  </div>
                  <div className="col-sm-6">
                    <Input
                      label="Email"
                      placeholder="Email *"
                      required
                      {...register("email", {
                        required: MESSAGE.required,
                        pattern: {
                          value: REGREX.email,
                          message: MESSAGE.email,
                        },
                      })}
                      error={errors?.email?.message}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <Input
                      label="Phone"
                      placeholder="Phone *"
                      required
                      {...register("phone", { required: MESSAGE.required })}
                      error={errors?.phone?.message}
                    />
                  </div>
                  <div className="col-sm-6">
                    <Input
                      label="Subject"
                      placeholder="Subject *"
                      required
                      {...register("subject", { required: MESSAGE.required })}
                      error={errors?.subject?.message}
                    />
                  </div>
                </div>

                <Input
                  label="Message"
                  placeholder="Message *"
                  required
                  renderInput={(inputProps) => {
                    return (
                      <textarea
                        {...inputProps}
                        {...register("message", { required: MESSAGE.required })}
                        className="form-control"
                        cols={30}
                        rows={4}
                        placeholder="Message"
                      />
                    );
                  }}
                  error={errors?.message?.message || ""}
                />

                <button
                  type="submit"
                  className="btn btn-outline-primary-2 btn-minwidth-sm"
                >
                  <span>SUBMIT</span>
                  <i className="icon-long-arrow-right" />
                </button>
              </form>
            </div>
          </div>
          <hr className="mt-4 mb-5" />
          <div className="stores mb-4 mb-lg-5">
            <h2 className="title text-center mb-3">Our Stores</h2>
            <div className="row">
              <div className="col-lg-6">
                <div className="store">
                  <div className="row">
                    <div className="col-sm-5 col-xl-6">
                      <figure className="store-media mb-2 mb-lg-0">
                        <img
                          src="/assets/images/stores/img-1.jpg"
                          alt="image"
                        />
                      </figure>
                    </div>
                    <div className="col-sm-7 col-xl-6">
                      <div className="store-content">
                        <h3 className="store-title">Wall Street Plaza</h3>
                        <address>88 Pine St, New York, NY 10005, USA</address>
                        <div>
                          <a href="tel:#">+1 987-876-6543</a>
                        </div>
                        <h4 className="store-subtitle">Store Hours:</h4>
                        <div>Monday - Saturday 11am to 7pm</div>
                        <div>Sunday 11am to 6pm</div>
                        <a href="#" className="btn btn-link" target="_blank">
                          <span>View Map</span>
                          <i className="icon-long-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="store">
                  <div className="row">
                    <div className="col-sm-5 col-xl-6">
                      <figure className="store-media mb-2 mb-lg-0">
                        <img
                          src="/assets/images/stores/img-2.jpg"
                          alt="image"
                        />
                      </figure>
                    </div>
                    <div className="col-sm-7 col-xl-6">
                      <div className="store-content">
                        <h3 className="store-title">One New York Plaza</h3>
                        <address>88 Pine St, New York, NY 10005, USA</address>
                        <div>
                          <a href="tel:#">+1 987-876-6543</a>
                        </div>
                        <h4 className="store-subtitle">Store Hours:</h4>
                        <div>Monday - Friday 9am to 8pm</div>
                        <div>Saturday - 9am to 2pm</div>
                        <div>Sunday - Closed</div>
                        <a href="#" className="btn btn-link" target="_blank">
                          <span>View Map</span>
                          <i className="icon-long-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15677.671652456593!2d106.6603257!3d10.7792694!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752940e76e8ccb%3A0x9ed4e323c103e3d1!2sCFD%20Circle!5e0!3m2!1svi!2s!4v1685171988555!5m2!1svi!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
