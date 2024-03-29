import { Link } from "react-router-dom";

import { logo } from "../../Assets/images";
import {
  CheckSymptomsIcon,
  ArticlesIcon,
  FindDoctorsIcon,
  StoreIcon,
} from "./../../Assets/svg";

import "./style.css";

const Main = () => {
  return (
    <>
      <section className="mainWrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="mainCategories">
                {/* <div className="row text-center my-4"></div> */}
                <div className="row text-center mt-auto mb-auto">
                  <div className="col-12">
                    <div className="logo my-4">
                      <img src={logo} alt="Logo" />
                    </div>
                  </div>
                  {/* <div className="col-12">
                    <h2 className="mainCategoryTitle mb-lg-4 mb-2">
                      Choose Your Category
                    </h2>
                  </div> */}
                  <div className="col-12">
                    <Link to={"/sounds"} className="categoryLink">
                      Sounds
                    </Link>
                  </div>
                  <div className="col-12">
                    <Link to={"/relaxation"} className="categoryLink">
                      Relaxation
                    </Link>
                  </div>
                  <div className="col-12">
                    <Link to={"/stories"} className="categoryLink">
                      Stories
                    </Link>
                  </div>
                  <div className="col-12">
                    <Link to={"/articles"} className="categoryLink">
                      Audio Articles
                    </Link>
                  </div>
                  <div className="col-12">
                    <Link
                      to={"/login"}
                      className="customButton primaryButton mt-3"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
                <div className="row w-100">
                  <div className="col-12">
                    <div className="d-flex justify-content-lg-end justify-content-center gap-3 py-3">
                      <Link
                        to={"https://scofa.com/articles/"}
                        className="externalLink"
                      >
                        {/* <ArticlesIcon /> */}
                        <img src={ArticlesIcon} className="" />
                        Articles
                      </Link>
                      <Link
                        to={"https://store.scofa.com/"}
                        className="externalLink"
                      >
                        {/* <StoreIcon /> */}
                        <img src={StoreIcon} className="" />
                        Store
                      </Link>
                      <Link to={"https://scofa.com/"} className="externalLink">
                        {/* <FindDoctorsIcon /> */}
                        <img src={FindDoctorsIcon} className="" />
                        Find Doctors
                      </Link>
                      <Link
                        to={"https://scofa.com/check-sleep-disorder-symptoms/"}
                        className="externalLink"
                      >
                        {/* <CheckSymptomsIcon /> */}
                        <img src={CheckSymptomsIcon} className="" />
                        Check Symptoms
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
