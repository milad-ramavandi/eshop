import MainSlider from "@/components/MainSlider";
import { getMethodAxios } from "@/repository/AxiosRepository";
import { getMethodFetch } from "@/repository/FetchRepository";
import SevenIcons from "@/components/SevenIcons";
import IncredibleOffers from "@/components/IncredibleOffers";
import Categories from "@/components/Categories";
import DailySuggests from "@/components/DailySuggests";
import { Helmet } from "react-helmet";
import Pictures from "@/components/Pictures";

export default function Home(props) {
  return (
    <>
      <Helmet>
        <title>فروشگاه اینترنتی دیجی کالا</title>
        <link rel="shortcut icon" href="/favicons/favicon_home/favicon.ico" />
      </Helmet>
      <MainSlider data={props.sliderImagesData} />
      <SevenIcons data={props.sevenIconsData} />
      <IncredibleOffers count={5} data={props.incredibleOffersData} />
      <Categories data={props.categoriesData} />
      <Pictures/>
      <DailySuggests count={5} data={props.dailySuggestsData} />
    </>
  );
}

export async function getServerSideProps(params) {
  const sliderImagesData = await getMethodAxios("public/mainSlider").then(
    (res) => res.data
  );
  const sevenIconsData = await getMethodFetch("SevenIcons").then((res) =>
    res.json()
  );
  const incredibleOffersData = await getMethodAxios(
    "products/incredibleOffers"
  ).then((res) => res.data);
  const categoriesData = await getMethodAxios("products/categories").then(
    (res) => res.data
  );
  const dailySuggestsData = await getMethodFetch("products/dailySuggests").then(
    (res) => res.json()
  );
  return {
    props: {
      sliderImagesData,
      sevenIconsData,
      incredibleOffersData,
      categoriesData,
      dailySuggestsData,
    },
  };
}
