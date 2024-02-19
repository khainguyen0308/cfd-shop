import { Link } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import useQuery from "../../hooks/useQuery";
import { pageService } from "../../services/pageService";
import PATHS from "../../constants/paths";

const AboutPage = () => {
  const { data: aboutData } = useQuery(() =>
    pageService.getPageDataByName("about us")
  );

  const { title, subTitle, data } = aboutData || {};
  return (
    <main className="main">
      <Breadcrumb className="breadcrumb-nav border-0 mb-0">
        <Breadcrumb.Item>
          <Link to={PATHS.HOME}>Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item isActive>About us</Breadcrumb.Item>
      </Breadcrumb>
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
            <div className="col-lg-6 mb-3 mb-lg-0">
              <h2 className="title">{data?.title1}</h2>
              <p> {data?.description1} </p>
            </div>
            <div className="col-lg-6">
              <h2 className="title">{data?.title2}</h2>
              <p>{data?.description2}</p>
            </div>
          </div>
          <div className="mb-5" />
        </div>
        <div className="bg-light-2 pt-6 pb-5 mb-6 mb-lg-8">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 mb-3 mb-lg-0">
                <h2 className="title">{data?.title3}</h2>
                <p className="lead text-primary mb-3">
                  {" "}
                  Pellentesque odio nisi, euismod pharetra a ultricies <br /> in
                  diam. Sed arcu. Cras consequat{" "}
                </p>
                <p className="mb-2">{data?.description3}</p>
              </div>
              <div className="col-lg-6 offset-lg-1">
                <div className="about-images">
                  <img src={data?.image1} alt className="about-img-front" />
                  <img src={data?.image2} alt className="about-img-back" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="brands-text">
                <h2 className="title">{data?.titleBrand}</h2>
                <p>{data?.descriptionBrand}</p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="brands-display">
                <div className="row justify-content-center">
                  <div className="col-6 col-sm-4">
                    <a href="#" className="brand">
                      <img src="/assets/images/brands/1.png" alt="Brand Name" />
                    </a>
                  </div>
                  <div className="col-6 col-sm-4">
                    <a href="#" className="brand">
                      <img src="/assets/images/brands/2.png" alt="Brand Name" />
                    </a>
                  </div>
                  <div className="col-6 col-sm-4">
                    <a href="#" className="brand">
                      <img src="/assets/images/brands/3.png" alt="Brand Name" />
                    </a>
                  </div>
                  <div className="col-6 col-sm-4">
                    <a href="#" className="brand">
                      <img src="/assets/images/brands/4.png" alt="Brand Name" />
                    </a>
                  </div>
                  <div className="col-6 col-sm-4">
                    <a href="#" className="brand">
                      <img src="/assets/images/brands/5.png" alt="Brand Name" />
                    </a>
                  </div>
                  <div className="col-6 col-sm-4">
                    <a href="#" className="brand">
                      <img src="/assets/images/brands/6.png" alt="Brand Name" />
                    </a>
                  </div>
                  <div className="col-6 col-sm-4">
                    <a href="#" className="brand">
                      <img src="/assets/images/brands/7.png" alt="Brand Name" />
                    </a>
                  </div>
                  <div className="col-6 col-sm-4">
                    <a href="#" className="brand">
                      <img src="/assets/images/brands/8.png" alt="Brand Name" />
                    </a>
                  </div>
                  <div className="col-6 col-sm-4">
                    <a href="#" className="brand">
                      <img src="/assets/images/brands/9.png" alt="Brand Name" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-2" />
      </div>
    </main>
  );
};

export default AboutPage;
