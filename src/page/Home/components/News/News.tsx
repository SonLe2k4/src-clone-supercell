import FieldItem from "../../../../components/common/ListCard";
import listNews from "./ListNews";

type Props = {};

const News = (props: Props) => {
    return <FieldItem data={listNews} btnBottom={{link: '/', text: 'News Archive'}} />;
};

export default News;
