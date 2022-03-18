import MediaPage from "./MediaPage";

const Index = ({medias, brands, bannerTitle, highlightDescription, highlightBanner}) => {
    return(<MediaPage medias={medias} brands={brands} bannerTitle={bannerTitle} highlightDescription={highlightDescription} highlightBanner={highlightBanner}/>);
}

export default Index;