import HomepageNavbar from "../components/Navbars/HomepageNavbar";
import Image from "react-bootstrap/Image";
import Footer from "../components/Footer/Footer";

const Homepage = () => {
    return (
        <div classname="app border border-primary">
            <div className="homepage container">
                <div className="my-4 d-block">
                    <h1 className="text-center title my-4 ">Welcome to Kick</h1>
                </div>
                <div className="row my-4">
                    <div className="col-md-6">
                        <Image className="d-block mx-auto my-4 rounded homepage-images" src={process.env.PUBLIC_URL + "/undraw_coffee_with_friends_3cbj.svg"} alt="coffe with friends"/>
                    </div>
                    <div className="col-md-6 d-flex align-items-center">
                        <div className="p-4 text-box rounded-3">
                            <h1 className="text">Socialize</h1>
                            <p className="text text-justify">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row my-4">
                    <div className="col-md-6 d-flex align-items-center">
                        <div className="p-4 text-box rounded-3">
                            <h1 className="text">Interact</h1>
                            <p className="text text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <Image className="d-block mx-auto my-4 homepage-images" src={process.env.PUBLIC_URL + "/undraw_educator_re_s3jk.svg"} alt="Learn with friends.svg"/>
                    </div>
                </div>
                <div className="row my-4">
                    <div className="col-md-6 ">
                        <Image className="d-block mx-auto my-4 homepage-images" src={process.env.PUBLIC_URL + "/undraw_like_dislike_re_dwcj.svg"} alt="coffe with friends"/>
                    </div>
                    <div className="col-md-6 d-flex align-items-center">
                        <div className="p-4 text-box rounded-3">
                            <h1 className="text">React</h1>
                            <p className="text text-justify">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Homepage;