import CategoryBtn from "../../components/shared/CategoryBtn";
import detailsImage from "../../assets/images/fantasy-2049567_1280.jpg";
import {
  AiFillDelete,
  AiFillEdit,
  AiOutlineCalendar,
  AiOutlineDislike,
  AiOutlineLike,
} from "react-icons/ai";
import AddToBookmark from "../shared/BookmarkBtn";
import AuthorAvatar from "../shared/AuthorAvatar";

type IProps = {
  isModal?: boolean;
};

const BlogDetailsCard = (props: IProps) => {
  const { isModal } = props;
  return (
    <div className="bg-base-300 p-6 lg:p-12 rounded-lg">
      <div>
        {/* title, mage and date */}
        <div>
          <div className="flex items-center gap-4">
            <CategoryBtn category="nature" />
            <p className="text-gray-500 text-sm flex items-center gap-1 mb-2">
              <span>
                <AiOutlineCalendar />
              </span>
              <span>July 2, 2020</span>
            </p>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-semibold mb-6">
            Dramatically improve your cooking using just your imagination
          </h1>
          <img
            src={detailsImage}
            alt=""
            className="w-full object-cover h-40 md:h-64 rounded-lg shadow-lg"
          />
        </div>
        <div className="mt-6">
          {/* avater, edit and delete button */}
          <div className="flex items-center justify-between">
            <AuthorAvatar />
            <div className="flex gap-4">
              <button className="text-base md:text-xl text-primary border rounded-full p-[2px] border-gray-500 hover:border-primary">
                <AiFillEdit />
              </button>
              <button className="text-base md:text-xl text-error border rounded-full p-[2px] border-gray-500 hover:border-error">
                <AiFillDelete />
              </button>
            </div>
          </div>
          {/* action buttons */}
          <div className="">
            <div className="flex items-center gap-3 my-2">
              {!isModal && <AddToBookmark />}
            </div>
            <div className="flex flex-wrap items-center text-sm gap-6 mt-4 md:mt-0">
              <button
                className="flex gap-1 items-center text-sm cursor-pointer hover:text-blue-600 hover:font tooltip"
                data-tip="Like"
                disabled={isModal}
              >
                <AiOutlineLike />
                <span>123</span>
              </button>
              <button
                className="flex gap-1 items-center text-[12px] md:text-sm cursor-pointer hover:text-red-600 hover:font tooltip"
                data-tip="Dislike"
                disabled={isModal}
              >
                <AiOutlineDislike />
                <span>32</span>
              </button>
            </div>
          </div>
          <div className="divider m-0"></div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
            qui sit aperiam, consectetur iure ex totam! Iure rem et inventore
            veniam minus magnam, beatae consectetur iste omnis, eaque, error
            ipsum incidunt. Cumque quas provident illo perspiciatis quis
            tempore, rem quia ea ab porro dignissimos iusto aliquam aperiam
            earum deserunt corporis id similique perferendis? Possimus, nulla.
            Similique, voluptatibus. Dicta quasi corporis unde! Corrupti, eos
            eligendi quam autem amet optio suscipit beatae ad modi error
            explicabo dolores doloremque, veritatis veniam architecto molestiae
            asperiores, exercitationem voluptates? Reiciendis eaque ex at ad,
            nulla commodi nisi ipsum fugit explicabo suscipit minus
            necessitatibus libero! Ullam atque magni obcaecati nostrum, veniam
            eius ratione soluta ab facilis molestiae amet deserunt eos qui
            expedita. Illum laborum facilis rerum quis! Error fugiat non earum
            veniam reprehenderit rem delectus itaque provident corporis. Ex
            repellat quasi velit itaque qui dignissimos illo eligendi beatae
            temporibus quos sequi quod incidunt, corrupti est, magni, illum
            officiis reprehenderit laborum? Modi illo nobis voluptatum fugiat?
            Perferendis aliquid voluptates nam velit nulla labore facilis ipsum
            dolores iure ipsa est impedit qui sint animi blanditiis, accusantium
            quaerat aspernatur at quam quia excepturi suscipit. Deleniti
            suscipit nisi autem quae fugiat reprehenderit, laboriosam, id labore
            fuga consequuntur quidem illum atque accusamus praesentium! Ipsa ex
            culpa ipsam similique quibusdam consequatur natus quod alias,
            repellendus iste. Distinctio, sint deleniti! Inventore explicabo
            temporibus eligendi error delectus vel ipsa, voluptas distinctio
            cumque rerum perspiciatis eos voluptatibus suscipit officia dolores
            facere veritatis beatae placeat laboriosam accusantium eaque. Saepe
            asperiores officia laboriosam, voluptatum hic veritatis
            consequuntur. Fugiat expedita mollitia ea culpa quod! Perspiciatis
            nisi labore natus deleniti est earum aliquam quasi vitae ex nulla
            et, officia, reprehenderit rem minima facere quis accusamus error
            consequatur minus, qui nostrum sint! Non nostrum facilis harum dicta
            delectus, cupiditate, sed, veritatis fugit numquam alias consequatur
            quo natus optio placeat magnam cum eos hic at quibusdam ad culpa. At
            nesciunt totam perferendis quam, exercitationem dolor fugiat earum
            consectetur sit ducimus deleniti, autem labore accusantium ratione
            hic dicta maxime consequuntur. Magnam atque repellat optio totam!
            Quod consectetur reiciendis illum dolor, deleniti voluptatum
            blanditiis sed provident earum neque magnam debitis voluptatibus
            veniam cum inventore distinctio ipsam similique, molestiae corporis
            placeat fugiat? Odit, laudantium rem. Architecto quos quas
            voluptatem aliquid, esse unde accusantium iure, laboriosam eius,
            repudiandae fuga excepturi! Velit obcaecati rem, voluptatum sequi
            tempora saepe autem praesentium accusamus corporis omnis cum
            eligendi atque modi magni laudantium sapiente. Impedit suscipit sit
            quia, voluptatum voluptatibus, optio quam enim explicabo voluptatem
            expedita quas numquam reiciendis est atque sapiente iste, sed
            commodi mollitia. Ullam nulla ratione corporis facilis, at eum fuga
            rerum atque unde molestias incidunt nemo eius obcaecati, dolores
            commodi totam exercitationem hic deserunt possimus ipsa! Doloremque
            laudantium pariatur temporibus minima, assumenda ullam sit
            voluptatum amet, earum odit quod quidem facilis accusantium adipisci
            unde quibusdam error eveniet eligendi explicabo, iure non ipsa
            cupiditate similique. Quia nisi esse omnis officiis, id culpa ad
            recusandae consequatur soluta suscipit sunt tenetur labore! Non,
            minus. Tempora consequatur ipsum perferendis! Consequatur ipsa vel
            sed dicta ea obcaecati excepturi fuga ipsam. Eum, officia!
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsCard;
