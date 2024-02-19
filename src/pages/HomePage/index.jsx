import BrandSection from "./BrandSection";
import DealSection from "./DealSection";
import FeaturedSection from "./FeaturedSection";
import GetDealSection from "./GetDealSection";
import HotProductSection from "./HotProductSection";
import IntroSection from "./IntroSection";
import ServiceSection from "./ServiceSection";
import useHomePage from "./useHomePage";

const HomePage = () => {
  const {
    introProps,
    hotProductProps,
    dealProps,
    brandProps,
    featuredProps,
    serviceProps,
    getDealProps,
  } = useHomePage();

  return (
    <main className="main">
      <IntroSection {...introProps} />
      <HotProductSection {...hotProductProps} />
      <DealSection {...dealProps} />
      <BrandSection {...brandProps} />
      <FeaturedSection {...featuredProps} />
      <ServiceSection {...serviceProps} />
      <GetDealSection {...getDealProps} />
    </main>
  );
};

export default HomePage;
