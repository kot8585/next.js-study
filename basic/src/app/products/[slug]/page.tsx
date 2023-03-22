type Props = {
  params: {
    slug: string;
  };
};
export default function page({ params }: Props) {
  return <div>{params.slug} 제품 설명 페이지</div>;
}

//generateStaticParams는 nextjs에서 만든 규격이다.
export function generateStaticParams() {
  const products = ["pants", "skirt"];
  return products.map((product) => ({
    slug: product,
  }));
}
