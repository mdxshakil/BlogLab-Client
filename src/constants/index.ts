export const QuillModules = {
  toolbar: [
    [{ font: [] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }],
    ["blockquote", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
    ["link", "video"],
    ["clean"],
  ],
};

export const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: true,
};

export const usersFilterOptions = [
  {
    id:1,
    label: "Admins",
    value: "admin",
  },
  {
    id:2,
    label: "Bloggers",
    value: "blogger",
  },
  {
    id:3,
    label: "Readers",
    value: "reader",
  },
  {
    id:4,
    label: "Active (All)",
    value: "active",
  },
  {
    id:5,
    label: "Pending Approval",
    value: "pending",
  },
];
