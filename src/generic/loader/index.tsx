import { Card, Skeleton } from "antd";

const Loader = () => {
  const category_loader = () => {
    return Array.from({ length: 9 }).map((_, idx) => (
      <div key={idx} className="mt-2">
        <Skeleton.Input className="!w-full !h-[30px]" />
      </div>
    ));
  };
  const discount_loader = () => {
    return (
      <div className="w-full bg-[#eef7f1] text-center px-4 py-20px">
        <Skeleton.Input className="!w-full !h-[30px] !mt-[10px]" />
        <Skeleton.Input className="!w-full !h-[30px] !mt-[10px]" />
        <Skeleton.Image className="!w-full !h-[200px] !mt-[10px]" />
      </div>
    );
  };
  const card_loader = () => {
    return Array.from({ length: 6 }).map((_, index) => (
      <div key={index}>
        <Skeleton.Image className="!w-full !h-[320px]" />
        <Skeleton />
      </div>
    ));
  };
  const image_loading = () => {
    return Array.from({ length: 4 }).map((_, idx) => (
      <Skeleton.Image
        key={idx}
        active
        className="!w-[90px] !h-[90px] max-[600px]:!h-[60px] max-[600px]:!w-[60px]"
      />
    ));
  };
  const blog_card_loader = () => {
    return Array.from({ length: 6 }).map((_, idx) => {
      return (
        <Card key={idx}>
          <Skeleton />
        </Card>
      );
    });
  };
  const blog_id_Rending = () => (
    <div>
      <div className="flex gap-4">
        <Skeleton.Avatar active />
        <Skeleton.Input active />
      </div>
      <div>
        <Skeleton.Input active className="my-[15px]" />
        {Array.from({ length: 20 }).map((_, idx) => (
          <Skeleton.Input
            key={idx}
            active
            className="!w-full my-[10px] h-[15px]"
          />
        ))}
      </div>
    </div>
  );
  const blog_userPostLoader = () => {
    return (
        <div>
            <div className="flex gap-4">
                <Skeleton.Avatar active />
                <Skeleton.Input active />
            </div>
            <div>
                <Skeleton.Input
                    active
                    className="my-[15px] !h-[25px] !w-[70%]"
                />
                {Array.from({length: 10}).map((_, idx) => (
                    <Skeleton.Input
                        key={idx}
                        active
                        className="!w-full my-[10px] !h-[20px]"
                    />
                ))}
            </div>
        </div>
    )
}

const blog_loader = () => {
  return Array.from({length: 6}).map((_, idx) => (
      <div key={idx}>
          <Skeleton.Input
              active
              className="my-[15px] !h-[25px] !w-[70%]"
          />
          {Array.from({length: 6}).map((_, idx) => (
              <Skeleton.Input
                  key={idx}
                  active
                  className="!w-full my-[5px] !h-[20px]"
              />
          ))}
      </div>
  ))
}

  return {
    category_loader,
    discount_loader,
    card_loader,
    image_loading,
    blog_card_loader,
    blog_id_Rending,
    blog_userPostLoader,
    blog_loader
  };
};

export default Loader;
