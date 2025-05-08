import { useReduxDispatch } from "../../../hooks/useRedux";
import { setModalAuthVisibility } from "../../../redux/modalSlice";

const BlogHeader = () => {
    const dispatch = useReduxDispatch();
  return (
    <div>
    <div className="flex justify-between p-10 bg-[#fbfbfb] max-[900px]:hidden">
      <img
        className="w-[150px] h-full"
        src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fblog_avatar_1.png?alt=media&token=8174091c-24b5-42a0-886d-845bd15cccb9"
        alt=""
      />
      <img
        className="w-[150px] h-full mt-[20px]"
        src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fblog_avatar_2.png?alt=media&token=d2b8bf6f-7c67-4e93-b026-917f4291d9f6"
        alt=""
      />
      <img
        className="w-[150px] h-full mt-[50px]"
        src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fblog_avatar_3.png?alt=media&token=7abda4b5-0f9e-4fc1-8353-e32194b925c9"
        alt=""
      />
      <img
        className="w-[150px] h-full mt-[20px]"
        src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fblog_avatar_4.png?alt=media&token=2a9f4b03-30a0-4c89-b189-7c8835ab42e7"
        alt=""
      />
      <img
        className="w-[150px] h-ful"
        src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fblog_avatar_5.png?alt=media&token=f65d9df1-ea8b-4ebe-9d23-e3e768f0f701"
        alt=""
      />
    </div>
    <h1 className="font-bold text-[60px] text-center max-[1000px]:text-[40px] max-[750px]:text-[30px] max-[400px]:text-[22px]">
      Monetize your content <br />
      <span className="text-primary">withGreenShop</span>
    </h1>
    <p className="text-center text-2xl font-medium px-6 mt-2 max-[1000px]:text-lg max-[750px]:text-[16px] max-[400px]:text-[14px]">
      Greenshop - a platform for buying and selling, publishing and
      monetizing all types of flowers: acrticles, notes, video, photos,
      podcasts or songs.
    </p>
    <button
      onClick={() => dispatch(setModalAuthVisibility())}
      className="bg-primary text-white font-medium flex items-center gap-2 px-3 py-2 rounded-md border border-primary transition-all duration-300 hover:bg-transparent hover:text-primary mx-auto mt-4 max-[400px]:text-[12px]"
    >
      Join Greenshop
    </button>
  </div>
  )
}

export default BlogHeader
