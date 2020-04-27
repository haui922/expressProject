//global
const HOME = "/";
const INFO = "/info";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

//travel
const TRAVEL = "/travel";
const FOOD = "/food"; //대표음식
const MARKET = "/market"; //시장포함
const NIGHTSCAPE = "/nightscape"; //서울 야경명소
const STREET = "/street"; //인기있는거리 (예를 들면 가로수길 등)
const SPOT = "/spot"; //유명한 여행지

//transport
const TRANSPORT = "/transport"; //아래 카테고리 본문에 보이게 해놓은 페이지
const BUS = "/bus";
const METRO = "/metro";
const TAXI = "/taxi";
const MORE_TRANS = "/more-trans";

//user
const USER = "/user";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

//course
const COURSE = "/course";
const CREATE_COURSE = "/create-course";
const COURSE_DETAIL = "/:id";
const COURSE_EDIT = "/:id/course-edit";
const COURSE_DELETE = "/:id/course-delete";

//blog??posting??
const BLOG = "/blog";
const UPLOAD = "/upload";
const BLOG_DETAIL = "/:id";
const EDIT_BLOG = "/:id/edit";
const DELETE_BLOG = "/:id/delete";

const routes = {
  //global
  home: HOME,
  info: INFO,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,

  //category
  travel: TRAVEL,
  food: FOOD,
  market: MARKET,
  nightscape: NIGHTSCAPE,
  street: STREET,
  spot: SPOT,

  //transport
  transport: TRANSPORT,
  bus: BUS,
  metro: METRO,
  taxi: TAXI,
  moretrans: MORE_TRANS,

  //user
  user: USER,
  userDetail: (id) => {
    if (id) {
      return `/user/${id}`;
    } else {
      return USER_DETAIL;
    }
  },
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,

  //blog
  blog: BLOG,
  upload: UPLOAD,
  blogDetail: (id) => {
    if (id) {
      return `/blog/${id}`;
    } else {
      return BLOG_DETAIL;
    }
  },
  editBlog: (id) => {
    if (id) {
      return `/blog/${id}/edit`;
    } else {
      return EDIT_BLOG;
    }
  },
  deleteBlog: (id) => {
    if (id) {
      return `/blog/${id}/delete`;
    } else {
      return DELETE_BLOG;
    }
  },

  //course
  course: COURSE,
  createcourse: CREATE_COURSE,
  detailcourse: COURSE_DETAIL,
  editcourse: COURSE_EDIT,
  deletecourse: COURSE_DELETE,
};

export default routes;
