import carousel from "../assets/images/fantasy-2049567_1280.jpg";
type IProps = {
  name: string;
};
const CarouselItem = ({ name }: IProps) => {
  return (
    <div className="grid items-center grid-cols-2 gap-12 p-12 bg-base-200 dark:bg-base-200">
      <div>
        <img
          src={carousel}
          alt=""
          className="rounded-lg object-cover w-[100%]"
        />
      </div>
      <div className="flex flex-col justify-center gap-6">
        <div>
          <p>Business Travel - July 2, 2020</p>
          <h2>
            Your most unhappy customers are your greatest source of learning.
          </h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
          dignissimos laboriosam sapiente fugiat asperiores. Maiores neque
          consectetur rem doloribus assumenda voluptate ipsa sed dolore odit,
          sit possimus aperiam at molestias labore quod libero quasi delectus
          laborum exercitationem tempore porro officia. Expedita quam corporis
          eos at itaque, quidem perferendis modi repellendus.
        </p>
        <div className="flex items-center gap-6">
          <div className="avatar">
            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png" />
            </div>
          </div>
          <div>
            <h6>{name}</h6>
            <small>CEO and Founder</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
